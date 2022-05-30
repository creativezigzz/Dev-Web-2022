import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native';


const SignIn = () => {
    return (
        <View style={styles.root}>
             <View style={styles.title}>
                <Text style={[styles.title_text, styles.title_colored]}> Sign In</Text>
             </View>

             {/**inputs */}
            
            <View style={styles.input_group}>
                <Text style={styles.text}>Email</Text>
                    <View style={styles.input_container}>  
                        <TextInput secureTextEntry={false} placeholder='Enter your Email'/>
                    </View>
            </View>
            <View style={styles.input_group}>
                <Text style={styles.text}>Password</Text>
                    <View style={styles.input_container}>  
                        <TextInput secureTextEntry={true} placeholder='Enter your password'/>
                    </View>
            </View>
            
            {/**boutons */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.button_text}>Sign In</Text>
            </TouchableOpacity>
        </View>

    );
}
export default SignIn;

const styles= StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal:25,
        paddingVertical:70,
        backgroundColor: '#f1ecec', 

    },
    input_container:{
        borderWidth:1, 
        borderColor: '#6689f1',
        borderRadius:5,
        marginBottom:10,
        marginTop:10, 
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor:'#fff'
    },
    input:{
         padding: 10
    },
    text:{
        fontSize:16

    },
    button:{
        backgroundColor: '#6689f1',
        padding:15, 
        borderRadius:5, 
    },
    button_text:{
        textAlign: 'center', 
        color:'#fff'
    },
    title:{
        flexDirection:'row',
        justifyContent:'center',
    },
    title_text:{
        fontSize:22,
        textAlign:'center',
        marginBottom:60,
        fontSize:35,
    },
    title_colored:{
        color:'#6689f1',
        fontWeight:'bold',
    },
    input_group:{
        marginBottom:10,
    }
        
    
})