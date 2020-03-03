import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home'
//checking
import Checking from '../screens/checking'
import Detail from '../screens/checking/detail'
//Setting
import Setting from '../screens/settings'
import Login from '../screens/login'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabMain() {
    return (
        <Tab.Navigator initialRouteName="Setting">
            <Tab.Screen name="Checking" component={Checking} />
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Setting" component={Setting} />
        </Tab.Navigator>
    )
}
function LoginMain() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}
//Chứa tất cả Class
function Main() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen
                name="TabMain"
                component={TabMain}
                options={{ title: 'Yaki', headerStatusBarHeight: 0, headerShown: false }}
            />
            <Stack.Screen
                name="Detail"
                component={Detail}
                options={{
                    title: 'Detail',
                }}
            />
        </Stack.Navigator>
    )
}
export declare type RootStackParamList = {
    Home: undefined,
    Checking: undefined,
    Detail: undefined,
    Setting: undefined,
    Login: undefined,
}
export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={LoginMain} />
                <Stack.Screen name="Main" component={Main} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}