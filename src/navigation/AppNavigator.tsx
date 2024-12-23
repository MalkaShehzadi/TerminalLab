import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BuyerHomeScreen from '@/screens/BuyerHomeScreen';
import SellerDashboardScreen from '@/screens/SellerDashboardScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Buyer" component={BuyerHomeScreen} />
      <Tab.Screen name="Seller" component={SellerDashboardScreen} />
    </Tab.Navigator>
  );
}
