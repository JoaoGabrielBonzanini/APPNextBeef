import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text } from "react-native"
import { Foundation } from '@expo/vector-icons';

import Header2 from "../../components/header2";
import Button from "../../components/button";

export default function Confirmado({navigation, route}) {
        // const navigation = useNavigation();
        const clientId = route.params.clientId;
        const onpress = () => navigation.navigate('MeusPedidos', {clientId});
        const home = () => navigation.navigate('Produtos', {clientId})

        return (
                <View style={styles.container} >
                        <Header2 home={home}/>
                        <View style={styles.box}>
                                <View style={styles.imagem}>
                                        <Foundation name="checkbox" size={200} color="white" style={styles.check} />
                                        <Text style={styles.concluido} >Pedido concluído com sucesso!</Text>
                                </View>
                                <View style={styles.btn} >
                                        <Button labelButton={'Ir para pedidos'} onpress={onpress}></Button>
                                </View>
                        </View>
                </View>
        )
}

const styles = StyleSheet.create({
        container: {
                flex: 1,
                backgroundColor: 'black',
        },
        concluido: {
                color: 'white',
                fontSize: 25,
        },
        imagem: {
                textAlign: 'center',
                alignItems: 'center',
        },
        btn: {
                marginTop: 100
        },
        box: {
                flex: 2,
        }
})