import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LottieView from "lottie-react-native";
import Toast from 'react-native-toast-message';

import { Ionicons } from '@expo/vector-icons';

export default function Header({ background, weather, icon }) {

    function handleClick() {
        Toast.show({
            type: 'info',
            text1: 'Informações',
            text2: `${weather.results.description}`
        });
    }

    return (
        <LinearGradient onPress={() => handleClick()}
            style={styles.header}
            colors={background}>
            <Text style={styles.date}>{(weather.results ? weather.results.date : '')}</Text>
            <Text style={styles.city}>{(weather.results ? weather.results.city_name : '')}</Text>
            <LottieView
                style={{ height: 80, width: 80, position: 'absolute', right: 5, top: 5, zIndex: 9 }}
                source={require('../../assets/animations/cloud.json')}
                loop
                autoPlay
                height={'100%'}
            />
            <Ionicons name={icon.name} color={icon.color} size={150} />
            <Text style={styles.temp}>{(weather.results ? weather.results.temp : '')}°</Text>
            <TouchableOpacity style={{ position: 'absolute', right: 10, bottom: 10 }} onPress={() => handleClick()}>
                <Ionicons name="information-circle-outline" color="#FFF" size={32} />
            </TouchableOpacity>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingTop: 8
    },
    date: {
        color: '#FFF',
        fontSize: 17
    },
    city: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20
    },
    temp: {
        color: '#FFF',
        fontSize: 80,
        fontWeight: 'bold',
    }
})