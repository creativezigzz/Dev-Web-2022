import React, {useState} from 'react';
import {Button,View, Text, EventEmitter } from 'react-native';
import MyButton from '../components/my_button';
import MyTextInput from '../components/text_input';

const LogInScreen = () =>{
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    /* const [isSign,setSign] = useState();  A SUPPRIMER ?*/

    const onSignInPressed = () =>{
        const url='http://localhost:3000/api/users/login';
        const data = { pseudo: `${username}`, password : `${password}`};
        console.log(JSON.stringify(data));
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:
                JSON.stringify(data)

        })
            .then(response => response.json())
            .then(data => {console.log('Success', data)})
            .catch((error) => {
                console.error('Error',error)
            })
    }

    const test = (json) =>{
        if(username===json.pseudo && password===json.password){
            console.warn('connected');
        }
        else{
            console.warn('disconnected');
        }
        console.log(json.name +" "+ json.id)
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

        <MyButton onPress={onSignInPressed} text='log in'></MyButton>
        
    </View>
)}

export default LogInScreen;