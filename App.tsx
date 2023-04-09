import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/hooks/useAuth';
import { StackNavigator } from './src/routes/StackNavigator';

export default function App() {
	return (
		<NavigationContainer>
			<AuthProvider>
				<StackNavigator />
			</AuthProvider>
		</NavigationContainer>
	);
}
