import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Chat, Home, Login } from '../screens';
import useAuth from '../hooks/useAuth';

const Stack = createNativeStackNavigator();

export function StackNavigator() {
	const { user } = useAuth();

	return (
		<Stack.Navigator>
			{user ? (
				<>
					<Stack.Screen name='Home' component={Home} />
					<Stack.Screen name='Chat' component={Chat} />
				</>
			) : (
				<Stack.Screen name='Login' component={Login} />
			)}
		</Stack.Navigator>
	);
}
