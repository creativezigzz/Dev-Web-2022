import React, {useEffect, useState,useContext} from "react";
import {
    Image, View, Text, StyleSheet, Pressable, TouchableOpacity
} from 'react-native';
import {getData} from "../context/fetchContext";
import {AuthContext} from "../context/AuthContext";



const BeerPage = ({route}) => {
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



    const PressableBrewery = (props) => {
        const idBrewery = beerInfo.idBrewery
        const onClick = () => {
            goNav("Information de la brasserie", idBrewery, goNav);

        }

        return (<View>
            <Pressable onPress={onClick}>
                <Text style={{fontSize: 20}}>Brasserie : {props.breweryName}</Text>
            </Pressable>
        </View>)
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
                return (<TouchableOpacity style={{flex: 1}} onPress={onClick}>
                    <Image style={{height: 25, resizeMode: 'contain'}} source={color}/>
                </TouchableOpacity>)
            }

            return (<View style={{flexDirection: 'row', justifyContent: 'center', width: 140, marginHorizontal: 25}}>
                <OneStar bool={star[0]} number={1}/>
                <OneStar bool={star[1]} number={2}/>
                <OneStar bool={star[2]} number={3}/>
                <OneStar bool={star[3]} number={4}/>
                <OneStar bool={star[4]} number={5}/>
            </View>)

        }
        return (<View style={{backgroundColor: 'gray', height: 1000}}>
            <Text style={{
                fontSize: 30, fontStyle: 'bold', textAlign: 'center', marginTop: 15, textDecorationLine: 'underline'
            }}>{beerInfo.beerName}</Text>
            <View style={{flexDirection: 'row', marginTop: 30}}>
                <View style={{flex: 2, marginLeft: 20}}>
                    <Image style={{height: 235, width: 80}} source={require('../data/images/Bush-Blonde-33cl.webp')}/>
                </View>
                <View style={{flex: 3, flexDirection: 'column', marginTop: 10}}>
                    <Text style={style.text_information}>Type de bière : {typeName}</Text>
                    <Text style={style.text_information}>Prix : {beerInfo.price}€</Text>
                    <Text style={style.text_information}>Degrée : {beerInfo.degree}%</Text>
                    <Text style={style.text_information}>Quantité : {beerInfo.quantite}cl</Text>
                    <View style={{flex: 1}}>
                        <PressableBrewery breweryName={breweryName}/>
                    </View>
                </View>
            </View>
            <View style={{
                marginTop: 25, marginHorizontal: 25, flexDirection: 'row', justifyContent: 'space-between'
            }}>
                <View style={{flex: 1}}>
                    <Text style={{fontSize: 20}}>Votre Note :</Text>
                </View>
                <View style={{flex: 2}}>
                    <Stars/>
                </View>
            </View>
        </View>)
    }


    return (<View>
        <LayoutBeer/>
    </View>)
}

const style = StyleSheet.create({
    text_information: {
        flex: 1, fontSize: 20,
    }
});
export default BeerPage;