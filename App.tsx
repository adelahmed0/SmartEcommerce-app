import { StyleSheet } from 'react-native';
import AppText from './src/components/texts/AppText';
import AppSafeView from './src/components/views/AppSafeView';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import AppButton from './src/components/buttons/AppButton';

export default function App() {
  return (
    <AppSafeView style={styles.container}>
      <FlashMessage position="center" />
      <AppButton
        onPress={() => {
          showMessage({
            message: 'Hello from Flash Message!',
            color: 'blue',
            type: 'success',
          });
        }}
        title="Add"
      />
      <AppText
        onPress={() => {
          showMessage({
            message: 'Hello from Flash Message!',
            color: 'blue',
            type: 'success',
          });
        }}
        variant="bold"
      >
        Hello World
      </AppText>
    </AppSafeView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
