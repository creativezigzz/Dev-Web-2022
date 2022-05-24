import React, { useState } from "react";
import {  TextInput, View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import BarreDeRecherche from "../components/BarreDeRecherche";

const MyBrewery = () =>{
    const [lookBrewery, setLookBrewery] = useState('');

    const AfficherBrewery = () =>{
        return(
            <View>
                <Text> Ceci sont les brasseries</Text>
            </View>
        )
    }
    
    return (
        <View style={{flex:1 }}>
            <View style={{ height:60 }}>
                <BarreDeRecherche value={lookBrewery} setValue={setLookBrewery} placeholder={'Recherche de Brasseries'}></BarreDeRecherche>
            </View>
            <View style={{ padding:10,flex:1}}>
                <AfficherBrewery></AfficherBrewery>
            </View>
        </View>

    )
}
export default MyBrewery;