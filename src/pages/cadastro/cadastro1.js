import React, { useState }from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, KeyboardAvoidingView, ScrollView, Alert } from 'react-native';
import axios from "axios";
import Header1 from "../../components/header1";
import Input from "../../components/input";
import Button from "../../components/button";
import Login from "../login";

export default function Cadastro1({route, navigation}) {
        const onpress = () => navigation.navigate('Login');
        const volta = () => navigation.navigate('Cadastro');

        const [ endereco, setEndereco ] = useState('')
        const [ bairro, setBairro ] = useState('')
        const [ cidade, setCidade ] = useState('')
        const [ cep, setCep ] = useState('')
        const [ complemento, setComplemento ] = useState('')

        const { email, nome_cliente, senha, telefone, cpf } = route.params;

        const enviaDados = async () => {
                if(endereco === '' || bairro === '' || cidade ==='' || cep === '' || complemento === '') {
                        Alert.alert('Preencha os dados corretamente.')
                        return;
                }
                const dadosCadastro = { email, nome_cliente, senha, telefone, cpf, endereco, bairro, cidade, cep, complemento };
                try {
                        const resposta = await axios.post('http://10.51.47.70:3000/clients', dadosCadastro)
                        console.log('Dados enviados com sucesso.', resposta.data)
                        Alert.alert('Cadastro efetuado com sucesso.')
                        navigation.navigate('Login')
                }
                catch (error) {
                        console.log('Erro ao enviar dados', error);
                        Alert.alert('Não foi possível realizar o cadastro.')
                }
        }

        return (
                <KeyboardAvoidingView style={styles.container}>
                        <ScrollView style={styles.container}>
                                <View style={styles.header}>
                                <Header1 volta={volta}/>
                                </View>
                                <View style={styles.inputs}>
                                        <Text style={styles.crie}>Crie sua conta</Text>
                                        <Input
                                                texto={'Endereço'}
                                                teclado={'default'}
                                                valor={endereco}
                                                altera={setEndereco}
                                        />
                                        <Input
                                                texto={'Bairro'}
                                                teclado={'default'}
                                                valor={bairro}
                                                altera={setBairro}
                                        />
                                        <Input
                                                texto={'Cidade'}
                                                teclado={'default'}
                                                valor={cidade}
                                                altera={setCidade}
                                        />
                                        <Input
                                                texto={'CEP'}
                                                teclado={'numeric'}
                                                valor={cep}
                                                altera={setCep}
                                        />
                                        <Input
                                                texto={'Complemento'}
                                                teclado={'default'}
                                                valor={complemento}
                                                altera={setComplemento}
                                        />
                                        <Button labelButton={'Enviar'} onpress={enviaDados} />
                                </View>
                        </ScrollView>
                </KeyboardAvoidingView>
        )
}

const styles = StyleSheet.create({
        container: {
                flex: 1,
                backgroundColor: 'black',
        },
        header: {
                flex: 1.3
        },
        inputs: {
                flex: 2,
                backgroundColor: 'black'
        },
        crie: {
                fontSize: 22,
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 15,
                marginBottom: 15,
                color: '#FCB040'
        }
})