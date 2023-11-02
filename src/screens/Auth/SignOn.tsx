import React from 'react'
import { Text, View } from '../../../components/Themed'

export const SignOn = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
            <View style={{ flex: 2, backgroundColor: 'skyblue' }} >
                <Text>SignOn</Text>
            </View>
            <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
        </View>
    )
}
