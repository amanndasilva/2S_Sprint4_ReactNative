import React, { useState } from 'react';
import { StyleSheet, StatusBar, View, Text, Button, TextInput } from 'react-native';

import * as Speech from 'expo-speech';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    input : {
        width: '90%',
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 20,
        padding: 5,
        borderRadius: 6
    },
});

const TextToSpeech = () => {

    const [text, setText] = useState('');

    const speak = () => {
        //let textToSpeech = "Olá pessoal";
        Speech.speak(text);
    }

    return(
        <View style={styles.container}>
            <TextInput value={text} onChangeText={t => setText(t)} style={styles.input} />
            <Button title="Clique para falar" onPress={() => speak()} />
            <Text>Text to Speech</Text>
        </View>
    )
}

export default TextToSpeech;