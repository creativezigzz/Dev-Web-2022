import React, {useState} from 'react';
import {Button,View, Text, EventEmitter } from 'react-native';
import MyButton from '../components/my_button';
import MyTextInput from '../components/text_input';

const SignInScreen = () =>{
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    const onSignInPressed = () =>{
        const url = 'http://localhost:3000/users/'
        fetch()
            .then
    }
   return(
   <View>
        <Text style={{fontSize:28}}>Pseudo :</Text>

        <MyTextInput 
        placeholder='Pseudo'
        value={username}
        setValue={setUsername}
        ></MyTextInput>
       <Text style={{fontSize:28}}>Email :</Text>
       <MyTextInput
           placeholder='Email'
           value={email}
           setValue={ setEmail}
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