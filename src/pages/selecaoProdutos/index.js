import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import Header3 from "../../components/header3";
import Button from "../../components/button";
import { Ionicons } from '@expo/vector-icons';

export default function SelecaoProdutos ({navigation, route}) {
        // const navigation = useNavigation ();
        const clientId = route.params.clientId;
        const volta = () => navigation.navigate('Produtos', {clientId})
        const carrinho = () => navigation.navigate('Carrinho', {clientId})
        const onpress = () => navigation.navigate('Carrinho', {clientId})

        return ( 
                <View style={styles.container}>
                        <Header3 carrinho={carrinho} volta={volta}/>
                        <View style={styles.box}>
                                <Image source={require('../../assets/img/picanha.png')} style={styles.produtoImage}></Image>
                                <Text style={styles.produtoTexto}>Picanha BBK Secrets</Text>
                        </View>
                        <View style={styles.produtoQuantidade}>
                        <Ionicons name="add-circle" size={45} color="#FCB040"/>
                        <TextInput style={styles.produtoQtdInput}>01</TextInput>
                        <Ionicons name="remove-circle" size={45} color="#FCB040"/>
                        </View>
                        <Text style={styles.produtoPreco}>R$ 89,00</Text>
                        <Button labelButton={'Carrinho'} onpress={onpress}/>
                </View>

        )
}

const styles = StyleSheet.create ({
        container: {
                flex: 1,
                backgroundColor: 'black'
        },
        box: {
                alignItems: 'center',
                height: 250,
                width: 'auto',
                marginTop: 50
        },
        produtoImage: {
                height: 190,
                width: 150,
        },
        produtoTexto: {
                color: 'white',
                fontSize: 20,
                fontWeight: '500',
                marginTop: 20
        },
        produtoQuantidade: {
                flexDirection: 'row',
                justifyContent: 'space-evenly',
        },
        produtoQtdInput: {
                color: 'white',
                fontSize: 18,
                fontWeight: 'bold'
        },
        produtoPreco: {
                color: 'white',
                textAlign: 'center',
                fontSize: 22,
        }
})