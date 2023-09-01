import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Alert, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Header2 from "../../components/header2";
import Button from "../../components/button";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Conta({ navigation, route }) {
        const clientId = route.params.clientId;

        const onpress = () => navigation.navigate('Login', { clientId });
        const home = () => navigation.navigate('Produtos', { clientId });
        const editarPerfil = () => navigation.navigate('EditarPerfil', { clientId });
        const meusPedidos = () => navigation.navigate('MeusPedidos', { clientId });
        const adicionarEndereco = () => navigation.navigate('AdicionarEndereco', { clientId });

        const [mostraModal, setMostraModal] = useState(false);
        const cancelaExclusao = () => {
                setMostraModal(false)
        }
        const confirmaExclusao = () => {
                setMostraModal(true)
        }
        const excluirConta = async () => {
                try {
                        const token = await AsyncStorage.getItem('authToken')
                        if (token) {
                                const resposta = await axios.delete(`http://10.51.47.70:3000/clients/${clientId}`)
                                if (resposta.status === 202) {
                                        cancelaExclusao();
                                        Alert.alert('Conta deletada com sucesso');
                                        onpress();
                                }
                                else {
                                        Alert.alert('Não foi possível excluir a conta.')
                                }
                        } else {
                                Alert.alert('Token da autenticação não encontrado')
                        }
                } catch (error) {
                        console.error('Não foi possível acesso', error)
                }
        }

        return (
                <View style={styles.container}>
                        <Header2 home={home} />
                        <FontAwesome name="user-circle-o" size={150} color="white" style={styles.pessoa} />
                        <View style={styles.dados}>
                                <Text style={styles.nome}>Lysandro de Souza Palma</Text>
                                <Text style={styles.email}>lyzandropalma@gmail.com</Text>
                        </View>
                        <View style={styles.opcao}>
                                <Text style={styles.tex} onPress={editarPerfil}>Editar Perfil</Text>
                                <Text style={styles.tex} onPress={meusPedidos}>Meus Pedidos </Text>
                                <Text style={styles.tex} onPress={adicionarEndereco}>Adicionar Endereço</Text>
                                <Text style={styles.tex} onPress={confirmaExclusao}>Excluir Conta</Text>
                        </View>
                        <Button labelButton={'Sair'} onpress={onpress} />
                        <Modal visible={mostraModal} transparent={true} animationType="slide">
                                <View style={styles.modal} >
                                        <View style={styles.exclusao} >
                                                <Text style={styles.msg}>Deseja excluir a conta?</Text>
                                                <View style={styles.botoes} >
                                                        <Button labelButton={'Confirma'} onpress={excluirConta}></Button>
                                                        <Button labelButton={'Cancela'} onpress={cancelaExclusao} > </Button>
                                                </View>
                                        </View>
                                </View>
                        </Modal>
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
                marginTop: 30,
                marginBottom: 1,

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
        },
        modal: {
                alignItems: 'center',
                flex: 1,
        },
        exclusao: {
                marginTop: 'auto',
                marginBottom: 'auto',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '90%',
                paddingTop: 20,
                borderRadius: 15,
                height: '30%',
                backgroundColor: 'black'
        },
        msg: {
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                color: '#FCB040',
        },
        botoes: {
                flexDirection: 'row'
        }
})