import { createStackNavigator } from '@react-navigation/stack';
import MainAppBottomTabs from './MainAppBottomTabs';
import AuthStack from './AuthStack';
import CheckOutScreen from '../screens/cart/CheckOutScreen';
import MyOrdersScreen from '../screens/profile/MyOrdersScreen';

const Stack = createStackNavigator();

export default function MainAppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
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
