import * as React from 'react';
import {Button,View, Text, EventEmitter, Pressable } from 'react-native';


const MyButton = (props) => {
    return(
        <View>
             <Pressable onPress={props.onPress}>
                <Text style={{height:85,marginBottom:25,marginLeft:50,backgroundColor:'white',width:200,fontSize:props.size,textAlign:'center',textAlignVertical:'center',borderWidth:2,borderColor:'black'}}>{props.text}</Text>
            </Pressable>
        </View>
    );
}


    

export default MyButton;