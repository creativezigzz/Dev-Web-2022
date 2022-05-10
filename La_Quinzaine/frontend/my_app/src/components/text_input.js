import React, { useState } from 'react';
import {Button,View, TextInput, EventEmitter } from 'react-native';

const MyTextInput = (props) => {
    return (
      <View>
        <TextInput style={{height:40,width:300,fontSize:24,textAlign:'center',margin:20,marginBottom:20,borderColor:'black',borderWidth:3,backgroundColor:'white'}}
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.setValue}
          secureTextEntry={props.secureTextEntry}
        />
      </View>
    );
}  

export default MyTextInput;