import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import Input from "../../components/input";
import Button from "../../components/button";
import Header1 from "../../components/header1";

export default function AdicionarEndereco() {
        const navigation = useNavigation ();
        const volta = () => navigation.navigate('Conta')
        const onpress = () => navigation.navigate('SelecaoEndereco') 

        return (
                <View style={styles.container}>
                        <Header1 volta={volta}/>
                        <Text style={styles.title}>Adicionar Endereço</Text>
                        <View style={styles.inputs}>
                                <Input texto={'Nome'} teclado={'default'}></Input>
                                <Input texto={'Endereço'} teclado={'default'}></Input>
                                <Input texto={'Bairro'} teclado={'default'}></Input>
                                <Input texto={'Cidade'} teclado={'default'}></Input>
                                <Input texto={'CEP'} teclado={'numeric'}></Input>
                                <Input texto={'Complemento'} teclado={'default'}></Input>
                        </View>
                        <Button labelButton={'Adicionar Endereço'} onpress={onpress}></Button>
                </View>
        )
}

const styles = StyleSheet.create ({
        container: {
                flex: 1,
                backgroundColor: 'black'
        },
        title: {
                color: '#D18635',
                fontSize: 18,
                textAlign: 'center',
                fontWeight: 'bold',
                marginTop: 140
        },
})