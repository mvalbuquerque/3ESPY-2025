// Importa o componente StatusBar do Expo, que permite customizar a barra de status do dispositivo.
import { StatusBar } from 'expo-status-bar';
// Importa os componentes básicos do React Native para estilização e estrutura da interface.
import { StyleSheet, Text, View } from 'react-native';

// Importa os módulos necessários para navegação no aplicativo.
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importa as telas que serão utilizadas na navegação.
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

// Define os tipos das rotas para garantir tipagem segura no TypeScript.
type RootStackParamList = {
  Home: undefined;   // A tela "Home" não recebe parâmetros.
  Details: undefined; // A tela "Details" também não recebe parâmetros.
};

// Cria o stack navigator, que gerencia a navegação entre as telas.
const Stack = createStackNavigator<RootStackParamList>();

// Componente principal do aplicativo
const App: React.FC = () => {
  return (
    // O NavigationContainer é o elemento principal que envolve toda a navegação do app.
    <NavigationContainer>
      {/* O Stack.Navigator define a estrutura de navegação por pilha */}
      <Stack.Navigator initialRouteName="Home">
        {/* Define a tela inicial "Home", passando o componente HomeScreen */}
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Home Page' }} // Define o título da página na barra de navegação.
        />
        {/* Define a tela "Details", que será acessada a partir da "Home" */}
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={{ title: 'Details Page' }} // Define o título da página na barra de navegação.
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Exporta o componente App como padrão para ser utilizado na inicialização do aplicativo.
export default App;


// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './screens/HomeScreen';
// import DetailsScreen from './screens/DetailsScreen';

// type RootStackParamList = {
//   Home: undefined;
//   Details: undefined;
// };

// const Stack = createStackNavigator<RootStackParamList>();

// const App: React.FC = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen 
//           name="Home" 
//           component={HomeScreen} 
//           options={{ title: 'Home Page' }} 
//         />
//         <Stack.Screen 
//           name="Details" 
//           component={DetailsScreen} 
//           options={{ title: 'Details Page' }} 
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;