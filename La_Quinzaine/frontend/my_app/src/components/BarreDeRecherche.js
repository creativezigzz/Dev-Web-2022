import React from "react"
import {View,TextInput} from 'react-native'

const BarreDeRecherche = (props) => {
    return (
        <View style={{ height: 80, flexDirection: 'row', justifyContent: 'space-between' }}>
            <TextInput style={{ width: 260, fontSize: 20, textAlign: 'center', margin: 20, borderColor: 'black', borderWidth: 2, backgroundColor: 'white' }}
                placeholder={props.placeholder}
                value={props.value}
                onChangeText={props.setValue}
                secureTextEntry={props.secureTextEntry}
            />
        </View>
    )
}
export default BarreDeRecherche;