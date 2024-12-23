import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BuyerHomeScreen from '../screens/BuyerHomeScreen';
import SellerDashboardScreen from '../screens/SellerDashboardScreen';
import AddProductScreen from '../screens/AddProductScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function SellerStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={SellerDashboardScreen} />
      <Stack.Screen name="AddProduct" component={AddProductScreen} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Buyer" component={BuyerHomeScreen} />
      <Tab.Screen name="Seller" component={SellerStack} />
    </Tab.Navigator>
  );
}
