import * as React from 'react';
import { Image,Button, View, Text, EventEmitter, StyleSheet, Pressable, ScrollView, ImageBackground } from 'react-native';
import { listBieres } from "../data/biereList";

const BeerPage = ({route,props}) => {
    let data = listBieres[route.params.paramKey-1]; // ATTENTION ICI JE PRENDS  L'INDEX DU TABLEAU mais je dois prendre l'id de la biere
    let url=data.urlImage
    console.log(data);
    console.log(data.urlImage)
    console.log(url)

    const LayoutBeer = () => {
        return (
            <View>
                <View>
                    <Text>La bière que vous avez choisi est la : {data.beerName}</Text>
                    <Text>Son degrée : {data.degree}</Text>
                    <Text>Sa brasserie : {data.breweryName}</Text>
                    <Text>Son type : {data.typeName}</Text>
                    <Text>le reste c'est pour plus tard !!!</Text>
                </View>
                <View>
                <Image style={{height:1200}} source={url}></Image>
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
export default BeerPage;