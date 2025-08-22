import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//Criando o stack navigation para navegar entre as telas
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

//Criando a tela inicial 
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Texto Azul</Text>
       </View>
    
  );
}

//Criando o componente principal do app
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    textAlign: 'center',
    color: '#ee4e98',
  },
  
});


export default App;