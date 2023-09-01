import React from "react";
import { StyleSheet, View, Text } from "react-native"
import { Foundation } from '@expo/vector-icons';
import Header2 from "../../components/header2";
import Button from "../../components/button";
import { useNavigation } from "@react-navigation/native";

export default function ConfirmadoRetirada() {
        const navigation = useNavigation();
        const home = () => navigation.navigate('Produtos');
        const onpress = () => navigation.navigate('MeusPedidos')

        return (
                <View style={styles.container} >
                        <Header2 home={home}/>
                                <View style={styles.imagem}>
                                        <Foundation name="checkbox" size={200} color="white" style={styles.check} />
                                        <Text style={styles.concluido} >Pedido concluído com sucesso!</Text>
                                </View>
                                <View style={styles.body}>
                                        <Text style={styles.titleRetirada}>Retirada</Text>
                                        <Text style={styles.endRetirada}>Rua dos Manacás, 850 - Vila Formosa</Text>
                                        <Text style={styles.endRetirada}>Araraquara CEP: 14850-325</Text>
                                </View>
                                <View style={styles.btn} >
                                        <Button labelButton={'Ir para pedidos'} onpress={onpress}></Button>
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
                marginTop: 150,
        },
        btn: {
        },
        box: {
                backgroundColor: 'white'
        },
        body: {
                alignItems: 'center',
                marginTop: 50,
        },
        titleRetirada: {
                color: '#D18635',
                fontSize: 18,
                fontWeight: 'bold'
        },
        endRetirada: {
                color: 'white',
                fontSize: 16
        }
})