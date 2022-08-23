import React, { useState ,useEffect } from "react";
import { Pressable, View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { listBieres } from "../data/biereList";
import BarreDeRecherche from "../components/BarreDeRecherche";
import {postData, getData} from "../context/fetchContext"

const MyAdmin = (props) => {
    const [lookBeer, setLookBeer] = useState('');
    const [beerList,setBeerList]=useState()  // ICI METTRE FETCH DE TOUTES LES BIERES PAR ORDRE ALPHABETIQUE MAJEUR ET QUANTITE MINEUR DANS LE USESTATE()
   
    useEffect(() => {
        getData('http://localhost:3000/api/beers/'+lookBeer).then(data => setBeerList(data.data)) 
    },[lookBeer]) 


    const goNav = props.goNav;

    const bouttonRecheche = () => {
        setBeerList(lookBeer)//quand on appuis on va mettre la variable lookbeer dans un fetch qui va retourner les bières commençant par looBeer
                             //secondu le resultat ud fetch doit aller dans setBeerList(ici).
    
    }


    const AfficherBiere = (props) => {

        return (
            <View>
                <AfficherInfoBiere></AfficherInfoBiere>
                <FlatList
                    data={beerList}
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
        return null
    }

    return (
        <View style={{ flex: 1 }}>
              <View style={{ height: 25, flexDirection: 'row',marginTop:25 }}>
                <BarreDeRecherche style={{ flex: 3 }} value={lookBeer} setValue={setLookBeer} placeholder={'Recherche de Biere'}></BarreDeRecherche>
                <Pressable style={{flex:1}}onPress={bouttonRecheche}>
                    <Image style={{height:25, resizeMode: 'contain',borderColor:'black',borderWidth:1,width:42,marginHorizontal:25 }} source={require('../data/images/search.png')}></Image>
                </Pressable>
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