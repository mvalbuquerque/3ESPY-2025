import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

//Componente para a tela inicial 
function HomeScreen({ navigation }) {
  return (
   <View style={ {flex: 1, alignItems: 'center', justifyContent: 'center'} }> 
   <Text>Exemplo Header Button</Text>
   </View>
  );
}

// Componente para o título do cabeçalho// Componente para o título do cabeçalho
function LogoTitle() {
  return (
    <Text style={styles.logoTitle}>Header Button</Text>
  );
}


// Componente principal do aplicativo
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            // Configurações do cabeçalho da tela Home
            headerTitle: (props) => <LogoTitle {...props} />, // Define o título do cabeçalho
            headerRight: () => ( // Define o componente no canto direito do cabeçalho
              <Button
                onPress={() => alert('Você precionou o botão!')}
                title="Info"
                color="#00cc00" // Define a cor do botão.  
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

  const styles = StyleSheet.create({
    logoTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'black',
    }
    });

    export default App;