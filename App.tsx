import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/hooks/useAuth';
import { StackNavigator } from './src/routes/StackNavigator';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

export default function App() {
	return (
		<NavigationContainer>
			<AuthProvider>
				<StackNavigator />
			</AuthProvider>
		</NavigationContainer>
	);
}
