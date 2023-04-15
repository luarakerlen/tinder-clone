import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import * as AuthSession from 'expo-auth-session';
import { Alert } from 'react-native';

interface User {
	id: string;
	name: string;
	firstName?: string;
	email: string;
	pictureUrl?: string;
}
interface ContextData {
	user?: User;
	signInWithGoogleAsync: () => Promise<void>;
}

const AuthContext = createContext<ContextData>({} as ContextData);

type AuthResponse = {
	type: string;
	params: {
		access_token: string;
	};
};

interface AuthProviderProps {
	children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
	const [user, setUser] = useState<User>();

	async function loadProfile(accessToken: string) {
		const response = await fetch(
			`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${accessToken}`
		);
		const data = await response.json();

		setUser({
			id: data.id,
			name: data.name,
			firstName: data.given_name,
			email: data.email,
			pictureUrl: data.picture,
		});
	}

	async function signInWithGoogleAsync() {
		const CLIENT_ID =
			'648392820231-a6n4vk7ll1akkpurh88qog2n56camtq2.apps.googleusercontent.com';
		const REDIRECT_URI = 'https://auth.expo.io/@luarakerlen/tinder-clone';
		const RESPONSE_TYPE = 'token';
		const SCOPE = encodeURI('profile email');

		const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
		const { type, params } = (await AuthSession.startAsync({
			authUrl,
		})) as AuthResponse;

		if (type === 'success') {
			await loadProfile(params.access_token);
		} else {
			Alert.alert(
				'Erro ao logar',
				'Não foi possível fazer login com a conta Google'
			);
		}
	}

	return (
		<>
			<AuthContext.Provider value={{ user, signInWithGoogleAsync }}>
				{children}
			</AuthContext.Provider>
		</>
	);
}

export default function useAuth() {
	return useContext(AuthContext);
}
