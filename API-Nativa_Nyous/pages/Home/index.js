import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {

    const [eventos, setEventos] = useState([]);

    //Se eu quero atualizar a minha lista todas as vezes que o state for atualizado, não precisa colocar no fetch toda vez o atualizar lista, podemos apenas usar o useEffect
    useEffect(()=>{
        listarEventos();
    }, [])

    const listarEventos = () => {
        fetch('http://10.0.0.106:5000/api/Account/Eventos')
        .then(response => response.json())
        .then(dados => {
            setEventos(dados.data);
            console.log(dados.data);
        })
        .catch(err => console.error(err));
    }

    const renderItem = (evento) => {
        return(
            <ItemEvento 
                nome={evento.item.nome}
                imagem={evento.item.urlImagem}
                link={evento.item.link}
            />
        )
    }

    //Para comentar dentro do return {/* o código selecionado */}
    return(
        <View>
            <Text>Home</Text>
            {/* <Text>{token}</Text> */}
            
            <FlatList 
                data={eventos}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}

export default Home;
//u