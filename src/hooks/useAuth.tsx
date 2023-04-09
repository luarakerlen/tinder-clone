import { createContext, ReactNode, useContext } from 'react';

interface UserData {
	user?: string;
}
const AuthContext = createContext<UserData>({});

interface AuthProviderProps {
	children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
	return (
		<>
			<AuthContext.Provider value={{ user: 'Luara' }}>
				{children}
			</AuthContext.Provider>
		</>
	);
}

export default function useAuth() {
	return useContext(AuthContext);
}
