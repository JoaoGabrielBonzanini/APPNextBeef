import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import Header3 from "../../components/header3";
import Order from "../../components/order";

export default function MeusPedidos() {
        const navigation = useNavigation();
        const volta = () => navigation.navigate('Conta');
        const carrinho = () => navigation.navigate('Carrinho');

        return (
                <ScrollView style={styles.container}>
                        <Header3 volta={volta} carrinho={carrinho} />
                        <Text style={styles.pageTitle}>Meus Pedidos</Text>
                        <View style={styles.box}>
                                <Order endereco={'Rua dos Manacás, 850 - Vila Formosa Araraquara CEP 14850-325'} data={'28/04/2023'} horario={'09h53'} pedido={'142'} total={'39,90'}></Order>
                        </View>
                        <View style={styles.box}>
                                <Order endereco={'Rua dos Manacás, 850 - Vila Formosa Araraquara CEP 14850-325'} data={'28/04/2023'} horario={'09h53'} pedido={'142'} total={'39,90'}></Order>
                        </View>
                        <View style={styles.btn}>
                                <TouchableOpacity onPress={() => navigation.navigate('Produtos')}><Image source={require('../../assets/img/home.png')} style={styles.btnImage}></Image></TouchableOpacity>
                        </View>
                </ScrollView>

        )
}

const styles = StyleSheet.create({
        container: {
                flex: 1,
                backgroundColor: 'black'
        },
        pageTitle: {
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: 15,
        },
        box:{
                marginBottom: 30,
        },
        btn: {
                alignItems: 'center',
                marginTop: 80,
                height: 200,
                paddingTop: 20,
                borderTopWidth: 2,
                borderTopColor: 'white'
        },
        btnImage: {
                height: 60,
                width: 60,
        }
})