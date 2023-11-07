import React, { useMemo, useState } from 'react'
import { Auth } from './Auth'
import { Home } from './Home'

import { useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Modal, Portal, Text, Button, PaperProvider } from 'react-native-paper';

import 'react-native-gesture-handler';

export const Screens = () => {

    const [isAuthenticated, setAuthenticated] = useState(false)
    const [state:{isSignIn}]=useAuthReducer();
    const colorScheme = useColorScheme();
    return (

        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <PaperProvider>
                {
                    isSignIn ? <Home /> : <Auth setAuthenticated={setAuthenticated} />
                }
            </PaperProvider>
        </ThemeProvider>
    )
}
