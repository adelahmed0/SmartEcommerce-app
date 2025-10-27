import FlashMessage from 'react-native-flash-message';
import { NavigationContainer } from '@react-navigation/native';
import MainAppStack from './src/navigation/MainAppStack';
import { useFonts } from 'expo-font';
import { ActivityIndicator, Platform, View } from 'react-native';
import { AppColors } from './src/styles/colors';
import { persistor, store } from './src/store/store';
import { Provider } from 'react-redux';
import { vs } from 'react-native-size-matters';
import i18n from './src/localization/i18n';
import { I18nextProvider } from 'react-i18next';
import { PersistGate } from 'redux-persist/integration/react';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function App() {
  const [fontsLoaded] = useFonts({
    'Nunito-Bold': require('./src/assets/fonts/Nunito-Bold.ttf'),
    'Nunito-Medium': require('./src/assets/fonts/Nunito-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: AppColors.primary,
        }}
      >
        <ActivityIndicator size="large" color={AppColors.white} />
      </View>
    );
  }

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <I18nextProvider i18n={i18n}>
            <NavigationContainer>
              <FlashMessage
                position={Platform.OS === 'ios' ? 'top' : { top: vs(40) }}
              />
              <MainAppStack />
            </NavigationContainer>
          </I18nextProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
