import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    ActivityIndicator,
    ImageBackground
}
    from 'react-native';

import axios from 'axios'

import bg from '../../../assets/bg.png'

import { Background } from '../../components/Background'

import { styles } from './styles';

const Details = (props) => {
    const [details, setDetails] = useState([]);
    const [color, setDetailsColor] = useState([]);
    const { pokemon, url } = props.route.params;

    useEffect(() => {
        fetchPokemonDetails();
        fetchPokemonDetailsColors();
    }, []);

    async function fetchPokemonDetails() {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        //console.log("response1:", response.data)
        setDetails(response.data);
    };
    async function fetchPokemonDetailsColors() {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-color/${details.id}`)
        setDetailsColor(response.data);
    };

    return !details.id ? (
        <View style={styles.indicator}>
            <ActivityIndicator size="large" color="#E63F34" />
        </View>
    ) : (

        <View>
            <ImageBackground
                source={bg}
                style={styles.view}>

                <Image
                    style={styles.image}
                    source={{ uri: url }}
                />

            </ImageBackground>
            <View style={styles.description}>
                <View style={styles.body}>
                    <Text style={styles.textDetailsTitle}>
                        {details.name}
                    </Text>
                    <Text style={styles.textDetails}>
                        abiliity: {details.abilities.map((item, index) => {
                            return `\n#${index + 1} ${item.ability.name}`
                        })
                        }
                    </Text>
                    <Text style={styles.textDetails}>Type: {details.types[0].type.name}</Text>
                    <Text style={styles.textDetails}>Height: {details.height}</Text>
                    <Text style={styles.textDetails}>Weight: {details.weight}</Text>

                </View>
            </View>
        </View>
    )
};

export default Details;
