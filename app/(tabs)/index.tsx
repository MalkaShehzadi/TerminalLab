import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from '@/navigation/AppNavigator'; // Using alias



export default function Index() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
