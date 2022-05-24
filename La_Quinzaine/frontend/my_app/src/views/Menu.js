import React, { useState } from 'react';
import { View, Text, EventEmitter,Image, StyleSheet, Pressable, ScrollView, ImageBackground } from 'react-native';
import MyMenuButton from '../components/menu_button';
import SignInScreen from '../views/SignInScreen';
import LogInScreen from '../views/LogInScreen';
import MyCarte from '../views/Carte';




function Menu({ navigation }) {

    const goNavigate = (where) => {
        navigation.navigate(where);
    }

    //component qui construit un sous-menu lorsqu'on appuie dessus.
    const BuildMySubMenu = (props) => {

        const [open, setOpen] = useState(false); // State qui définit si le menu est ouvert ou non dfsqdfs
        const sideImage ='../data/images/font.png';

        if (open == false) {
            return (
                <View>
                    <Pressable onPress={() => setOpen(!open)}>
                        <Text style={style.pressable_menu}>Les Cartes</Text>
                    </Pressable>
                </View>
            )
        }
        else {
            return (
                <View>
                    <Pressable onPress={() => setOpen(!open)}>
                        <Text style={style.pressable_menu}>Carte</Text>
                    </Pressable>
                    <View style={{flexDirection:'row'}}>
                        <Image style={{flex:1}} source={require('../data/images/font.png')}></Image>
                        <View style={{flexDirection:'column',flex:9}}>
                        <MyMenuButton style={style.pressable_sub_menu} where={props.where} onClickMyButton={goNavigate}></MyMenuButton>
                        <MyMenuButton style={style.pressable_sub_menu} where={props.where2} onClickMyButton={goNavigate}></MyMenuButton>
                        </View>
                    </View>
                </View>
            )
        }
    }

    return (
        <View style={{ alignItems: 'center' }}>
            <ScrollView style={style.scroll_view}>
                <Text style={style.menu_text}>Menu Screen</Text>
                <BuildMySubMenu where={'Carte'} where2={'Brewery'}></BuildMySubMenu>
                <MyMenuButton style={style.pressable_menu} where={'Evenement'} onClickMyButton={goNavigate}></MyMenuButton>
                <MyMenuButton style={style.pressable_menu} where={'Parametres'} onClickMyButton={goNavigate}></MyMenuButton>
                <MyMenuButton style={style.pressable_menu} where={'Connexion'} onClickMyButton={goNavigate}></MyMenuButton>
                <MyMenuButton style={style.pressable_menu} where={'Inscription'} onClickMyButton={goNavigate}></MyMenuButton>
                
            </ScrollView>
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

const Carte = (props) => {
    const goNavigate = (beerId) => {
        props.navigation.navigate("BeerPage", { paramKey: beerId });
    }

    return (
        <View style={style.menu_view}>
            <MyCarte goNav={goNavigate} go={props}></MyCarte>

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
        height: 100,
        flex:9,
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
export { Carte, Evenement, Parametres, Connexion, Inscription };