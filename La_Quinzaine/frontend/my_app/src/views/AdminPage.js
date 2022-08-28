import React, {useState, useEffect, useContext} from "react";
import {Pressable, View, Text, FlatList, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {listBieres} from "../data/biereList";
import BarreDeRecherche from "../components/BarreDeRecherche";
import {postData, getData, deleteData} from "../context/fetchContext"
import {AuthContext} from "../context/AuthContext";


const MyAdmin = (props) => {
    const {
        getUserToken,
    } = useContext(AuthContext)
    const [lookBeer, setLookBeer] = useState('');
    const [beerList, setBeerList] = useState()  // ICI METTRE FETCH DE TOUTES LES BIERES PAR ORDRE ALPHABETIQUE MAJEUR ET QUANTITE MINEUR DANS LE USESTATE()
    useEffect(() => {
        getData('http://localhost:3000/api/beers/' + lookBeer).then(data => setBeerList(data.data))
    }, [lookBeer])


    const goNav = props.goNav;

    const bouttonRecheche = () => {
        setBeerList(lookBeer)
    }


    const AfficherBiere = (props) => {

        return (
            <View>
                <AfficherInfoBiere/>
                <FlatList
                    data={beerList}
                    keyExtractor={(item) => item.idBeer}
                    renderItem={({item}) =>
                        <BiereInfo beerId={item.idBeer} beerName={item.beerName} degree={item.degree}
                                   price={item.price} quantity={item.quantite}/>
                    }

                />
            </View>
        )
    }

    const AfficherInfoBiere = () => {


        return (
            <View style={{padding: 5, flexDirection: 'row', marginBottom: 5}}>

                <Text style={{flex: 7}}>Bière :</Text>
                <Text style={{flex: 6}}>Degrée :</Text>
                <Text style={{flex: 4}}>Prix :</Text>
                <Text style={{flex: 7}}>Quantité :</Text>
                <Text style={{flex: 5}}>Modifier :</Text>


            </View>
        )
    }


    const BiereInfo = (props) => {

        const onClick = () => {
            console.log(goNav)
            goNav("AdminBeerPage", props.beerId, goNav);
        }

        const deleteBeer = () => {
            deleteData("http://localhost:3000/api/beers/id/" + props.beerId,
                [], getUserToken).then(data => console.log(data))
            goNav("AdminPage",props.beerId,goNav)
        }


        const addBeer = () => {
            goNav("AdminBeerPage", props.beerId, goNav); //a modifier
        }

        const modifyBeer = () => {
            goNav("AdminBeerPage", props.beerId, goNav); //a modifier
        }


        return (
            <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'row', flex: 12}}>
                    <Text style={style.nameBiereList}>{props.beerName}</Text>
                    <Text style={style.textBiereList}>{props.degree}</Text>
                    <Text style={style.textBiereList}>{props.price} €</Text>
                    <Text style={style.textBiereList}>{props.quantity}</Text>
                </View>
                <View style={{flex: 1, backgroundColor: 'lightgrey', borderWidth: 1, borderColor: 'black', height: 31}}>
                    <Pressable onPress={deleteBeer}>
                        <Image style={{height: 25, margin: 1}} source={require('../data/images/delete.png')}/>
                    </Pressable>
                </View>
                <View style={{flex: 1, backgroundColor: 'lightgrey', borderWidth: 1, borderColor: 'black', height: 31}}>
                    <Pressable onPress={addBeer}>
                        <Image style={{height: 25, margin: 1}} source={require('../data/images/add.png')}/>
                    </Pressable>
                </View>
                <View style={{flex: 1, backgroundColor: 'lightgrey', borderWidth: 1, borderColor: 'black', height: 31}}>
                    <Pressable onPress={modifyBeer}>
                        <Image style={{height: 25}} source={require('../data/images/modify.png')}/>
                    </Pressable>
                </View>
            </View>
        )
    }

    const ChangeBeerButton = () => {
        return null
    }

    return (
        <View style={{flex: 1}}>
            <View style={{height: 25, flexDirection: 'row', marginTop: 25}}>
                <BarreDeRecherche style={{flex: 3}} value={lookBeer} setValue={setLookBeer}
                                  placeholder={'Recherche de Biere'}/>
                <Pressable style={{flex: 1}} onPress={bouttonRecheche}>
                    <Image style={{
                        height: 25,
                        resizeMode: 'contain',
                        borderColor: 'black',
                        borderWidth: 1,
                        width: 42,
                        marginHorizontal: 25
                    }} source={require('../data/images/search.png')}/>
                </Pressable>
            </View>
            <View style={{padding: 10, flex: 1}}>
                <AfficherBiere goNav={props.goNav}/>
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