import React, { useState } from "react";
import { TextInput,  Pressable,View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { listBieres } from "../data/biereList";
import BarreDeRecherche from "../components/BarreDeRecherche";



const AdminBeerPage = ({ route }) => {

    let dataBeer = listBieres[route.params.paramKey - 1]; // ATTENTION ICI JE PRENDS  L'INDEX DU TABLEAU mais je dois prendre l'id de la biere
    let url = dataBeer.urlImage // require(urlImage) de la biere stockée  

    const PressableBrewery = (props) => {

        const onClick = () => {
            console.log("ceci est la brasserie : " + props.breweryName)

        }

        return (
            <View>
                <Pressable  onPress={onClick}>
                    <Text style={{fontSize:20}} >Brasserie : {props.breweryName}</Text>
                </Pressable>
            </View>
        )
    }


    const LayoutBeer = () => {
        return (
            <View style={{backgroundColor:'gray' , height:1000}}>
                <Text style={{ fontSize: 30, fontStyle: 'bold', textAlign: 'center',marginTop:15,textDecorationLine:'underline' }}>{dataBeer.beerName}</Text>
                <View style={{ flexDirection: 'row', marginTop: 30 }}>
                    <View style={{ flex: 2,marginLeft:20 }}>
                        <Image style={{ height: 235, width: 80}} source={url}></Image>
                    </View>
                    <View style={{ flex: 3, flexDirection: 'column', marginTop: 10 }}>
                        <Text style={style.text_information}>Type de bière : {dataBeer.typeName}</Text>
                        <Text style={style.text_information}>Prix : {dataBeer.price}€</Text>
                        <Text style={style.text_information}>Degrée : {dataBeer.degree}%</Text>
                        <Text style={style.text_information}>Quantité : {dataBeer.quantity}%</Text>
                        <View style={{ flex: 1 }}>
                            <PressableBrewery breweryName={dataBeer.breweryName}></PressableBrewery>
                        </View>
                    </View>
                </View>
            </View>
        )
    }


    return (
        <View>
            <LayoutBeer></LayoutBeer>
        </View>
    )
}

const style = StyleSheet.create({
    text_information: {
        flex: 1,
        fontSize: 20,
    }
});

export default AdminBeerPage;