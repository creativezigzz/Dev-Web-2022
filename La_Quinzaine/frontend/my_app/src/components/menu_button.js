import * as React from 'react';
import {Button,View, Text, EventEmitter, Pressable } from 'react-native';


const MyMenuButton = (props) => {
    return(
        <View>
            <Pressable onPress={() => props.onClickMyButton(props.where)}>
                <Text style={props.style}>Go to {props.where}</Text>
            </Pressable>
        </View>
    );
}


    

export default MyMenuButton;