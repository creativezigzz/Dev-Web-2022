import * as React from 'react';
import { Image, View, Text} from 'react-native';
import {getData} from "../context/fetchContext";
import {useEffect, useState} from "react";

const BreweryPage = ({ route}) => {
    const [breweryInfo, setBreweryInfo] = useState({
        idBrewery : 1,
        breweryDescript: 'Loading',
        breweryName: 'Loading',
        urlImage:'null'
    });
    const id = route.params.paramKey// ATTENTION ICI JE PRENDS  L'INDEX DU TABLEAU mais je dois prendre l'id de la biere// require(urlImage) de la biere stockée
    useEffect(() => {
        getData('http://localhost:3000/api/brewery/id/' + id)// add conditional check
            .then(data =>setBreweryInfo(data.data))
    }, [setBreweryInfo]);


    const LayoutBrewery = () => {
        return (
            <View style={{ backgroundColor: 'gray', height: 2000 }}>
                <Text style={{ fontSize: 30, fontStyle: 'bold', textAlign: 'center', marginTop: 15, textDecorationLine: 'underline' }}>{breweryInfo.breweryName}</Text>
                <View style={{ marginTop: 30 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Image style={{height: 250, width: 250}} source={require("../data/images/Orval-Brewery.webp")}/>
                    </View>
                    <View style={{ marginTop: 40, marginHorizontal: 20 }}>
                        <Text style={{ fontFamily: 'bold', fontSize: 24 }}> Description :</Text>
                        <View style={{borderColor:'indigo',borderWidth:2,marginTop:10}}>
                            <Text style={{ fontSize: 20, margin: 5 }}>{breweryInfo.breweryDescript} </Text>
                        </View>
                    </View>
                </View>

            </View>
        )
    }


    return (
        <View>
            <LayoutBrewery/>
        </View>
    )
}
export default BreweryPage;