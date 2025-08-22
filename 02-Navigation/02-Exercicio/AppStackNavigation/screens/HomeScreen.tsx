// Importa os módulos necessários do React e React Native
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Importa o tipo StackScreenProps do React Navigation para tipagem segura das props de navegação
import { StackScreenProps } from '@react-navigation/stack';

// Define os tipos das rotas para garantir tipagem no TypeScript
type RootStackParamList = {
  Home: undefined;   // A tela "Home" não recebe parâmetros
  Details: undefined; // A tela "Details" também não recebe parâmetros
};

// Define as props do componente HomeScreen usando o tipo StackScreenProps
type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

// Declara o componente funcional HomeScreen
const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Exibe um texto na tela inicial */}
      <Text>Bem-vindo à Home Screen</Text>
      {/* Botão que, ao ser pressionado, navega para a tela "Details" */}
      <Button
        title="Ir para Detalhes"
        onPress={() => navigation.navigate('Details')}
      />
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

// Exporta o componente para ser utilizado no App
export default HomeScreen;



// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';
// import { StackScreenProps } from '@react-navigation/stack';

// type RootStackParamList = {
//   Home: undefined;
//   Details: undefined;
// };

// type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

// const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Text>Bem-vindo à Home Screen</Text>
//       <Button
//         title="Ir para Detalhes"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default HomeScreen;