import React, { useState } from "react";
import { Pressable,TextInput, View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { listBrewery } from "../data/breweryList";
import BarreDeRecherche from "../components/BarreDeRecherche";
import MyMenuButton from "../components/menu_button"


const MyBrewery = (props) => {
    const [lookBrewery, setLookBrewery] = useState('');
    const [breweryList,setBreweryList]=useState('rien'); //meme delire que beerpage mais cette fois-ci



    const bouttonRecheche = () => {
        setBreweryList(lookBrewery)//quand on appuis on va mettre la variable lookbeer dans un fetch qui va retourner les bières commençant par looBeer
                             //secondu le resultat ud fetch doit aller dans setBeerList(ici).
    
    }

    const AfficherBrewery = (props) => {
    
        return ( 
            <View>
                <AfficherInfoBrewery></AfficherInfoBrewery>
                <FlatList
                    data={listBrewery}//mettre ici breweryList
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        <BreweryInfo  breweryId={item.id} goNav={props.goNav} breweryName={item.breweryName}
                         source={item.urlImage}></BreweryInfo>
                    }
    
                />
            </View>
        )
    }

    const AfficherInfoBrewery =() =>{



        return(
            <View style={{padding:5,flexDirection:'row',marginBottom:5}}>
                
                <Text style={{flex:11}}>Brasserie :</Text>
                <Text style={{flex:7}}>Image :</Text>
        
            </View>     
        )
    }
    
    
    const BreweryInfo = (props) => {
    
        const onClick = () =>{
            props.goNav("Information de la brasserie",props.breweryId);
        }
        
    
        return (
            <View >
                <TouchableOpacity style={{flexDirection:'row'}} onPress={onClick}>
                <Text style={style.nameBreweryList}>{props.breweryName}</Text>
                <Image style={style.imageBrewery} source={props.source}></Image>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={{flex:1 }}>
            <View style={{ height: 25, flexDirection: 'row',marginTop:25 }}>
                <BarreDeRecherche value={lookBrewery} setValue={setLookBrewery} placeholder={'Recherche de Brasseries'}></BarreDeRecherche>
                <Pressable style={{flex:1}}onPress={bouttonRecheche}>
                    <Image style={{height:25, resizeMode: 'contain',borderColor:'black',borderWidth:1,width:42,marginHorizontal:25 }} source={require('../data/images/search.png')}></Image>
                </Pressable>
            </View> 
            <View style={{ padding:10,flex:1}}>
                <AfficherBrewery goNav={props.goNav}></AfficherBrewery>
            </View>
            <View>
           </View>
        </View>

    )
}


const style = StyleSheet.create({
    imageBrewery: {
        height: 80,
        flex:6
    },
    textBreweryList: {
        flex: 6,
        height: 120,
        width: 80,
        fontSize: 18,
    },
    nameBreweryList: {
        flex: 10,
        height: 125,
        width: 802,
        fontSize: 18,
    }
}
)

export default MyBrewery;