import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Using Ionicons for icons
import { Colors } from '@/constants/Colors'; // Placeholder Colors constant
import { useColorScheme } from '@/hooks/useColorScheme'; // Using React Native's useColorScheme

// Placeholder for HapticTab
const HapticTab = ({ children, onPress }: any) => {
  return (
    <TouchableOpacity style={styles.hapticTab} onPress={onPress}>
      {children || <Text>Tab Button</Text>}
    </TouchableOpacity>
  );
};

// Placeholder for TabBarBackground
const TabBarBackground = () => {
  return <Text style={styles.tabBarBackground}>Tab Bar Background</Text>;
};

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <Ionicons name="paper-plane-outline" size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  hapticTab: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarBackground: {
    flex: 1,
    backgroundColor: 'white',
    textAlign: 'center',
    padding: 10,
  },
});
