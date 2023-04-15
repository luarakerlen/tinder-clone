import { createContext, ReactNode, useContext, useEffect } from 'react';
interface UserData {
	user?: string;
	signInWithGoogleAsync: () => Promise<void>;
}

const AuthContext = createContext<UserData>({} as UserData);

const config = {
	iosClientId: '',
	androidClientId: '',
};

interface AuthProviderProps {
	children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
	async function signInWithGoogleAsync() {}

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
