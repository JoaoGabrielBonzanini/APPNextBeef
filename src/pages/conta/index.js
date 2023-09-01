import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

import Header2 from "../../components/header2";
import Button from "../../components/button";

export default function Conta({navigation, route}) {
        const onpress = () => navigation.navigate('Login');
        const home = () => navigation.navigate('Produtos');
        const clientId = route.params
        
        return (
                <View style={styles.container}>
                        <Header2 home={home}/>
                        <FontAwesome name="user-circle-o" size={150} color="white" style={styles.pessoa}/>
                        <View style={styles.dados}>
                        <Text style={styles.nome}>Lysandro de Souza Palma</Text>
                        <Text style={styles.email}>lyzandropalma@gmail.com</Text>
                        </View>
                        <View style={styles.opcao}>
                                <Text style={styles.tex} onPress={navigation.navigate('EditarPerfil', {clientId})}>Editar Perfil</Text>
                                <Text style={styles.tex} onPress={() => navigation.navigate('MeusPedidos')}>Meus Pedidos </Text>
                                <Text style={styles.tex} onPress={() => navigation.navigate('AdicionarEndereco')}>Adicionar Endereço</Text>
                        </View>
                        <Button labelButton={'Sair'} onpress={onpress}/>
                </View>
        )
}

const styles = StyleSheet.create({
        container: {
                flex: 1,
                backgroundColor: 'black'
        },
        opcao: {
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 50,
                marginBottom: 30,

        },
        dados: {
                marginLeft: 'auto',
                marginRight: 'auto',
        },
        pessoa: {
                marginLeft: 'auto',
                marginTop: 100,
                marginRight: 'auto',
        },
        nome: {
                fontWeight: 'bold',
                marginLeft: 'auto',
                marginRight: 'auto',
                fontSize: 16,
                marginTop: 10,
                color: '#FCB040'
        },
        email: {
                fontSize: 16,
                color: '#FCB040'
        },
        tex: {
                fontWeight: 'bold',
                padding: 5,
                marginLeft: 'auto',
                marginRight: 'auto',
                fontSize: 15,
                color: 'white'
        }
})