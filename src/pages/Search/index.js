import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Keyboard } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // poder navegar entre as telas (botão voltar)

import api, { key } from '../../services/api'; //key nao retorna por padrao, por isso entre parenteses
import { LinearGradient } from 'expo-linear-gradient';
import Conditions from '../../components/Conditions';

export default function Search() {
    const navigation = useNavigation();

    const [input, setInput] = useState('');
    const [city, setCity] = useState(null);
    const [error, setError] = useState(null);

    async function handleSearch() {
        const response = await api.get(`/weather?key=${key}&city_name=${input}`);

        if (response.data.by === 'default') {
            setError('Humm, cidade não encontrada!');
            setInput('');
            setCity(null);
            Keyboard.dismiss(); //fecha o teclado
            return;
        }

        setCity(response.data);
        setInput('');
        Keyboard.dismiss(); //fecha o teclado

    }

    if (city) {
        return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={styles.backButton}
                    onPress={() => navigation.navigate('Home', { withAnimation: true })}>
                    <Feather
                        name="chevron-left"
                        size={32}
                        color="#000"
                    />
                    <Text style={{ fontSize: 22 }}>Voltar</Text>
                </TouchableOpacity>
                <View style={styles.searchBox}>
                    <TextInput
                        value={input}
                        onChangeText={(valor) => setInput(valor)}
                        placeholder="Ex: Teutônia, RS"
                        autoFocus={true}
                        style={styles.input}
                    />
                </View>
                <TouchableOpacity style={styles.icon} onPress={handleSearch}>
                    <Feather
                        name="search"
                        size={22}
                        color="#FFF"
                    />
                </TouchableOpacity>
                <LinearGradient
                    style={styles.header}
                    colors={['#1ed6ff', '#97c1ff']}
                >
                    <Text style={styles.date}>{city.results.date}</Text>
                    <Text style={styles.city}>{city.results.city_name}</Text>
                    <View>
                        <Text style={styles.temp}>{city.results.temp}°</Text>
                    </View>

                    <Conditions weather={city} />

                </LinearGradient>

            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
                <Feather
                    name="chevron-left"
                    size={32}
                    color="#000"
                />
                <Text style={{ fontSize: 20 }}>Voltar</Text>
            </TouchableOpacity>
            <View style={styles.searchBox}>
                <TextInput
                    value={input}
                    onChangeText={(valor) => setInput(valor)}
                    placeholder="Ex: Teutônia, RS"
                    style={styles.input}
                />
                <TouchableOpacity style={styles.icon} onPress={handleSearch}>
                    <Feather
                        name="search"
                        size={22}
                        color="#FFF"
                    />
                </TouchableOpacity>
            </View>

            {error && <Text style={{ padding: 8, fontSize: 18 }}>{error}</Text>}

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: '#e8f0ff',
    },
    backButton: {
        flexDirection: 'row',
        marginLeft: 15,
        alignSelf: 'flex-start',
        alignItems: 'center',
        marginBottom: 10
    },
    searchBox: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#DDD',
        width: '90%',
        height: 50,
        borderRadius: 8
    },
    input: {
        width: '85%',
        height: 50,
        backgroundColor: '#fff',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        padding: 7
    },
    icon: {
        width: '15%',
        backgroundColor: '#1ED6FF',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8
    },
    header: {
        marginTop: '5%',
        width: '95%',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 8,
        paddingTop: '3%',
        paddingBottom: '3%'
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