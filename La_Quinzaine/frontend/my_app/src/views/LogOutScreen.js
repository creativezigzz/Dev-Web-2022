import React, {useContext} from 'react';
import { View, Text} from 'react-native';
import MyButton from '../components/my_button';
import {AuthContext} from "../context/AuthContext";



const LogOutScreen = () => {

    const {
        logout,
    } = useContext(AuthContext)

    return (

        <View>
            <MyButton onPress={logout} text="Oui"></MyButton>
            <Text> Succeffuly logged out </Text>
        </View>
    )
}

export default LogOutScreen;