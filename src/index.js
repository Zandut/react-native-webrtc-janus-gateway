//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import IOSIcon from 'react-native-vector-icons/Ionicons';
import JoinRoom from './joinRoom';
import ClassRoom from './classroom';

import { createStackNavigator } from "react-navigation";

const Main = createStackNavigator({
    JoinRoom: { 
        screen: JoinRoom,
        navigationOptions: ({navigation}) => ({
            title: 'Join Room',

        })
    }, 
    ClassRoom: {
        screen: ClassRoom,
        navigationOptions: ({navigation}) => ({
            title: 'Class Room',

            headerLeft: (
                <View style={{marginLeft : 20}}>
                    <TouchableOpacity onPress={() => navigation.navigate('JoinRoom')}>
                        <IOSIcon name='ios-arrow-back' size={30} ></IOSIcon>
                    </TouchableOpacity>
                </View>
                
            ),
            

        })
    },
});

//make this component available to the app
export default Main;
