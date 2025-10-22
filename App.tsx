import { StyleSheet } from 'react-native';
import AppText from './src/components/texts/AppText';
import AppSafeView from './src/components/views/AppSafeView';

export default function App() {
  return (
    <AppSafeView style={styles.container}>
      <AppText variant="medium">Hello World</AppText>
      <AppText variant="bold">Hello World</AppText>
    </AppSafeView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
