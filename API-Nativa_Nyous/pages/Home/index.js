import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {

    const [token, setToken] = useState('');

    const getToken = async () => {
        setToken(await AsyncStorage.getItem('@jwt'));
    }

    //Se eu quero atualizar a minha lista todas as vezes que o state for atualizado, não precisa colocar no fetch toda vez o atualizar lista, podemos apenas usar o useEffect
    useEffect(()=>{
        getToken();
    }, [])

    return(
        <View>
            <Text>Home</Text>
            <Text>{token}</Text>
        </View>
    )
}

export default Home;
//Tentando subir o proj