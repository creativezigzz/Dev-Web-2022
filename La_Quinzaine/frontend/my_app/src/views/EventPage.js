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
            idBrewery : 1,
            breweryDescript: 'Loading',
            breweryName: 'Loading',
            urlImage:'null'
        });

          useEffect(() => {
        getData('http://localhost:3000/api/brewery/id/' + props.breweryId ).then(d => setBrewery(d.data))// add conditional check
        }, [props.breweryId])

        console.log(brewery)

        //VIEW d'une brasserie
        return (
            <View>
                <Text>{props.dateString}</Text>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 3,
                        marginHorizontal:5,
                        marginRight:85,
                    }}
                />
                <Text >{props.descriptionEvent}</Text>
                <Text> Brasserie mise à l'honneur : {brewery.breweryName}</Text>

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
                    <EventInfo descriptionEvent={item.eventDescript} dateString={item.eventDate} breweryId={item.idBrewery}/>
                }

            />
             <FlatList

data={listEvent}
keyExtractor={(item) => item.idEvent}
renderItem={({ item }) =>
    <EventInfo descriptionEvent={item.eventDescript} dateString={item.eventDate} breweryId={item.idBrewery}/>
}

/>
<FlatList

data={listEvent}
keyExtractor={(item) => item.idEvent}
renderItem={({ item }) =>
    <EventInfo descriptionEvent={item.eventDescript} dateString={item.eventDate} breweryId={item.idBrewery}/>
}

/>
<FlatList

data={listEvent}
keyExtractor={(item) => item.idEvent}
renderItem={({ item }) =>
    <EventInfo descriptionEvent={item.eventDescript} dateString={item.eventDate} breweryId={item.idBrewery}/>
}

/>

        </ScrollView>
    )
}


export default MyEvents;