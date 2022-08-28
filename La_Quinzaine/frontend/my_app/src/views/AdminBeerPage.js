import React, {useEffect, useState} from "react";
import { Pressable,View, Text, Image, StyleSheet} from 'react-native';
import {getData} from "../context/fetchContext";



const AdminBeerPage = ({ route }) => {
    const [beerInfo, setBeerInfo] = useState({
        idBeer : 1,
        idBrewery: 1,
        idType: 1,
        beerName: 'test',
        degree: 8,
        isNew: 0,
        price: 6,
        quantite: 25,
        imageUrl:'../data/images/TK-33cl.webp'

    });
    const [breweryName,setBreweryName] = useState("");
    const [typeName,setTypeName] = useState("");
    // let beerInfo = []
    const id = route.params.paramKey;
    useEffect(() => {
        //Fetch des infos de la biere avec l'id en question
        getData('http://localhost:3000/api/beers/id/' + id)// add conditional check
            .then(data =>setBeerInfo(data.data))
    }, [setBeerInfo,setBreweryName])
    useEffect(() => {
        //Fetch du nom de la brasserie en fonction de l'id qui est renvoyer de beerInfo
        getData('http://localhost:3000/api/brewery/id/' + beerInfo.idBrewery)
            .then(data => setBreweryName(data.data.breweryName))
        //Fetch du nom du type en fonction de l'id qui est remis dans beerInfo
        getData('http://localhost:3000/api/type/id/' + beerInfo.idType)
            .then(data => setTypeName(data.data.name))

    },[beerInfo])


    let goNav = route.params.paramFun;


    const PressableBrewery = () => {

        const onClick = () => {
            console.log("Ceci est la brasserie : " + breweryName)
            goNav("BreweryPage",beerInfo.idBrewery,goNav0)
        }

        return (
            <View>
                <Pressable  onPress={onClick}>
                    <Text style={{fontSize:20}} >Brasserie : {breweryName}</Text>
                </Pressable>
            </View>
        )
    }


    const LayoutBeer = () => {
        return (
            <View style={{backgroundColor:'gray' , height:1000}}>
                <Text style={{ fontSize: 30, fontStyle: 'bold', textAlign: 'center',marginTop:15,textDecorationLine:'underline' }}>{beerInfo.beerName}</Text>
                <View style={{ flexDirection: 'row', marginTop: 30 }}>
                    <View style={{ flex: 2,marginLeft:20 }}>
                        <Image style={{height: 235, width: 80}} source={require("../data/images/Bush-Blonde-33cl.webp")}/>
                    </View>
                    <View style={{ flex: 3, flexDirection: 'column', marginTop: 10 }}>
                        <Text style={style.text_information}>Type de bière : {typeName}</Text>
                        <Text style={style.text_information}>Prix : {beerInfo.price}€</Text>
                        <Text style={style.text_information}>Degrée : {beerInfo.degree}%</Text>
                        <Text style={style.text_information}>Quantité : {beerInfo.quantite}%</Text>
                        <View style={{ flex: 1 }}>
                            <PressableBrewery breweryName={breweryName}/>
                        </View>
                    </View>
                </View>
            </View>
        )
    }


    return (
        <View>
            <LayoutBeer/>
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