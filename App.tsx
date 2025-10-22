import { StyleSheet } from 'react-native';
import AppSafeView from './src/components/views/AppSafeView';
import FlashMessage from 'react-native-flash-message';
import AppTextInput from './src/components/inputs/AppTextInput';

export default function App() {
  return (
    <AppSafeView style={styles.container}>
      <FlashMessage position="top" />
      <AppTextInput placeholder="Enter text" value="" onChangeText={() => {}} />
    </AppSafeView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
