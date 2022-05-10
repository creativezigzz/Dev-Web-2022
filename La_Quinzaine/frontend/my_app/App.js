import * as React from 'react';
import {Button,View, Text, EventEmitter,StyleSheet,Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './src/views/SignInScreen';
import LogInScreen from './src/views/LogInScreen';

function Menu({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={style.menu_text}>Menu Screen</Text>
      <Pressable 
        onPress={() => 
          navigation.navigate('Cartes')
        }>
        <Text style={style.pressable_menu}> Go to Cartes</Text>
      </Pressable>

      <Pressable 
        onPress={() => 
          navigation.navigate('Evenement')
        }>
        <Text style={style.pressable_menu}> Go to Evenement</Text>
      </Pressable>

      <Pressable 
        onPress={() => 
          navigation.navigate('Parametres')
        }>
        <Text style={style.pressable_menu}> Go to Parametres</Text>
      </Pressable>

      <Pressable 
        onPress={() => 
          navigation.navigate('Connexion')
        }>
        <Text style={style.pressable_menu}> Go to Connexion</Text>
      </Pressable>

      <Pressable 
        onPress={() => 
          navigation.navigate('Inscription')
        }>
        <Text style={style.pressable_menu}> Go to Inscription</Text>
      </Pressable>

    </View>
  );
}

function Cartes({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'gray' }}>
      <Text style={style.menu_text}>Cartes Screen</Text>
      <Pressable 
        onPress={() => 
          navigation.navigate('Menu')
        }>
        <Text style={style.pressable_retour}> Go to Menu</Text>
      </Pressable>
    </View>

  );
}

function Evenement({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'gray' }}>
      <Text style={style.menu_text}>Evenement Screen</Text>
      <Pressable 
        onPress={() => 
          navigation.navigate('Menu')
        }>
        <Text style={style.pressable_retour}> Go to Menu</Text>
      </Pressable>
    </View>
  );
}
function Parametres({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'gray' }}>
      <Text style={style.menu_text}>Parametres Screen</Text>
      <Pressable 
        onPress={() => 
          navigation.navigate('Menu')
        }>
        <Text style={style.pressable_retour}> Go to Menu</Text>
      </Pressable>
    </View>
  );
}
function Connexion({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'gray' }}>
      <LogInScreen></LogInScreen>
      <Pressable 
        onPress={() => 
          navigation.navigate('Menu')
        }>
        <Text style={style.pressable_retour}> Go to Menu</Text>
      </Pressable>
    </View>
  );
}
function Inscription({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'gray' }}>
      <SignInScreen></SignInScreen>
      <Pressable 
        onPress={() => 
          navigation.navigate('Menu')
        }>
        <Text style={style.pressable_retour}> Go to Menu</Text>
      </Pressable>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Cartes" component={Cartes} />
        <Stack.Screen name="Evenement" component={Evenement} />
        <Stack.Screen name="Parametres" component={Parametres} />
        <Stack.Screen name="Connexion" component={Connexion} />
        <Stack.Screen name="Inscription" component={Inscription} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const style =StyleSheet.create({
  pressable_menu :{
    backgroundColor: '#522B20',
    fontSize:38,
    height:100,
    width:400,
    textAlign:"center",
    textAlignVertical:"center"
  },
  pressable_retour :{
    backgroundColor: 'cyan',
    fontSize:42,
    height:180,
    width:400,
    textAlign:"center",
    textAlignVertical:"center"
  },
  menu_text :{
    color:'blue',
    fontSize:40,
  }
})
export default App;