import { StyleSheet } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import SignInScreen from './src/screens/auth/SignInScreen';

export default function App() {
  return (
    <>
      <FlashMessage position="top" />
      <SignInScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
