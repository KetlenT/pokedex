import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    ActivityIndicator
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Background } from '../../components/Background'

import axios from 'axios'

import { styles } from './styles';

const Home = (props) => {
    const [pokemons, setPokemons] = useState([]);
    const [searchfeild, setSearchfeild] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPokemons();
    }, []);

    async function fetchPokemons() {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?&limit=20offset=20`)
        setPokemons(response.data.results);
        setLoading(false);
    };


    const renderItem = ({ index }) => (
        < View style={styles.container} >
            {
                pokemons
                    .filter(pokemon => pokemon.name.toLowerCase().includes(searchfeild.toLowerCase()))
                    .map((pokemon, index) => {
                        const { url } = pokemon;
                        const format = url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')
                        const imageUrl = 'https://pokeres.bastionbot.org/images/pokemon/' + format + '.png'
                        return (
                            <TouchableOpacity
                                activeOpacity={0.5}
                                key={index}
                                style={styles.card}
                                onPress={() => props.navigation.navigate('Details', {
                                    pokemon: pokemon.name,
                                    url: imageUrl
                                })}>
                                <Text style={styles.textCard}># {index}</Text>
                                <Image
                                    style={{ width: '100%', height: 200, resizeMode: 'contain' }}
                                    source={{ uri: imageUrl }}
                                />
                                <Text style={styles.textCard}>{pokemon.name}</Text>
                            </TouchableOpacity>
                        );
                    })
            }
        </View >
    );

    return (
        <Background>
            <View>
                <Text style={styles.title}>Pokédex</Text>
            </View>
            <View style={styles.searchCont}>
                <AntDesign name="search1" size={16} color="gray" />
                <TextInput
                    placeholder="Search Pokemons"
                    onChangeText={value => setSearchfeild(value)}
                    value={searchfeild}
                />
            </View>
            {
                loading ?
                    <View style={styles.indicator}>
                        <ActivityIndicator size="large" color="#E63F34" />
                    </View>
                    :
                    <FlatList
                        data={pokemons}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => item.name}
                    >

                    </FlatList>
            }
        </Background>
    );
};

export default Home;

