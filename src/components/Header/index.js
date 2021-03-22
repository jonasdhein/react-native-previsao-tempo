import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LottieView from  "lottie-react-native";

import { Ionicons } from '@expo/vector-icons';

export default function Header({ background, weather, icon }){

    return(
        <LinearGradient 
            style={styles.header}
            colors={background}>
            <Text style={styles.date}>{(weather.results ? weather.results.date : '')}</Text>
            <Text style={styles.city}>{(weather.results ? weather.results.city_name : '')}</Text>
            {/*(icon ? <LottieView
                source={require('../../assets/animations/cloud.json')}
                loop
                autoPlay
                height={'60%'}
                /> 
                : ''
            ) */}
            <Ionicons name={icon.name} color={icon.color} size={150} />
            <Text style={styles.temp}>{(weather.results ? weather.results.temp : '')}°</Text>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '95%',
        height: '55%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingTop: 0
    },
    date:{
        color: '#FFF',
        fontSize: 17
    },
    city:{
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20
    },
    temp:{
        color: '#FFF',
        fontSize: 80,
        fontWeight: 'bold',
    }
})