import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

//IMPORTANDO O COMPONENTE DE NAVEGAÇÃO
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Primeiro, criamos um stack navigator, que nos permite navegar entre telas
const Stack = createStackNavigator();

//Criamos a tela inicial, chamada HomeScreen
//Aqui estou utilizando o componente View para estruturar a tela
//e o text para exbir uma mensagem de texto no centro da tela
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Component Header</Text>
    </View>
  );
}

//Criamos o componente principal do app que configura a navegação

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//Exportamos o componente principal App a ser utilizando em outros arquivos

export default App;