//AuthContext.js
import React, {createContext, useState} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext(null);
const {Provider} = AuthContext;

const AuthProvider = ({children}) => {
    const [authState, setAuthState] = useState({
        userToken: '',
        authenticated: 'false',
        roles: 'user',
        idUser: 0,
    });
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const logout = async () => {
        await AsyncStorage.removeItem('userToken')
        setAuthState({
            userToken: '',
            authenticated: 'false',
            roles: 'user'
        });
        alert('vous vous êtes déconnecté...')
    };
    const onSignInPressed = async () => {
        const url = 'http://localhost:3000/api/users/login';
        const data = {pseudo: `${username}`, password: `${password}`, roles: 'user'};

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
                        authenticated: 'true',
                        roles: data.roles,
                        idUser: data.id
                    })
                }

            })
            .catch((error) => {
                console.error('Login Error', error.message)
            })
        await AsyncStorage.setItem('isAuth', isAuthenticated());
        await AsyncStorage.setItem('userToken', getUserToken());
        await AsyncStorage.setItem('roles',isRoles());


    }
    const getUserToken = () => {
        return authState.userToken;
    };
    const getIdCurrentUser = () => {
        return authState.idUser
    }
    const isAuthenticated = () => {
        return authState.authenticated;
    }
    const isLoggedIn = async () => {
        try {
            let userToken = await AsyncStorage.getItem('userToken');
            let isAuth = await AsyncStorage.getItem('isAuth')
            let isRoles = await AsyncStorage.getItem('roles')
            setAuthState({
                userToken: userToken,
                authenticated: isAuth,
                roles: isRoles
            })
        } catch (e) {
            console.log('isLogged error', e)
        }
    }
    const isRoles = () => {
        return authState.roles
    }
    return (
        <Provider
            value={{
                getIdCurrentUser,
                authState,
                getUserToken,
                setAuthState,
                logout,
                isAuthenticated,
                isLoggedIn,
                onSignInPressed,
                username,
                password,
                setUsername,
                setPassword,
                isRoles
            }}>
            {children}
        </Provider>
    );
};

export {AuthContext, AuthProvider};