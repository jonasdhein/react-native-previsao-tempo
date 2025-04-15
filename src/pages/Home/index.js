import React, { useState, useEffect } from 'react';
import { ActivityIndicator, SafeAreaView, View, Text, StyleSheet, FlatList } from 'react-native';
import LottieView from "lottie-react-native";
import * as Location from 'expo-location';
import { condition } from '../../utils/condition';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import theme from '../../../theme';
import Conditions from '../../components/Conditions';
import Forecast from '../../components/Forecast';

import api, { key } from '../../services/api';

export default function Home() {

    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);
    const [weather, setWeather] = useState({});
    const [icon, setIcon] = useState({});
    const [background, setBackground] = useState(['#1ed6ff', '#97c1ff']);

    // React.useEffect(() => {
    //     Toast.show({
    //         text1: 'Olá',
    //         text2: 'Bem-vindo(a) 👋'
    //     });
    // }, []);

    useEffect(() => {
        console.log('loading', loading);
    }, [loading]);

    //funcao anonima
    useEffect(() => {

        async function loadWeather() {

            setLoading(true);
            setErrorMsg(null);

            const { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                setErrorMsg('Permissão para acessar localização negada!');
                setLoading(false);
                return;
            }

            const location = await Location.getCurrentPositionAsync({});
            const { latitude, longitude } = location.coords;

            const endpoint = `weather?key=${key}&lat=${latitude}&lon=${longitude}&locale=pt-br`;
            const response = await api.get(endpoint);
            setWeather(response.data);

            const conditionName = response.data.results.condition_slug;
            console.log("🚀 ~ loadWeather ~ conditionName:", conditionName)
            setLoading(false);

            try {
                const weatherIcon = condition(conditionName);
                console.log("🚀 ~ weatherIcon:", weatherIcon)
                if (weatherIcon) {
                    setIcon(weatherIcon);
                }
            } catch (err) {
                console.log("🚀 ~ loadWeather ~ err:", err)
            }

            setBackground(condition[conditionName].background);

        }

        loadWeather();

    }, [])

    // if (loading && errorMsg == null) {
    //     return (
    //         <View style={[styles.header, styles.vertical]}>
    //             <LottieView
    //                 style={{ width: 90, height: 90 }}
    //                 resizeMode="center"
    //                 source={require('../../assets/animations/wind.json')}
    //                 loop
    //                 autoPlay
    //             />
    //             <Text style={{color: '#0c3741', fontSize: 20, fontWeight: 'bold'}}>Buscando dados da sua cidade</Text>
    //         </View>

    //     )
    // } else if (loading && errorMsg != null) {
    //     return (
    //         <LottieView
    //             resizeMode="contain"
    //             source={require('../../assets/animations/error.json')}
    //             loop={false}
    //             autoPlay
    //             height={'100%'}
    //         />
    //     )
    // }

    return (
        <SafeAreaView style={styles.container}>
            <Menu />

            {loading ?
                errorMsg == null ?
                    <View style={[styles.header, styles.vertical]}>
                        <LottieView
                            style={{ width: 90, height: 90 }}
                            resizeMode="center"
                            source={require('../../assets/animations/wind.json')}
                            loop
                            autoPlay
                        />
                        <Text style={styles.text}>Buscando dados através da sua localização</Text>
                    </View>
                    :
                    <LottieView
                        resizeMode="contain"
                        source={require('../../assets/animations/error.json')}
                        loop={false}
                        autoPlay
                        height={'100%'}
                    />
                :

                weather &&
                <>
                    <Header background={background} weather={weather} icon={icon} />

                    <Conditions weather={weather} />

                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        contentContainerStyle={{ paddingBottom: '5%' }}
                        style={styles.list}
                        data={weather.results?.forecast}
                        keyExtractor={item => item.date}
                        renderItem={({ item }) => <Forecast data={item} />}
                    />
                </>
            }

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        justifyContent: "center"
    },
    vertical: {
        flexDirection: "column",
        justifyContent: "center",
    },
    header: {
        flex: 1,
        width: '95%',
        height: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingTop: 0
    },
    container: {
        flex: 1,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8f0ff',
        paddingTop: '5%',
    },
    list: {
        marginTop: 10,
    },
    text: {
        color: '#0c3741',
        fontSize: 16,
        fontWeight: 'regular',
        textAlign: 'center',
    }
})