import { createStackNavigator } from '@react-navigation/stack';
import MainAppBottomTabs from './MainAppBottomTabs';
import AuthStack from './AuthStack';
import CheckOutScreen from '../screens/cart/CheckOutScreen';
import MyOrdersScreen from '../screens/profile/MyOrdersScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData, setIsLoading } from '../store/reducers/userSlice';
import { useEffect } from 'react';
import { RootState } from '../store/store';
import { ActivityIndicator, View } from 'react-native';
import { AppColors } from '../styles/colors';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';

const Stack = createStackNavigator();

export default function MainAppStack() {
  const dispatch = useDispatch();

  const { userData, isLoading } = useSelector(
    (state: RootState) => state.userSlice,
  );

  const isUserSignedIn = async () => {
    try {
      const storedUserData = await AsyncStorage.getItem('userData');
      if (storedUserData) {
        dispatch(setUserData(JSON.parse(storedUserData)));
      } else {
        dispatch(setIsLoading(false));
      }
    } catch (error) {
      console.error(error);
      dispatch(setIsLoading(false));
    }
  };

  useEffect(() => {
    isUserSignedIn();
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (userData) => {
      if (userData) {
        console.log('User is signed in');
      } else {
        console.log('User is signed out');
      }
    });
  }, []);

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
