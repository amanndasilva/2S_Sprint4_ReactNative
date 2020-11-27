import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

//Async Storage -> semelhante ao localStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ( {navigation} ) => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const salvar = async (value) => {
        try {
          await AsyncStorage.setItem('@jwt', value)
        } catch (e) {
          // saving error
        }
      }

    const Logar = () => {

        const corpo = {
            email : email,
            senha : senha
        }

        fetch('http://10.0.0.106:5000/api/Account/Login' , {
            method: 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(corpo)
        })
        .then(response => response.json())

        .then(data => {
            console.log(data);

            if(data.status != 404) {
                alert('Seja bem vinde!');
                console.log(data.token);
                salvar(data.token);
                navigation.push('Autenticado');
            }else{
                alert('Email ou senha inválidos! :(');
            }
        })
    }

    //TextInput -> é o form, preenchimento de dados
    return(
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                onChangeText={text => setEmail(text)}
                value={email}
                placeholder="Digite seu email"
            />

            <TextInput 
                style={styles.input}
                onChangeText={text => setSenha(text)}
                value={senha}
                placeholder="Digite sua senha"
                secureTextEntry={true}
            />

            <TouchableOpacity style={styles.button} onPress={Logar}>
                <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input : {
        width: '90%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop : 20,
        padding: 5,
        borderRadius: 6
    },
    button : {
        backgroundColor : 'black',
        width: '90%',
        padding : 8,
        borderRadius: 6,
        marginTop : 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton : {
        color : 'white',
    }
});

export default Login;