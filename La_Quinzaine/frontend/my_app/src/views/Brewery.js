import React, {useState, useEffect} from "react";
import {Pressable, TextInput, View, Text, FlatList, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {listBrewery} from "../data/breweryList";
import BarreDeRecherche from "../components/BarreDeRecherche";
import MyMenuButton from "../components/menu_button"
import {getData} from "../context/fetchContext";


const MyBrewery = (props) => {
    const [lookBrewery, setLookBrewery] = useState('');
    const [breweryList, setBreweryList] = useState(''); //meme delire que beerpage mais cette fois-ci


    useEffect(() => {
        getData('http://localhost:3000/api/brewery/' + lookBrewery).then(data => setBreweryList(data.data))// add conditional check
    }, [lookBrewery])

    const goNav = props.goNav
    const AfficherBrewery = () => {

        return (
            <View>
                <AfficherInfoBrewery></AfficherInfoBrewery>
                <FlatList
                    data={breweryList}//mettre ici breweryList
                    keyExtractor={(item) => item.idBrewery}
                    renderItem={({item}) =>
                        <BreweryInfo breweryId={item.idBrewery} goNav={goNav} breweryName={item.breweryName}
                                     source={item.urlImage}/>
                    }

                />
            </View>
        )
    }

    const AfficherInfoBrewery = () => {


        return (
            <View style={{padding: 5, flexDirection: 'row', marginBottom: 5}}>

                <Text style={{flex: 11}}>Brasserie :</Text>
                <Text style={{flex: 7}}>Image :</Text>

            </View>
        )
    }


    const BreweryInfo = (props) => {

        const onClick = () => {
            props.goNav("Information de la brasserie", props.breweryId);
        }


        return (
            <View>
                <TouchableOpacity style={{flexDirection: 'row'}} onPress={onClick}>
                    <Text style={style.nameBreweryList}>{props.breweryName}</Text>
                    <Image style={style.imageBrewery} source={require('../data/images/TK-1L.webp')}></Image>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={{flex: 1}}>
            <View style={{height: 25, flexDirection: 'row', marginTop: 25}}>
                <BarreDeRecherche value={lookBrewery} setValue={setLookBrewery}
                                  placeholder={'Recherche de Brasseries'}/>
            </View>
            <View style={{padding: 10, flex: 1}}>
                <AfficherBrewery goNav={goNav}/>
            </View>
            <View>
            </View>
        </View>

    )
}


const style = StyleSheet.create({
        imageBrewery: {
            height: 80,
            flex: 6
        },
        textBreweryList: {
            flex: 6,
            height: 120,
            width: 80,
            fontSize: 18,
        },
        nameBreweryList: {
            flex: 10,
            height: 125,
            width: 802,
            fontSize: 18,
        }
    }
)

export default MyBrewery;