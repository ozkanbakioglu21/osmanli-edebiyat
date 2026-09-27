import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import MilyonerScreen from '../screens/MilyonerScreen';
import BilgiYolculuguScreen from '../screens/BilgiYolculuguScreen';
import HizTepkisiScreen from '../screens/HizTepkisiScreen';
import KategoriMasteriScreen from '../screens/KategoriMasteriScreen';

const Tab = createBottomTabNavigator();

const theme = {
  dark: true,
  colors: {
    primary: '#C9A84C',
    background: '#0A0A2E',
    card: '#121240',
    text: '#FFFFFF',
    border: '#1E1E5A',
    notification: '#C9A84C',
  },
};

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home';
          if (route.name === 'Ana Sayfa') iconName = 'home';
          else if (route.name === 'Milyoner') iconName = 'trophy';
          else if (route.name === 'Bilgi') iconName = 'book';
          else if (route.name === 'Hız') iconName = 'flash';
          else if (route.name === 'Kategori') iconName = 'grid';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#C9A84C',
        tabBarInactiveTintColor: '#666',
        tabBarStyle: {
          backgroundColor: '#0A0A2E',
          borderTopColor: '#1E1E5A',
          height: 80,
          paddingBottom: 20,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600' as const,
        },
      })}
    >
      <Tab.Screen name="Ana Sayfa" component={HomeScreen} />
      <Tab.Screen name="Milyoner" component={MilyonerScreen} />
      <Tab.Screen name="Bilgi" component={BilgiYolculuguScreen} />
      <Tab.Screen name="Hız" component={HizTepkisiScreen} />
      <Tab.Screen name="Kategori" component={KategoriMasteriScreen} />
    </Tab.Navigator>
  );
}
