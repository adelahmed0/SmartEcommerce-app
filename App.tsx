import { StyleSheet, View } from 'react-native';
import AppText from './src/components/texts/AppText';

export default function App() {
  return (
    <View style={styles.container}>
      <AppText variant="medium">Hello World</AppText>
      <AppText variant="bold">Hello World</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
