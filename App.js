import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Search from './screens/Search';
import Home from './screens/Home';
import Account from './screens/Account';
import Map from './screens/Map';

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: true,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    elevation: 1,
    height: 60,
    backgroundColor: '#4CAF50',
    borderWidth: 0,
  },
  headerStyle: {
    backgroundColor: '#4CAF50',
    borderBottomWidth: 2, // Épaisseur de la bordure
    borderBottomColor: '#4CAF50',
  },
  headerTitleStyle: {
    color: 'white', // Modifier la couleur du texte du titre du header ici
    fontWeight: 900,
    fontSize: 30,
  },
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Accueil"
          component={Home}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? 'home-outline' : 'home'} size={size} color={color} style={{ color: focused ? 'white' : 'white' }} />
            ),
          }}
        />
        <Tab.Screen
          name="Rechercher"
          component={Search}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? 'search-outline' : 'search'} size={size} color={color} style={{ color: focused ? 'white' : 'white' }} />
            ),
          }}
        />
        <Tab.Screen
          name="Map"
          component={Map}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? 'map-outline' : 'map'} size={size} color={color} style={{ color: focused ? 'white' : 'white' }} />
            ),
          }}
        />
        <Tab.Screen
          name="Mon compte"
          component={Account}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? 'person-outline' : 'person'} size={size} color={color} style={{ color: focused ? 'white' : 'white' }} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
