// Importa os módulos necessários do React e React Native
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

// Define o componente App
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Quadrado Vermelho no Canto Superior Esquerdo */}
      <View style={styles.quadradoVermelho} />
      
      {/* Círculo Azul no Centro */}
      <View style={styles.quadradoAzul} />
      
      {/* View com Texto */}
      <View style={styles.textoContainer}>
        <Text style={styles.text}>Olá, React Native!</Text>
      </View>
    </SafeAreaView>
  );
};

// Define os estilos para o aplicativo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
   // O quadrado vermelho é posicionado no canto superior esquerdo
   quadradoVermelho: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 200,
    height: 200,
    backgroundColor: 'red',
  },
  // O círculo azul é posicionado no centro da tela
  quadradoAzul: {
    width: 200,
    height: 200,
    backgroundColor: 'blue',
    borderRadius: 100, // Torna a View circular
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -100,
    marginTop: -100,
  },
  // A View com texto é posicionada no centro da tela
  textoContainer: {
    marginTop: 400,
    padding: 40,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    top: 50,
    left: 50,
    width: 350,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // O texto é centralizado dentro da View
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

// Exporta o componente App como padrão
export default App;