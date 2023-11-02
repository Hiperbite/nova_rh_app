import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Text, View } from '../../../components/Themed'

export const SignIn = ({ navigation, setAuthenticated }: any) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
            <View style={{ flex: 2, backgroundColor: 'skyblue' }} >
                <Text>SignIn</Text>
            </View>
            <View style={{ flex: 3, backgroundColor: 'steelblue' }} >

                    <Text>index</Text>
                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={() => setAuthenticated(true)}>
                        <Text>Login</Text>
                    </TouchableOpacity>

            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    loginButton: {
        height: 30,
        width: '40%',
        margin: 5,
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
