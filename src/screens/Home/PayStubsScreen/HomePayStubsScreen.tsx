import React from 'react'
import { Button } from 'react-native-paper'
import { Text, View } from '../../../../components/Themed'

export const HomePayStubsScreen = ({navigation}:any) => {
  return (
    <View flex={1}>


    <Text>HomePayStubsScreen</Text>
    <View style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
            <View style={{ flex: 2, backgroundColor: 'skyblue' }} >
                <Text>Paystub Screen</Text>
            </View>


            <View style={{ flex: 3, backgroundColor: 'steelblue' }} >
                <Button icon="camera" mode="contained" onPress={() =>
                    navigation.push('List', {
                        component: {
                            name: 'Settings',
                            options: {
                                topBar: {
                                    title: {
                                        text: 'Settings'
                                    }
                                }
                            }
                        }
                    })}>
                    Press me
                </Button>

            </View>
        </View>
    </View>
  )
}
