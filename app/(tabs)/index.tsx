import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from '../../src/navigation/AppNavigator'; // Main app navigation
import AuthNavigator from '../../src/navigation/AuthNavigator'; // Authentication navigation
import { AppProvider } from '../../src/context/AppContext'; // Context for global state

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Mock authentication state

  return (
    <AppProvider>
      <NavigationContainer>
        {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AppProvider>
  );
}
