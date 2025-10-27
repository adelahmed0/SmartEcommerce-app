import { createStackNavigator } from '@react-navigation/stack';
import MainAppBottomTabs from './MainAppBottomTabs';
import AuthStack from './AuthStack';
import CheckOutScreen from '../screens/cart/CheckOutScreen';
import MyOrdersScreen from '../screens/profile/MyOrdersScreen';
import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { AppColors } from '../styles/colors';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';

const Stack = createStackNavigator();

export default function MainAppStack() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState<object | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('User is signed in');
        setIsLoading(false);
        setUserData(user);
      } else {
        console.log('User is signed out');
        setIsLoading(false);
        setUserData(null);
      }
    });
  }, [isLoading]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={AppColors.primary} />
      </View>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={userData ? 'MainAppBottomTabs' : 'AuthStack'}
    >
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="MainAppBottomTabs" component={MainAppBottomTabs} />
      <Stack.Screen
        name="CheckOutScreen"
        component={CheckOutScreen}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="MyOrdersScreen"
        options={{ headerShown: true, title: 'My Orders' }}
        component={MyOrdersScreen}
      />
    </Stack.Navigator>
  );
}
