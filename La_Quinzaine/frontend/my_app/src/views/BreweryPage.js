import * as React from 'react';
import { Image, Button, View, Text, EventEmitter, StyleSheet, Pressable, ScrollView, ImageBackground } from 'react-native';
import { listBrewery } from '../data/breweryList';

const BreweryPage = ({ route, props }) => {

    let dataBrewery = listBrewery[route.params.paramKey - 1]; // ATTENTION ICI JE PRENDS  L'INDEX DU TABLEAU mais je dois prendre l'id de la biere
    let url = dataBrewery.urlImage // require(urlImage) de la biere stockée  



    const LayoutBrewery = () => {
        return (
            <View style={{ backgroundColor: 'gray', height: 2000 }}>
                <Text style={{ fontSize: 30, fontStyle: 'bold', textAlign: 'center', marginTop: 15, textDecorationLine: 'underline' }}>{dataBrewery.breweryName}</Text>
                <View style={{ marginTop: 30 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Image style={{ height: 250, width: 250 }} source={url}></Image>
                    </View>
                    <View style={{ marginTop: 40, marginHorizontal: 20 }}>
                        <Text style={{ fontFamily: 'bold', fontSize: 24 }}> Description :</Text>
                        <View style={{borderColor:'indigo',borderWidth:2,marginTop:10}}>
                            <Text style={{ fontSize: 20, margin: 5 }}>{dataBrewery.description} est la plus belle des choppes du monde youhoujhouou</Text>
                        </View>
                    </View>
                </View>

            </View>
        )
    }


    return (
        <View>
            <LayoutBrewery></LayoutBrewery>
        </View>
    )
}
export default BreweryPage;