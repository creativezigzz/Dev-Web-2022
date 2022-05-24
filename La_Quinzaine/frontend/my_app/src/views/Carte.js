import React, { useState } from "react";
import { TextInput, View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { listBieres } from "../data/biereList";
import BarreDeRecherche from "../components/BarreDeRecherche";



const MyCarte = (props) => {
    const [lookBeer, setLookBeer] = useState('');

    const AfficherBiere = (props) => {
    
        return (
            <View>
                <AfficherInfoBiere></AfficherInfoBiere>
                <FlatList
                    data={listBieres}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        <BiereInfo  beerId={item.id} goNav={props.goNav} beerName={item.beerName} degree={item.degree}
                            price={item.price} quantity={item.quantity} source={item.urlImage}></BiereInfo>
                    }
    
                />
            </View>
        )
    }

    const AfficherInfoBiere =() =>{



        return(
            <View style={{padding:5,flexDirection:'row',marginBottom:5}}>
                
                <Text style={{flex:11}}>Bière :</Text>
                <Text style={{flex:9}}>Degrée :</Text>
                <Text style={{flex:6}}>Prix :</Text>
                <Text style={{flex:9}}>Quantité :</Text>
                <Text style={{flex:7}}>Image :</Text>
        
            </View>     
        )
    }
    
    
    const BiereInfo = (props) => {
    
        const onClick = () =>{
            props.goNav(props.beerId );
        }
        
    
        return (
            <View >
                <TouchableOpacity style={{flexDirection:'row'}} onPress={onClick}>
                <Text style={style.nameBiereList}>{props.beerName}</Text>
                <Text style={style.textBiereList}>{props.degree}</Text>
                <Text style={style.textBiereList}>{props.price} €</Text>
                <Text style={style.textBiereList}>{props.quantity}</Text>
                <Image style={style.imageBiere} source={props.source}></Image>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={{flex:1 }}>
            <View style={{ height:60 }}>
                <BarreDeRecherche value={lookBeer} setValue={setLookBeer} placeholder={'Recherche de Biere'}></BarreDeRecherche>
            </View> 
            <View style={{ padding:10,flex:1}}>
                <AfficherBiere goNav={props.goNav}></AfficherBiere>
            </View>
            <View>
           </View>
           
        </View>

    )
}


const style = StyleSheet.create({
    imageBiere: {
        height: 80,
        flex:6
    },
    textBiereList: {
        flex: 6,
        height: 120,
        width: 80,
        fontSize: 18,
    },
    nameBiereList: {
        flex: 10,
        height: 125,
        width: 802,
        fontSize: 18,
    }
}
)

export default MyCarte;