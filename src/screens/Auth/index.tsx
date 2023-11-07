import React from 'react'

import { Text, View } from '../../../components/Themed'

import { StyleSheet, TouchableOpacity } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from './SignIn';
import { SignOn } from './SignOn';

const Stack = createNativeStackNavigator();

const MyStack = ({ setAuthenticated }: any) => {

  const SignInStack = (props: any) => <SignIn {...props} setAuthenticated={setAuthenticated} />
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={SignInStack}
        options={{
          headerShown: false,
          title: "Sing In",
        }}
      />
      <Stack.Screen
        name="Profile"
        component={SignOn}
        options={{
          headerShown: false,
          title: "Sign On",
        }}
      />
    </Stack.Navigator>
  );

};
export const Auth = ({ setAuthenticated }: any) => {
  return (

    <NavigationContainer>
      <MyStack setAuthenticated={setAuthenticated} />
    </NavigationContainer>

  )
}

