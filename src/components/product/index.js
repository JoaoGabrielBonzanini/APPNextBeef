import React from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Product({ imagem, corte, marca, valor, produto}) {
        return (
                <View style={styles.container}>
                        <TouchableOpacity onPress={produto}>
                                <View style={styles.product}>
                                        <Image source={imagem} style={styles.produtoImagem}></Image>
                                        <Text style={styles.produtoCorte}>{corte}</Text>
                                        <Text style={styles.produtoMarca}>{marca}</Text>
                                        <Text style={styles.produtoValor}>R$ {valor}</Text>
                                </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={produto}>
                                <View style={styles.product}>
                                        <Image source={require('../../assets/img/picanha.png')} style={styles.produtoImagem}></Image>
                                        <Text style={styles.produtoCorte}>Picanha</Text>
                                        <Text style={styles.produtoMarca}>BBK SECRETS</Text>
                                        <Text style={styles.produtoValor}>R$ 89,90</Text>
                                </View>
                        </TouchableOpacity>
                </View>
        )
}

const styles = StyleSheet.create({
        container: {
                flexDirection: 'row'
        },
        product: {
                flex: 1,
                height: 175,
                width: 200,
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'space-evenly'

        },
        produtoImagem: {
                height: 95,
                width: 76,
        },
        produtoCorte: {
                marginTop: 10,
                fontSize: 15,
                fontWeight: 'bold',
                color: '#FCB040'
        },
        produtoMarca: {
                fontSize: 15,
                color: '#FCB040',
                fontWeight: 'bold'
        },
        produtoValor: {
                fontSize: 18,
                fontWeight: 'bold',
                color: 'white'
        }
})