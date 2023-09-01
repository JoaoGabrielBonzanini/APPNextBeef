import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image, Text, StyleSheet, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Header1 from "../header1";
import Button from "../button";

export default function ShoppingItem({imagem, texto, preco}) {
        const navigation = useNavigation();
        const voltar = () => navigation.navigate('SelecaoProdutos');
        const finalizar = () => navigation.navigate('Confirmado');

        return (
                <View style={styles.produtoCarrinho}>
                        <View style={styles.produtoItens}>
                                <View style={styles.image}>
                                        <Image source={imagem} style={styles.produtoImage} ></Image>
                                </View>
                                <View style={styles.box}>
                                        <Text style={styles.produtoTexto}>{texto}</Text>
                                        <View style={styles.produtoQuantidade}>
                                                <Ionicons name="add-circle" size={30} color="#FCB040" />
                                                <TextInput style={styles.produtoQtdInput}>01</TextInput>
                                                <Ionicons name="remove-circle" size={30} color="#FCB040" />
                                        </View>
                                </View>
                                <Text style={styles.produtoPreco}>{preco}</Text>
                        </View>
                </View>
        )
}

const styles = StyleSheet.create({
        produtoCarrinho: {
                backgroundColor: 'black',
                paddingTop: 10,
                borderBottomColor: 'white',
                borderBottomWidth: 1,
        },
        produtoItens: {
                flexDirection: 'row',
                marginBottom: 20
        },
        produtoImage: {
                height: 80,
                width: 60
        },
        produtoTexto: {
                color: 'white',
                textAlign: 'center'
        },
        image: {
                width: '20%',
                marginLeft: 15
        },
        box: {
                flexDirection: 'column',
                textAlign: 'center',
                width: '60%',
        },
        produtoQuantidade: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                marginTop: 5,
        },
        produtoQtdInput: {
                color: 'white'
        },
        produtoPreco: {
                color: 'white',
                marginTop: 'auto',
                marginBottom: 'auto'
        },
})