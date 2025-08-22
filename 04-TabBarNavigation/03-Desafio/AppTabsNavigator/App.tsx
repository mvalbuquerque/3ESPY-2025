import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// Função que define a tela Home
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

// Função que define a tela Settings (Configurações)
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

// Criação do componente de navegação por abas (bottom tab navigator)
const Tab = createMaterialBottomTabNavigator();

// Função principal do aplicativo, onde a navegação entre as abas é configurada
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#ee4e98"
        inactiveColor="#0f0e0f"
        barStyle={{ backgroundColor: '#FFF' }} // Estilização da barra
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen} // Componente da tela
          options={{
            tabBarLabel: 'Início',
          
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen} // Componente da tela
          options={{
            tabBarLabel: 'Configurações',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}




/*
COM ICONES
Função principal do aplicativo, onde a navegação entre as abas é configurada

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#694fad' }} // Estilização da barra
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen} // Componente da tela
          options={{
            tabBarLabel: 'Início',
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={24} /> // Ícone da aba
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen} // Componente da tela
          options={{
            tabBarLabel: 'Configurações',
            tabBarIcon: ({ color }) => (
              <Icon name="cog" color={color} size={24} /> // Ícone da aba
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
} */