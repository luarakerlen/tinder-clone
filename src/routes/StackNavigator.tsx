import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Chat, Home, Login } from '../screens';

const Stack = createNativeStackNavigator();

export function StackNavigator() {
	const user = false;
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
