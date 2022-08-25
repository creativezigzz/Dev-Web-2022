import * as React from 'react';
import {View, Text, Pressable } from 'react-native';


const MyMenuButton = (props) => {
    return(
        <View>
            <Pressable onPress={() => props.onClickMyButton(props.where)}>
                <Text style={props.style}>{props.where}</Text>
            </Pressable>
        </View>
    );
}


    

export default MyMenuButton;