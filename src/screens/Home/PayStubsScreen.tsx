import React from 'react'
import { Text, View } from '../../../components/Themed'

export default function PayStubScreen(){
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
            <View style={{ flex: 2, backgroundColor: 'skyblue' }} >
                <Text>Paystub Screen</Text>
            </View>
            <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
        </View>
    )
}
