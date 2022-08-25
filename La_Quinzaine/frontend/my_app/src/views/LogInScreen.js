import React, {useState, createContext, useContext} from 'react';
import {Button, View, Text, EventEmitter} from 'react-native';
import MyButton from '../components/my_button';
import MyTextInput from '../components/text_input';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {AuthContext,AuthProvider} from "../context/AuthContext";


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
            ></MyTextInput>

            <Text style={{fontSize: 28}}>Mot de Passe :</Text>

            <MyTextInput
                placeholder='Mot de passe'
                value={password}
                setValue={setPassword}
                secureTextEntry
            ></MyTextInput>

            <MyButton onPress={onSignInPressed} text='log in'></MyButton>

        </View>
    )
}

export default LogInScreen;