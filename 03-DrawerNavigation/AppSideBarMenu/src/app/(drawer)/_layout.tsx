//Importanto o componente Drawer da biblioteca expo-router/drawer
import { Drawer } from 'expo-router/drawer';

//Configurando o Drawer funcional TabLayout como padrão de exportação
export default function TabLayout() {
  return (
    //Configura um Drawer Navigator para a navegação lateral 
    <Drawer
    screenOptions={{headerShown: true}}
    defaultStatus='closed'    
    //Configura o Drawer Navigator com o nome de 'index'
    >
       <Drawer.Screen 
        name="index" 
        options={
            {title: 'Start'}
        } />      
        <Drawer.Screen
        name="preparing"
        options={
            {title: 'Preparing'}
        } />
          <Drawer.Screen
        name="sent"
        options={
            {title: 'Sent'}
        } />
           <Drawer.Screen
        name="delivered"
        options={
            {title: 'Delivered'}
        } />
            <Drawer.Screen
        name="about"
        options={
            {title: 'About'}
        } />
        
    </Drawer>
  );
}