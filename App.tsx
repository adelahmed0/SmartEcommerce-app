import { StyleSheet } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import SignUpScreen from './src/screens/auth/SignUpScreen';

export default function App() {
  return (
    <>
      <FlashMessage position="top" />
      <SignUpScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
