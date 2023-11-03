import React from 'react'
import { Text, View } from '../../../../components/Themed'

//import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { HomePayStubsScreen } from './HomePayStubsScreen'
import { ListPayStubsScreen } from './ListPayStubsScreen'
import { DetailPayStubsScreen } from './DetailPayStubsScreen'

import { Navigation } from 'react-native-navigation';
import { Button } from 'react-native-paper'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import ModalDetailPayStubsScreen from './ModalDetailPayStubsScreen'

Navigation.registerComponent('Home', () => HomePayStubsScreen);
Navigation.registerComponent('Detail', () => DetailPayStubsScreen);
Navigation.registerComponent('List', () => ListPayStubsScreen);


const Stack = createNativeStackNavigator();

const MyStack = ({ setAuthenticated }: any) => {


    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomePayStubsScreen}
                options={{ headerShown: false }}

            />
            <Stack.Screen
                name="Detail"
                component={DetailPayStubsScreen}
                
                options={{ headerShown: false }}
                />
            <Stack.Screen
                name="List"
                component={ListPayStubsScreen}
                options={{ title: 'Sign On' }} 
                />

        <Stack.Screen name="Modal"
                component={ModalDetailPayStubsScreen}  options={{ presentation: 'modal' }} />
        </Stack.Navigator>
    );

};
export default function PayStubScreen({ setAuthenticated }: any) {
    return (

            <MyStack setAuthenticated={setAuthenticated} />

    )
}
export  function PayStubScreenx() {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
            <View style={{ flex: 2, backgroundColor: 'skyblue' }} >
                <Text>Paystub Screen</Text>
            </View>


            <View style={{ flex: 3, backgroundColor: 'steelblue' }} >
                <Button icon="camera" mode="contained" onPress={() =>
                    Navigation.push('List', {
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
    )
}
