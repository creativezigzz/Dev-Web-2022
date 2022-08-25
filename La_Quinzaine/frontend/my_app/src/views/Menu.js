import React, { useEffect, useState,useContext } from 'react';
import { View, Text, EventEmitter, Image, StyleSheet, Pressable, ScrollView, ImageBackground } from 'react-native';
import MyMenuButton from '../components/menu_button';
import SignInScreen from '../views/SignInScreen';
import LogInScreen from '../views/LogInScreen';
import MyBeers from '../views/Beers';
import MyBrewery from '../views/Brewery'
import MyAdmin from './AdminPage';
import LogOutScreen from './LogOutScreen';
import {AuthContext} from "../context/AuthContext";
import jwtDecode from "jwt-decode";



function Menu({navigation}) {

    const [adminLogIn, setAdminLogIn] = useState(false);
    const [connect, setConnect] = useState(false);
    const {
        authState,
        getUserToken,
        setAuthState,
        logout,
        isAuthenticated,
        onSignInPressed,
        username,
        password,
        setUsername,
        setPassword,
        isLoggedIn
    } = useContext(AuthContext)


    const AdminMenu = () => {
        if (adminLogIn === true)
            return (
                <MyMenuButton style={style.pressable_menu} where={'Admin'} onClickMyButton={goNavigate}></MyMenuButton>
            )
        else return null;
    }

    const goNavigate = (where) => {
        navigation.navigate(where);
    }
    useEffect(() => {
            isLoggedIn();
        },
        [])
    const LogScreenMenu = () => {

        if (isAuthenticated () === 'true') {
            console.log(jwtDecode(getUserToken()))
            return (
                <MyMenuButton style={style.pressable_menu} where={'Deconnexion'}
                              onClickMyButton={goNavigate}></MyMenuButton>
            )
        } else
            return (
                <View>
                    <MyMenuButton style={style.pressable_menu} where={'Connexion'}
                                  onClickMyButton={goNavigate}></MyMenuButton>
                    <MyMenuButton style={style.pressable_menu} where={'Inscription'}
                                  onClickMyButton={goNavigate}></MyMenuButton>
                </View>
            )
    }

    //component qui construit un sous-menu lorsqu'on appuie dessus.
    const BuildMySubMenu = (props) => {

        const [open, setOpen] = useState(false); // State qui définit si le menu des cartes est ouvert ou non 
        const sideImage = '../data/images/font.png';


        if (open === false) {
            return (
                <View>
                    <Pressable onPress={() => setOpen(!open)}>
                        <Text style={style.pressable_menu}>Les Cartes</Text>
                    </Pressable>
                </View>
            )
        } else {
            return (
                <View>
                    <Pressable onPress={() => setOpen(!open)}>
                        <Text style={style.pressable_menu}>Les Cartes</Text>
                    </Pressable>
                    <View style={{flexDirection: 'row'}}>
                        <Image style={{flex: 1, height: 160}} source={require('../data/images/font.png')}></Image>
                        <View style={{flexDirection: 'column', flex: 8}}>
                            <MyMenuButton style={style.pressable_sub_menu} where={props.where}
                                          onClickMyButton={goNavigate}></MyMenuButton>
                            <MyMenuButton style={style.pressable_sub_menu} where={props.where2}
                                          onClickMyButton={goNavigate}></MyMenuButton>
                        </View>
                    </View>
                </View>
            )
        }
    }

    return (
        <View style={{alignItems: 'center'}}>
            <ScrollView style={style.scroll_view}>
                <BuildMySubMenu where={'Carte des Bières'} where2={'Carte des Brasseries'}></BuildMySubMenu>
                {/*<MyMenuButton style={style.pressable_menu} where={'Evenement'} onClickMyButton={goNavigate}></MyMenuButton>
                <MyMenuButton style={style.pressable_menu} where={'Parametres'} onClickMyButton={goNavigate}></MyMenuButton>*/}
                <LogScreenMenu></LogScreenMenu>
                <AdminMenu></AdminMenu>

            </ScrollView>
        </View>
    );
}


const Admin = (props) => {
    const goNavigate = (where, id, fun) => {
        props.navigation.navigate(where, { paramKey: id });
    }

    // goNav va stocké la fonction pour pouvoir être réutilisée
    return (
        <View style={style.menu_view}>
            <MyAdmin goNav={goNavigate} go={props}></MyAdmin>

        </View>

    );
}
// fonction de navigation de la view Beers : a en id 
const Beers = (props) => {

    // fonction de navigation transmise à ses childs 
    // where = l'endroit de navigation
    // id = info de l'id transmise à la page
    const goNavigate = (where, id, fun) => {
        props.navigation.navigate(where, { paramKey: id, paramFun: fun });
    }

    // goNav va stocké la fonction pour pouvoir être réutilisée
    return (
        <View style={style.menu_view}>
            <MyBeers goNav={goNavigate} go={props}></MyBeers>

        </View>

    );
}

// fonction de navigation de la view Beers : a en id 
const Brewery = (props) => {

    // fonction de navigation transmise à ses childs 
    // where = l'endroit de navigation
    // id = info de l'id transmise à la page
    const goNavigate = (where, id) => {
        props.navigation.navigate(where, { paramKey: id });
    }

    // goNav va stocké la fonction pour pouvoir être réutilisée
    return (
        <View style={style.menu_view}>
            <MyBrewery goNav={goNavigate} go={props}></MyBrewery>
        </View>

    );
}

function Evenement({ navigation }) {
    const goNavigate = (where) => {
        navigation.navigate(where);
    }
    return (
        <View style={style.menu_view}>
            <Text style={style.menu_text}>Beers Evenement</Text>
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
function Deconnexion({ navigation }) {
    return (
        <View style={style.menu_view}>
            <LogOutScreen></LogOutScreen>
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





const style = StyleSheet.create({
    scroll_view: {

    },
    pressable_menu: {
        backgroundColor: '#522B20',
        fontSize: 38,
        height: 140,
        width: 400,
        textAlign: "center",
        textAlignVertical: "center"
    },
    pressable_sub_menu: {
        backgroundColor: 'pink',
        fontSize: 32,
        height: 80,
        flex: 9,
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
export default Menu;
export { Beers, Evenement, Parametres, Connexion, Inscription, Brewery, Admin, Deconnexion };