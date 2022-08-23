//AuthContext.js
import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext(null);
const {Provider} = AuthContext;

const AuthProvider = ({children}) => {
    const [authState, setAuthState] = useState({
        userToken: '',
        authenticated: 'false',
    });
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {


    })
    const logout = async () => {
        await AsyncStorage.removeItem('userToken')
        setAuthState({
            userToken: '',
            authenticated: 'false',
        });
    };
    const onSignInPressed = async () => {
        const url = 'http://localhost:3000/api/users/login';
        const data = {pseudo: `${username}`, password: `${password}`};

        console.log(JSON.stringify(data));
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:
                JSON.stringify(data)

        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    setAuthState({
                        userToken: data.token,
                        authenticated: 'true'
                    })
                }

            })
            .catch((error) => {
                console.error('Login Error', error.message)
            })
        await AsyncStorage.setItem('isAuth', isAuthenticated())
        await AsyncStorage.setItem('userToken', getUserToken())


    }

    const getUserToken = () => {
        return authState.userToken;
    };
    const isAuthenticated = () => {
        return authState.authenticated
    }
    const isLoggedIn = async () => {
        try {
            let userToken = await AsyncStorage.getItem('userToken');
            let isAuth = await AsyncStorage.getItem('isAuth')
            setAuthState({
                userToken: userToken,
                authenticated: isAuth
            })
        } catch (e) {
            console.log('isLogged error', e)
        }
    }
    useEffect(() => {
            isLoggedIn();
        },
        [])
    return (
        <Provider
            value={{
                authState,
                getUserToken,
                setAuthState,
                logout,
                isAuthenticated,
                onSignInPressed,
                username,
                password,
                setUsername,
                setPassword,
            }}>
            {children}
        </Provider>
    );
};

export {AuthContext, AuthProvider};