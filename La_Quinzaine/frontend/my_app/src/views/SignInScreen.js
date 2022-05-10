import React, {useState} from 'react';
import {Button,View, Text, EventEmitter } from 'react-native';
import MyButton from '../components/menu_button';
import MyTextInput from '../components/text_input';

const SignInScreen = () =>{
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const onSignInPressed = () =>{
        console.warn('sign in');
    }
   return(
   <View>
        <Text style={{fontSize:28}}>Utilisateur :</Text>

        <MyTextInput 
        placeholder='Utilisateur'
        value={username}
        setValue={setUsername}
        ></MyTextInput>

        <Text style={{fontSize:28}}>Mot de Passe :</Text>

        <MyTextInput
         placeholder='Mot de passe'
         value={password}
         setValue={ setPassword}
         secureTextEntry
        ></MyTextInput>

        <MyButton onPress={onSignInPressed} text='Sign in'></MyButton>
        
    </View>
)}

export default SignInScreen;