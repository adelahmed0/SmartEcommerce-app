import FlashMessage from 'react-native-flash-message';
import { NavigationContainer } from '@react-navigation/native';
import MainAppStack from './src/navigation/MainAppStack';
import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native';
import { AppColors } from './src/styles/colors';
import { store } from './src/store/store';
import { Provider } from 'react-redux';

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
      <Provider store={store}>
        <NavigationContainer>
          <FlashMessage position="top" />
          <MainAppStack />
        </NavigationContainer>
      </Provider>
    </>
  );
}
