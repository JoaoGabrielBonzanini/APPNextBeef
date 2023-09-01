import React from 'react';

import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { useState } from 'react';

export default function InputPassword({ valor, altera, teclado, senha }) { //Cria um componente de entrada de dados genéricos, podendo ser utilizado várias vezes em telas diferentes.

        const [showPassword, setShowPassword] = useState(false); //useState é do tipo booleano para que tenha dois estados de uso.

        const togglePasswordVisibility = () => {
                setShowPassword(!showPassword); //Cria o estado "mostra senha" e a opção para alteração da visualização para esconde a senha. 
        }

        return (
                <View style={styles.input}>
                        <TextInput
                                style={styles.senha}
                                placeholder={'Senha'}
                                value={valor}
                                onChangeText={altera}
                                keyboardType={teclado}
                                secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity style={styles.mostra} onPress={togglePasswordVisibility}>
                                <Ionicons name={showPassword ? 'eye-off' : 'eye'} // Chama a constante showPassaword e altera de acordo com o estado solicitado.
                                size={24} color="#696663" /></TouchableOpacity>
                </View>
        )
}

const styles = StyleSheet.create({
        input: {
                flexDirection: 'row',
                marginTop: 20,
                backgroundColor: '#FFFFFF',
                width: '90%',
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingHorizontal: 25,
                paddingVertical: 9,
                borderRadius: 12,
                color: 'black',
                justifyContent: 'space-between',
        },
        senha: {
                fontSize: 20,
                paddingRight: 200
        },
        mostra: {

        }
})