import FlashMessage from 'react-native-flash-message';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <FlashMessage position="top" />
        <AuthStack />
      </NavigationContainer>
    </>
  );
}
