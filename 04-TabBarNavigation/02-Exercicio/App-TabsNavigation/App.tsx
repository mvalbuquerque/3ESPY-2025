import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'; //Depreciada



// Função que define a tela Home (Principal)
function HomeScreen() {
  return (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <Text>Estou na tela Home!</Text>
  </View>
  );

}

// Função que define a tela Settings (Configurações)
function SettingsScreen() { 
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Estou na tela Settings!</Text>
    </View>
  );

}


// Função que define a tela Settings (Configurações)
function OutraScreen() { 
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Estou na tela Settings!</Text>
    </View>
  );

}


// Criando o componente de navegação por abas (bottom tab navigator)
const Tab = createMaterialBottomTabNavigator();

//Função principal do aplicativo onde a navegação ente as telas é definida
export default function App() { 
  return (
    <NavigationContainer>
      <Tab.Navigator
        barStyle={{ backgroundColor: '#ed145e' }}
        activeColor="#f0edf6"
        inactiveColor="#058ec6"
      
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Outra" component={OutraScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );

}