import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
//import Toast from 'react-native-toast-message';

import { condition } from '../../utils/condition';

export default function Forecast({ data }) {
    let icon = condition(data.condition);

    //console.log('icon', data.description);

    /*function handleClick() {
        Toast.show({
            text1: `${data.weekday}`,
            text2: `${data.description} 👋`
        });
    }*/

    return (
        <TouchableOpacity onPress={() => handleClick()} style={styles.container}>
            <Text style={styles.weekday}>{data.weekday}</Text>
            <Text style={styles.date}>{data.date}</Text>
            <Ionicons name={icon.name} color={icon.color} size={30} />

            <View style={styles.temp}>
                <Text>{data.min}°</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{data.max}°</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        marginLeft: 12,
        borderRadius: 8,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 14,
        paddingRight: 14,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    weekday: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    date: {
        fontSize: 14,
    },
    temp: {
        alignItems: 'center',

    }
})