import FlashMessage from 'react-native-flash-message';
import { NavigationContainer } from '@react-navigation/native';
import MainAppStack from './src/navigation/MainAppStack';
import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native';
import { AppColors } from './src/styles/colors';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Nunito-Bold': require('./src/assets/fonts/Nunito-Bold.ttf'),
    'Nunito-Medium': require('./src/assets/fonts/Nunito-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color={AppColors.primary} />;
  }

  return (
    <>
      <NavigationContainer>
        <FlashMessage position="top" />
        <MainAppStack />
      </NavigationContainer>
    </>
  );
}
