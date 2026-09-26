import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { HomeScreen } from '../screens/HomeScreen';
import { SozlukScreen } from '../screens/SozlukScreen';
import { SiirlerScreen } from '../screens/SiirlerScreen';
import { DonemlerScreen } from '../screens/DonemlerScreen';
import { AyarlarScreen } from '../screens/AyarlarScreen';

const Tab = createBottomTabNavigator();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#09090b',
            borderTopColor: '#27272a',
            height: 80,
            paddingBottom: 20,
          },
          tabBarActiveTintColor: '#8b5cf6',
          tabBarInactiveTintColor: '#52525b',
          tabBarIcon: ({ color, size }) => {
            const icons: Record<string, string> = {
              'Ana Sayfa': 'home',
              Sözlük: 'book',
              Şiirler: 'library',
              Dönemler: 'time',
              Ayarlar: 'settings',
            };
            return <Ionicons name={icons[route.name] as any} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Ana Sayfa" component={HomeScreen} />
        <Tab.Screen name="Sözlük" component={SozlukScreen} />
        <Tab.Screen name="Şiirler" component={SiirlerScreen} />
        <Tab.Screen name="Dönemler" component={DonemlerScreen} />
        <Tab.Screen name="Ayarlar" component={AyarlarScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
