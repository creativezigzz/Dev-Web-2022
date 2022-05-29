import React, { useState } from "react";
import { Pressable, View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { listBieres } from "../data/biereList";
import BarreDeRecherche from "../components/BarreDeRecherche";

const MyAdmin = (props) => {
    const [lookBeer, setLookBeer] = useState('');
    const goNav = props.goNav;



    const AfficherBiere = (props) => {

        return (
            <View>
                <AfficherInfoBiere></AfficherInfoBiere>
                <FlatList
                    data={listBieres}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        <BiereInfo beerId={item.id} beerName={item.beerName} degree={item.degree}
                            price={item.price} quantity={item.quantity}></BiereInfo>
                    }

                />
            </View>
        )
    }

    const AfficherInfoBiere = () => {



        return (
            <View style={{ padding: 5, flexDirection: 'row', marginBottom: 5 }}>

                <Text style={{ flex: 7 }}>Bière :</Text>
                <Text style={{ flex: 6 }}>Degrée :</Text>
                <Text style={{ flex: 4 }}>Prix :</Text>
                <Text style={{ flex: 7 }}>Quantité :</Text>
                <Text style={{ flex: 5 }}>Modifier :</Text>


            </View>
        )
    }


    const BiereInfo = (props) => {

        const onClick = () => {
            console.log(goNav)
            goNav("AdminBeerPage", props.beerId, goNav);
        }

        const deleteBeer = () =>{
            console.log(props.beerId);
        }

        
        const addBeer  = () =>{
            goNav("AdminBeerPage", props.beerId, goNav); //a modifier
        }
    
        const modifyBeer  = () =>{
            goNav("AdminBeerPage", props.beerId, goNav); //a modifier
        }

    


        return (
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row', flex: 12 }}>
                    <Text style={style.nameBiereList}>{props.beerName}</Text>
                    <Text style={style.textBiereList}>{props.degree}</Text>
                    <Text style={style.textBiereList}>{props.price} €</Text>
                    <Text style={style.textBiereList}>{props.quantity}</Text>
                </View>
                <View style={{flex: 1,backgroundColor:'lightgrey',borderWidth:1,borderColor:'black',height:31 }}>
                    <Pressable onPress={deleteBeer}>
                    <Image  style={{height:25,margin:1}}source={require('../data/images/delete.png')}></Image>
                    </Pressable>
                </View>
                <View style={{flex: 1,backgroundColor:'lightgrey',borderWidth:1,borderColor:'black',height:31 }}>
                <Pressable onPress={addBeer}>
                        <Image  style={{height:25,margin:1}}source={require('../data/images/add.png')}></Image>
                    </Pressable>
                </View>
                <View style={{flex: 1,backgroundColor:'lightgrey',borderWidth:1,borderColor:'black',height:31 }}>
                    <Pressable onPress={modifyBeer}>
                        <Image  style={{height:25}}source={require('../data/images/modify.png')}></Image>
                    </Pressable>
                </View>
            </View>
        )
    }

    const ChangeBeerButton = () => {
        return (null)
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: 60, flexDirection: 'row' }}>
                <BarreDeRecherche style={{ flex: 3 }} value={lookBeer} setValue={setLookBeer} placeholder={'Recherche de Biere'}></BarreDeRecherche>
                <Text style={{ flex: 1, marginTop: 20, fontSize: 20 }}>appuyer ici</Text>
            </View>
            <View style={{ padding: 10, flex: 1 }}>
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
        flex: 6
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

export default MyAdmin;