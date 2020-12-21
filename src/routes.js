import 'react-native-gesture-handler';
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './components/Home'
import SearchChannel from './components/searchChannel'
import Icon from 'react-native-vector-icons/AntDesign'
import Conditional from './components/Conditional'

const Stack = createStackNavigator()


export default function Routes () {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Conditional" component={Conditional} options={{headerShown: false}}/>
                <Stack.Screen name="SearchChannel" component={SearchChannel} options={{
                        headerShown: false
                }} />
                <Stack.Screen name="Home" component={Home} options={{title: "Welcome to the jungle",
                    headerTintColor: "white",
                    headerStyle: {
                    backgroundColor: "black"},
                    headerLeft: () => <Icon name="home" size={50}  color="#FFFFFF" />
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}