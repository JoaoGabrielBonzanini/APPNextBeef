import React from "react";
import { StyleSheet, TextInput, View, Image } from "react-native";

export default function Input ({texto, valor, altera, teclado}) {
        return (
                <TextInput
                style={styles.input}
                placeholder={texto}
                value={valor}
                onChangeText={altera}
                keyboardType={teclado}
            />
        )
}

const styles = StyleSheet.create ({
        input: {
                marginTop: 20,
                backgroundColor: '#FFFFFF',
                width: '90%',
                marginLeft: 'auto',
                marginRight: 'auto',
                fontSize: 20, 
                paddingHorizontal: 25,
                paddingVertical: 9,
                borderRadius: 12,
                color: 'black',
            }
})