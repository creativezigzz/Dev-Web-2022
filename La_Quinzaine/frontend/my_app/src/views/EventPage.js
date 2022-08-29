import React, { useState, useEffect } from "react";
import { Pressable, TextInput, View, Text, FlatList, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { getData } from "../context/fetchContext"

// composant qui monte la View complète.
const MyEvents = () => {

    const [listEvent, setEventList] = useState('');
    useEffect(() => {
        getData('http://localhost:3000/api/mdsEvent').then(d => setEventList(d.data))// add conditional check
    }, [])

    // composant qui crée l'architecture d'un objet event
    const EventInfo = (props) => {
        const [brewery, setBrewery] = useState({
            idBrewery: 1,
            breweryDescript: 'Loading',
            breweryName: 'Loading',
            urlImage: 'null'
        });

        useEffect(() => {
            getData('http://localhost:3000/api/brewery/id/' + props.breweryId).then(d => setBrewery(d.data))// add conditional check
        }, [props.breweryId])

        console.log(Date(props.dateString))

        //VIEW d'une brasserie
        return (
            <View style={{marginTop:5,margin:5}}>
                <Text style={{fontSize:16,marginLeft:5}}>{stringToDate(props.dateString)}</Text>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 3,
                        marginHorizontal: 5,
                        marginRight: 85,
                    }}
                />
                <View style={{margin:2,marginLeft:12}}>
                    <Text >{props.descriptionEvent}</Text>
                  <Text style={{fontSize:12}}>Brasserie mise à l'honneur : {brewery.breweryName}</Text>
                </View>

            </View>
        )
    }
    //VIEW de toutes les brasseries
    return (
        <ScrollView>
            <FlatList

                data={listEvent}
                keyExtractor={(item) => item.idEvent}
                renderItem={({ item }) =>
                    <EventInfo descriptionEvent={item.eventDescript} dateString={item.eventDate} breweryId={item.idBrewery} />
                }

            />
        </ScrollView>
    )
}
function stringToDate(string) {
    let date=new Date(string).toString();
    let day = date.slice(0, 3);
    let month= date.slice(4,7)
    let numeroDay= date.slice(8,11);
    switch (day) {
        case 'Mon':
            day = 'Lundi';
            break;
        case 'Tue':
            day = 'Mardi';
            break;
        case 'Wed':
            day = 'Mercredi';
            break;
        case 'Thu':
            day = 'Jeudi';
            break;
        case 'Fri':
            day = 'Vendredi';
            break;
        case 'Sat':
            day = 'Samedi';
            break;
        case 'Sun':
            day = 'Dimanche';
            break;
    }
    switch (month) {
        case 'Jan':
            month = 'Janvier';
            break;
        case 'Feb':
            month = 'Février';
            break;
        case 'Mar':
            month = 'Mars';
            break;
        case 'Apr':
            month = 'Avril';
            break;
        case 'May':
            month = 'Mai';
            break;
        case 'Jun':
            month = 'Juin';
            break;
        case 'Jul':
            month = 'Juillet';
            break;
		case 'Aug':
            month = 'Août';
            break;
		case 'Sep':
            month = 'Septembre';
            break;
		case 'Oct':
            month = 'Octobre';
            break;
		case 'Nov':
            month = 'Novembre';
            break;
		case 'Dec':
            month = 'Décembre';
            break;
    }
    return day+' '+numeroDay+' '+month;
}

export default MyEvents;