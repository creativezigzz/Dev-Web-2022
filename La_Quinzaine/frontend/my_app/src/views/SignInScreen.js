import React, {useState} from 'react';
import {Button, View, Text, EventEmitter} from 'react-native';
import MyButton from '../components/my_button';
import MyTextInput from '../components/text_input';
import {postData, getData} from '../context/fetchContext'

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [roles, setRoles] = useState('user')
    const onSignInPressed = () =>{
        const url='http://localhost:3000/api/users/';
        const data = { pseudo: `${username}`, password : `${password}`, email: `${email}`,roles: `${roles}` };
        //console.log(JSON.stringify(data));
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
    function onPressed(){
            onSignInPressed;
            navigation.navigate('Menu');
    }
    return (
        <View>
            <Text style={{fontSize: 28}}>Pseudo :</Text>

            <MyTextInput
                placeholder='Pseudo'
                value={username}
                setValue={setUsername}
            />
            <Text style={{fontSize: 28}}>Email :</Text>
            <MyTextInput
                placeholder='Email'
                value={email}
                setValue={setEmail}
            />

            <Text style={{fontSize: 28}}>Mot de Passe :</Text>

            <MyTextInput
                placeholder='Mot de passe'
                value={password}
                setValue={setPassword}
                secureTextEntry
            />

            <MyButton size={40} onPress={onPressed} text='Sign in'/>

        </View>
    )
}

export default SignInScreen;