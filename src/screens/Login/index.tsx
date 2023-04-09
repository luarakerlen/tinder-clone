import { Text, View } from 'react-native';
import useAuth from '../../hooks/useAuth';

export function Login() {
	const { user } = useAuth();

	return (
		<View>
			<Text>Login screen {user}</Text>
		</View>
	);
}
