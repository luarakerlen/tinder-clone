import { createContext, ReactNode, useContext, useEffect } from 'react';

interface UserData {
	user?: string;
	signInWithGoogleAsync: () => Promise<void>;
}

const AuthContext = createContext<UserData>({} as UserData);

const config = {
	iosClientId:
		'854451341634-hqiqc585gp2ere73d40v40q3gtgua5kl.apps.googleusercontent.com',
	androidClientId:
		'854451341634-c0u408k8ctu2ue806n381a0hmh1g39r3.apps.googleusercontent.com',
	scopes: ['profile', 'email'],
	permissions: ['public_profile', 'email', 'gender', 'location'],
};

interface AuthProviderProps {
	children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
	async function signInWithGoogleAsync() {
		
	};

	return (
		<>
			<AuthContext.Provider value={{ user: undefined, signInWithGoogleAsync }}>
				{children}
			</AuthContext.Provider>
		</>
	);
}

export default function useAuth() {
	return useContext(AuthContext);
}
