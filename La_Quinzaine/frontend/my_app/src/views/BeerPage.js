import React, { useEffect, useState } from "react";
import { Image, Button, View, Text, EventEmitter, StyleSheet, Pressable, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { listBieres } from "../data/biereList";
import { listBrewery } from '../data/breweryList';

const BeerPage = ({ route }) => {

    let dataBeer = listBieres[route.params.paramKey - 1]; // ATTENTION ICI JE PRENDS  L'INDEX DU TABLEAU mais je dois prendre l'id de la biere
    let url = dataBeer.urlImage // require(urlImage) de la biere stockée  
    let idBrewery = breweryOfTheBeer(dataBeer.breweryName) // id de la brasserie stockée
    console.log(idBrewery)
    let goNav = route.params.paramFun;

    //fonction qui renvoie l'id de la brasserie correspondante à la bière
    function breweryOfTheBeer(brewery) {
        for (let i = 0; i < listBrewery.length; i++) {
            if (listBrewery[i].breweryName == brewery) {
                return listBrewery[i].id;
            }
        }
        return console.log("error");
    }



    const PressableBrewery = (props) => {

        const onClick = () => {
            console.log("ceci est la brasserie : " + props.breweryName)
            goNav("Information de la brasserie", idBrewery, goNav);

        }

        return (
            <View>
                <Pressable onPress={onClick}>
                    <Text style={{ fontSize: 20 }} >Brasserie : {props.breweryName}</Text>
                </Pressable>
            </View>
        )
    }


    const LayoutBeer = () => {

        const Stars = () => {
            const [number, setNumber] = useState(3); //get fetch vote //probablement supprimable et rajouter une constante
            //dans useState d'en dessous qui appel pour set le nbr d'étoiles au début un fetch
            const [star, setStar] = useState(tabBool(number));

            function tabBool(number) {
                let tab = [];
                for (let i = 0; i < number; i++) {
                    tab.push(true);
                }
                for (let i = number; i < 5; i++) {
                    tab.push(false)
                }
                return tab;
            }

            const OneStar = (props) => {

                const onClick = () => {
                    setNumber(props.number); //probablement modifiable pour modifier la donnée dans la data base.
                    setStar(tabBool(props.number));  
                }

                let color = require('../data/images/starBlank.png');
                if (props.bool) {
                    color = require('../data/images/starGolden.png');
                }
                return (
                    <TouchableOpacity style={{ flex: 1 }} onPress={onClick} >
                        <Image style={{ height: 25, resizeMode: 'contain' }} source={color}></Image>
                    </TouchableOpacity>
                )
            }

            return (
                <View style={{ flexDirection: 'row',justifyContent:'center',width:140,marginHorizontal:25 }}>
                    <OneStar bool={star[0]} number={1} ></OneStar>
                    <OneStar bool={star[1]} number={2}></OneStar>
                    <OneStar bool={star[2]} number={3}></OneStar>
                    <OneStar bool={star[3]} number={4}></OneStar>
                    <OneStar bool={star[4]} number={5}></OneStar>
                </View>
            )

        }
        return (
            <View style={{ backgroundColor: 'gray', height: 1000 }}>
                <Text style={{ fontSize: 30, fontStyle: 'bold', textAlign: 'center', marginTop: 15, textDecorationLine: 'underline' }}>{dataBeer.beerName}</Text>
                <View style={{ flexDirection: 'row', marginTop: 30 }}>
                    <View style={{ flex: 2, marginLeft: 20 }}>
                        <Image style={{ height: 235, width: 80 }} source={url}></Image>
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
                <View style={{ marginTop: 25, marginHorizontal: 25, flexDirection: 'row',justifyContent:'space-between'}}>
                    <View style={{ flex: 1 }}>
                        <Text style={{fontSize:20}} >Votre  Note :</Text>
                    </View>
                    <View style={{ flex: 2}}>
                        <Stars ></Stars>
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
export default BeerPage;