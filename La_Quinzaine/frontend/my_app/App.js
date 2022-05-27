import * as React from 'react';
import { Button, View, Text, EventEmitter, StyleSheet, Pressable, ScrollView, ImageBackground,AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from './src/views/Menu';
import { Carte, Evenement, Parametres, Connexion, Inscription, Testing } from './src/views/Menu';
import BeerPage from './src/views/BeerPage';
import MyBrewery from './src/views/Brewery';




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Carte" component={Carte} />
        <Stack.Screen name="Evenement" component={Evenement} />
        <Stack.Screen name="Parametres" component={Parametres} />
        <Stack.Screen name="Connexion" component={Connexion} />
        <Stack.Screen name="Inscription" component={Inscription} />
        <Stack.Screen name="BeerPage" component={BeerPage} />
        <Stack.Screen name="Brewery" component={MyBrewery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const style = StyleSheet.create({
  scroll_view: {
    backgroundColor: 'yellow',
  },
  pressable_menu: {
    backgroundColor: '#522B20',
    fontSize: 38,
    height: 140,
    width: 400,
    textAlign: "center",
    textAlignVertical: "center"
  },
  menu_view: {
    flex: 1,
    backgroundColor: 'gray'
  },
  pressable_retour: {
    backgroundColor: 'darkblue',
    fontSize: 24,
    height: 120,
    width: 400,
    textAlign: "center",
    textAlignVertical: "center"
  },
  menu_text: {
    color: 'blue',
    fontSize: 40,
  }
})
export default App;