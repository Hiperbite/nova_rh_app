import React from 'react'
import { Text, View } from '../../../components/Themed'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';


import { IconButton, Icon, MD3Colors } from 'react-native-paper';

const Tab = createBottomTabNavigator();

import Colors from '../../../constants/Colors';
import PayStubScreen from './PayStubsScreen';
import CareerScreen from './CareerScreen';


export const Home = () => {
  return (
    <MyTabs />


  )
}


/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

function MyTabs() {

  const colorScheme = useColorScheme();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
            headerRight: () => (
              <Link href="/modal" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <FontAwesome
                      name="info-circle"
                      size={25}
                      color={Colors[colorScheme ?? 'light'].text}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            ),
          }}
        />

        <Tab.Screen
          name="PayStubScreen"
          component={PayStubScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => <TabBarIcon name="money" color={color} />,
          }}
        />

        <Tab.Screen
          name="CareerScreen"
          component={CareerScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => <TabBarIcon name="tablet" color={color} />,
          }}
        />
        <Tab.Screen name="Settings" component={SettingsScreen}

          options={{
            title: 'Tab One',
            tabBarIcon: ({ color }) => <Icon
              source="home"
              color={color}
              size={20}
            />
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}