import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from '../../src/navigation/AppNavigator'; // Main App Navigation
import AuthNavigator from '../../src/navigation/AuthNavigator'; // Authentication Navigation
import { AppProvider } from '../../src/context/AppContext'; // Context for global state

export default function App() {
  // Mock authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AppProvider>
      <NavigationContainer>
        {isAuthenticated ? (
          <AppNavigator />
        ) : (
          <AuthNavigator />
        )}
      </NavigationContainer>
    </AppProvider>
  );
}
