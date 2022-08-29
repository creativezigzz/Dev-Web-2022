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
            <MyButton size={20} onPress={logout} text="Voulez vous vraiment vous déconnecter ?"></MyButton>
        </View>
    )
}

export default LogOutScreen;