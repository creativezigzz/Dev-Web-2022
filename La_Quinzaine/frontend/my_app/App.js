import * as React from 'react';
import { Button, View, Text, EventEmitter, StyleSheet, Pressable, ScrollView, ImageBackground,AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from './src/views/Menu';
import { Beers, Parametres, Connexion, Inscription, Brewery,Admin ,Deconnexion,EventPage } from './src/views/Menu';
import BeerPage from './src/views/BeerPage';
import BreweryPage from './src/views/BreweryPage';
import AdminBeerPage from './src/views/AdminBeerPage';
import {AuthProvider,AuthContext} from "./src/context/AuthContext";


const Stack = createNativeStackNavigator();


function App() {
  return (
      <AuthProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Menu">
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="Carte des Bières" component={Beers} />
            <Stack.Screen name="Parametres" component={Parametres} />
            <Stack.Screen name="Connexion" component={Connexion} />
            <Stack.Screen name="Inscription" component={Inscription} />
            <Stack.Screen name="Information de la bière" component={BeerPage} />
            <Stack.Screen name="Carte des Brasseries" component={Brewery} />
            <Stack.Screen name="Information de la brasserie" component={BreweryPage} />
            <Stack.Screen name="Admin" component={Admin} />
            <Stack.Screen name="Deconnexion" component={Deconnexion} />
            <Stack.Screen name="AdminBeerPage" component={AdminBeerPage} />
            <Stack.Screen name="Evenements" component={EventPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
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