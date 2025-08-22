// Importa os módulos necessários do React e React Native
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Importa o tipo StackScreenProps do React Navigation para tipagem segura das props de navegação
import { StackScreenProps } from '@react-navigation/stack';

// Define os tipos das rotas para garantir tipagem no TypeScript
type RootStackParamList = {
  Home: undefined;   // A tela "Home" não recebe parâmetros
  Details: undefined; // A tela "Details" também não recebe parâmetros
};

// Define as props do componente DetailsScreen usando o tipo StackScreenProps
type DetailsScreenProps = StackScreenProps<RootStackParamList, 'Details'>;

// Declara o componente funcional DetailsScreen
const DetailsScreen: React.FC<DetailsScreenProps> = () => {
  return (
    <View style={styles.container}>
      {/* Exibe um texto indicando que esta é a tela de detalhes */}
      <Text>Detalhes da Tela</Text>
    </View>
  );
};

// Define os estilos do componente utilizando StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda a tela
    justifyContent: 'center', // Centraliza os elementos verticalmente
    alignItems: 'center', // Centraliza os elementos horizontalmente
  },
});

// Exporta o componente para ser utilizado na navegação do App
export default DetailsScreen;
