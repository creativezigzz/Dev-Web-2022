import React, {useState, useEffect} from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity} from 'react-native';
import BarreDeRecherche from "../components/BarreDeRecherche";
import {getData} from "../context/fetchContext"

const MyBeers = (props) => {
    const [lookBeer, setLookBeer] = useState('');
    const [beerList, setBeerList] = useState()  // ICI METTRE FETCH DE TOUTES LES BIERES PAR ORDRE ALPHABETIQUE MAJEUR ET QUANTITE MINEUR DANS LE USESTATE()

    useEffect(() => {
        getData('http://localhost:3000/api/beers/' + lookBeer).then(data => setBeerList(data.data))// add conditional check
    }, [lookBeer])

    const goNav = props.goNav;

    const AfficherBeer = () => {
        return (
            <View>
                <AfficherInfoBeer></AfficherInfoBeer>
                <FlatList

                    data={beerList}
                    //UTILISE beerList DU USESTATE POUR AVOIR UN TRUC REACTIF
                    keyExtractor={(item) => item.idBeer}
                    renderItem={({item}) =>
                        <BeerInfo beerId={item.idBeer} beerName={item.beerName} degree={item.degree}
                                  price={item.price} quantite={item.quantite} source={item.imageUrl}></BeerInfo>
                    }

                />
            </View>
        )
    }

    const AfficherInfoBeer = () => {


        return (
            <View style={{padding: 5, flexDirection: 'row', marginBottom: 5}}>

                <Text style={{flex: 11}}>Bière :</Text>
                <Text style={{flex: 9}}>Degrée :</Text>
                <Text style={{flex: 6}}>Prix :</Text>
                <Text style={{flex: 9}}>Quantité :</Text>
                <Text style={{flex: 7}}>Image :</Text>

            </View>
        )
    }


    const BeerInfo = (props) => {

        //const url=require(props.source.toString())
        const onClick = () => {
            console.log(props.beerId);
            goNav("Information de la bière", props.beerId, goNav); //ICI Y A UN SOUCI A REGLER
        }

        const changeQuantity = (number) => {
            if (number >= 100) {
                return (number / 100).toString() + 'L';
            } else return number.toString() + 'cl';
        }

        return (
            <View>
                <TouchableOpacity style={{flexDirection: 'row'}} onPress={onClick}>
                    <Text style={style.nameBiereList}>{props.beerName}</Text>
                    <Text style={style.textBiereList}>{props.degree}</Text>
                    <Text style={style.textBiereList}>{props.price} €</Text>
                    <Text style={style.textBiereList}>{changeQuantity(props.quantite)}</Text>
                    <Image style={style.imageBiere} source={require('../data/images/Bush-Blonde-33cl.webp')}></Image>

                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={{flex: 1}}>
            <View style={{height: 25, flexDirection: 'row', marginTop: 25}}>
                <BarreDeRecherche style={{flex: 3}} value={lookBeer} setValue={setLookBeer}
                                  placeholder={'Recherche de Biere'}></BarreDeRecherche>
            </View>
            <View style={{padding: 10, flex: 1}}>
                <AfficherBeer goNav={props.goNav}></AfficherBeer>
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
            fontSize:
                18,
        },
        nameBiereList: {
            flex: 10,
            height: 125,
            width: 802,
            fontSize: 18,
        }
    }
)

export default MyBeers;