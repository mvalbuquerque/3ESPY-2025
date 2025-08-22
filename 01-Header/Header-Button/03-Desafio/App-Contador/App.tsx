//App Contador
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as React from 'react'; // Importando o React para criar componentes a usar hooks

import {NavigationContainer} from '@react-navigation/native'; // Importando o NavigationContainer para gerenciar a navegação
import {createStackNavigator} from '@react-navigation/stack'; // Criar uma pilha de navegação 

//Definição do componente da tela inicial 
function HomeScreen({navigation}) {

  //Estado para controlar o contador
  const [count, setCount] = React.useState(0); // Hook useState para gerenciar o estado do contador

  //Efeito colateral para atualizar o botão de cabeçalho
  React.useEffect(() => {
    //Atualiza as opções do cabeçalho
    navigation.setOptions({
      //Define o botão do lado direito do cabeçalho 
      headerRight: () => (
        <Button
          onPress={() => setCount((c) => c + 1)} title="Contar" /> // Incrementa o contador ao precionar o botão 
      ),   
    });
  
 }, [navigation, setCount]);

 //Renderização da tela inicial 
  return (
    <View style={styles.container}>
      <Text style={styles.counter}> {count}</Text>
    </View>
  );
}

//Criar um pilha de navegação 
const Stack = createStackNavigator();

//Componente principal do aplicativo    
function App() {

  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{
          //Define o titulo do cabeçalho
          headerTitle: () => <Text style={styles.headerText}>Home</Text>, // Define o titulo do cabeçalho
        
        }} // Define as opções do cabeçalho
        
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// Estilo do aplicativo 

const styles = StyleSheet.create({
  container: {
    flex: 1,  //Ocupa todo o espaço disponivel 
    justifyContent: 'center', // Centraliza o conteúdo na vertical
    alignItems: 'center', // Centraliza o conteúdo na horizontal
    backgroundColor: '#f0f0f0',  // Cor de fundo
  
  },
  counter: {
    fontSize: 60, // Tamanho da fonte
    color: '#000', // Cor do texto
    fontWeight: 'bold',  //Negrito ou não

  },
  headerText: {
    fontSize: 20, // Tamanho da fonte
    color: '#000',// Cor do texto
    fontWeight: 'bold', // negrito ou não 
  },
});


export default App; //Exporta o componente principal do aplicativo