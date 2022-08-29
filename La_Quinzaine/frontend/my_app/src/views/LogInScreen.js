import React, {useState, createContext, useContext} from 'react';
import {Button, View, Text, EventEmitter} from 'react-native';
import MyButton from '../components/my_button';
import MyTextInput from '../components/text_input';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {AuthContext, AuthProvider} from "../context/AuthContext";


const LogInScreen = () => {

    const {
        onSignInPressed,
        username,
        password,
        setUsername,
        setPassword,
    } = useContext(AuthContext)


    return (
        <View>
            <Text style={{fontSize: 28}}>Utilisateur :</Text>

            <MyTextInput
                placeholder='Utilisateur'
                value={username}
                setValue={setUsername}
            />

            <Text style={{fontSize: 28}}>Mot de Passe :</Text>

            <MyTextInput
                placeholder='Mot de passe'
                value={password}
                setValue={setPassword}
                secureTextEntry
            />

            <MyButton size={40} onPress={onSignInPressed} text='log in'/>

        </View>
    )
}

export default LogInScreen;