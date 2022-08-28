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
        console.log()
        return (
            <View>
                <Text>{props.dateString}</Text>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        marginHorizontal:5,
                        marginRight:75,
                    }}
                />
                <Text >{props.descriptionEvent}</Text>
                <Text> Brasserie mise à l'honneur : </Text>

            </View>
        )
    }
    return (
        <ScrollView>
            <FlatList

                data={listEvent}
                keyExtractor={(item) => item.idEvent}
                renderItem={({ item }) =>
                    <EventInfo descriptionEvent={item.eventDescript} dateString={item.eventDate} />
                }

            />
        </ScrollView>
    )
}


export default MyEvents;