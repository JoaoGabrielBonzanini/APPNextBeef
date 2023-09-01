import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Address({nome, endereco, cidade}) {
        const navigation = useNavigation();

        return (
                <View style={styles.container}>
                        <View style={styles.box}>
                                <View style={styles.nomePadrao}>
                                        <Text style={styles.btn}>{nome}</Text>
                                        <TouchableOpacity><Text style={styles.btn}>Endereço padrão</Text></TouchableOpacity>
                                </View>
                                <View style={styles.endereco}>
                                        <Text style={styles.end}>{endereco}</Text>
                                        <Text style={styles.end}>{cidade}</Text>
                                </View>
                                <View style={styles.btns}>
                                        <TouchableOpacity><Text style={styles.btn}>Editar</Text></TouchableOpacity>
                                        <TouchableOpacity><Text style={styles.btn}>Remover</Text></TouchableOpacity>
                                </View>
                        </View>
                </View>
        )
}

const styles = StyleSheet.create({
        box: {
                borderBottomColor: 'white',
                borderTopColor: 'white',
                borderBottomWidth: 1,
                borderTopWidth: 1,
                padding: 20,
                backgroundColor: 'black'
        },
        nomePadrao: {
                flexDirection: 'row',
                justifyContent: 'space-around'
        },
        endereco: {
                marginTop: 15
        },
        end: {
                color: 'white',
                textAlign: 'center',
                fontSize: 14
        },
        btns: {
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: 15,
                marginBottom: 10
        },
        btn: {
                color: '#FCB040',
                fontSize: 16,
                fontWeight: 'bold'
        },
})