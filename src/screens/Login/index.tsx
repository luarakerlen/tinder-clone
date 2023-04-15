import { Button, Text, View } from 'react-native';
import useAuth from '../../hooks/useAuth';

export function Login() {
	const { user, signInWithGoogleAsync } = useAuth();

	return (
		<View>
			<Text>Login screen {user}</Text>
			<Button title='Sign in with Google' onPress={signInWithGoogleAsync} />
		</View>
	);
}
