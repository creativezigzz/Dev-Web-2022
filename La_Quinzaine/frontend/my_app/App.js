import * as React from 'react';
import { Button, View, Text, EventEmitter, StyleSheet, Pressable, ScrollView, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './src/views/SignInScreen';
import LogInScreen from './src/views/LogInScreen';
import MyMenuButton from './src/components/menu_button';
import MyCarte from './src/views/Carte';
import Test from './src/views/Test';

function Menu({ navigation }) {

  const goNavigate = (where) => {
    navigation.navigate(where);
  }

  return (
    <View style={{ alignItems: 'center' }}>
      <ScrollView style={style.scroll_view}>
        <Text style={style.menu_text}>Menu Screen</Text>
        <MyMenuButton style={style.pressable_menu} where={'Carte'} onClickMyButton={goNavigate}></MyMenuButton>
        <MyMenuButton style={style.pressable_menu} where={'Evenement'} onClickMyButton={goNavigate}></MyMenuButton>
        <MyMenuButton style={style.pressable_menu} where={'Parametres'} onClickMyButton={goNavigate}></MyMenuButton>
        <MyMenuButton style={style.pressable_menu} where={'Connexion'} onClickMyButton={goNavigate}></MyMenuButton>
        <MyMenuButton style={style.pressable_menu} where={'Inscription'} onClickMyButton={goNavigate}></MyMenuButton>
        <MyMenuButton style={style.pressable_menu} where={'Testing'} onClickMyButton={goNavigate}></MyMenuButton>
      </ScrollView>
    </View>
  );
}

function Carte({ navigation }) {
  const goNavigate = (where) => {
    navigation.navigate(where);
  }
  return (
    <View style={style.menu_view}>
      <MyCarte></MyCarte>
    </View>

  );
}

function Evenement({ navigation }) {
  const goNavigate = (where) => {
    navigation.navigate(where);
  }
  return (
    <View style={style.menu_view}>
      <Text style={style.menu_text}>Carte Evenement</Text>
      <MyMenuButton style={style.pressable_retour} where={'Menu'} onClickMyButton={goNavigate}></MyMenuButton>
    </View>

  );
}
function Parametres({ navigation }) {
  return (
    <View style={style.menu_view}>
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
    <View style={style.menu_view}>
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
    <View style={style.menu_view}>
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

function Testing({navigation}){
  return (
    <View style={style.menu_view}>
      <Test></Test>
      <Text>s</Text>
      <Pressable
        onPress={() =>
          navigation.navigate('Menu')
        }>
        <Text style={style.pressable_retour}> Go to Menu</Text>
      </Pressable>
    </View>
  );
}

function Beer({navigation}){
  return (
    <View style={style.menu_view}>
      <Test></Test>
      <Text>s</Text>
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
        <Stack.Screen name="Carte" component={Carte} />
        <Stack.Screen name="Evenement" component={Evenement} />
        <Stack.Screen name="Parametres" component={Parametres} />
        <Stack.Screen name="Connexion" component={Connexion} />
        <Stack.Screen name="Inscription" component={Inscription} />
        <Stack.Screen name="Testing" component={Testing} />
        <Stack.Screen name="Beer" component={Beer} />
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