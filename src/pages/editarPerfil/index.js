import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, Alert } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Button from "../../components/button";
import InputPassword from "../../components/inputPassword";
import Input from "../../components/input";
import Header1 from "../../components/header1";

export default function EditarPerfil({route, navigation}) {
        // const volta = () => navigation.navigate('Produtos')
        const clientId = route.params.clientId;

        const atualizado = () => navigation.navigate('Conta', {clientId});
        const irConta = () => navigation.navigate('Conta', {clientId});

        const [email, setEmail] = useState('')
        const [nome_cliente, setNome] = useState('')
        const [senha, setSenha] = useState('')
        const [telefone, setTelefone] = useState('')
        const [cpf, setCpf] = useState('')
        const [endereco, setEndereco] = useState('')
        const [cidade, setCidade] = useState('')
        const [bairro, setBairro] = useState('')
        const [cep, setCep] = useState('')
        const [complemento, setComplemento] = useState('')

        const buscarCliente = async () => {
                try{
                        const token = await AsyncStorage.getItem('authToken')
                        if(token) {
                                const resposta = await axios.get(`http://10.51.47.70:3000/clients/${clientId}`)
                                if(resposta.status === 200) {
                                        const dadosCliente = resposta.data[0];
                                        console.log(dadosCliente)
                                        setEmail(dadosCliente.email)
                                        setNome(dadosCliente.nome_cliente)
                                        setSenha(dadosCliente.senha)
                                        setCpf(dadosCliente.cpf.toString())
                                        setEndereco(dadosCliente.endereco)
                                        setTelefone(dadosCliente.telefone.toString())
                                        setCidade(dadosCliente.cidade)
                                        setBairro(dadosCliente.bairro)
                                        setCep(dadosCliente.cep.toString())
                                        setComplemento(dadosCliente.complemento)
                                }
                                else{
                                        console.log('Erro no status 200')
                                }
                        }
                }
                catch(error) {
                        console.error('Erro na requisição', error)
                }

        }
        useEffect(() => {
                buscarCliente();
        }, [])

        const atualizar = async () => {
                try{
                        const token = await AsyncStorage.getItem('authToken')
                        if(token) {
                                const resposta = await axios.put(`http://10.51.47.70:3000/clients/${clientId}`,{
                                        nome_cliente,
                                        email,
                                        senha,
                                        telefone,
                                        cpf,
                                        endereco,
                                        bairro,
                                        cidade,
                                        complemento,
                                        cep
                                })
                                if(resposta.status === 200){
                                        Alert.alert('Dados atualizados com sucesso.')
                                        atualizado();
                                }
                                else{
                                        Alert.alert('Não foi possível atualizar os dados.')
                                }
                        }
                }
                catch(error){
                        console.error('Erro na requisição', error.response.data)
                }
        }
        return (
                <KeyboardAvoidingView style={styles.container} behavior="height">
                        <ScrollView style={styles.whole}>
                                <Header1 volta={irConta}/>
                                <Text style={styles.title}>Editar Perfil</Text>
                                <View style={styles.inputs}>
                                        <Input texto={'Nome'} teclado={'default'} valor={nome_cliente} altera={setNome}></Input>
                                        <Input texto={'E-mail'} teclado={'default'} valor={email} altera={setEmail}></Input>
                                        <InputPassword valor={senha} altera={setSenha}/>
                                        <Input texto={'CPF'} teclado={'numeric'} valor={cpf} altera={setCpf}></Input>
                                        <Input texto={'Telefone'} teclado={'numeric'} valor={telefone} altera={setTelefone}></Input>
                                        <Input texto={'Endereço'} teclado={'default'} valor={endereco} altera={setEndereco}></Input>
                                        <Input texto={'Cidade'} teclado={'default'} valor={cidade} altera={setCidade}></Input>
                                        <Input texto={'Bairro'} teclado={'default'} valor={bairro} altera={setBairro}></Input>
                                        <Input texto={'CEP'} teclado={'numeric'} valor={cep} altera={setCep}></Input>
                                        <Input texto={'Complemento'} teclado={'default'} valor={complemento} altera={setComplemento}></Input>
                                </View>
                                <Button labelButton={'Salvar Perfil'} onpress={atualizar}></Button>
                        </ScrollView>
                </KeyboardAvoidingView>
        )
}

const styles = StyleSheet.create({
        container: {
                flex: 1,
                backgroundColor: 'black'
        },
        whole:{
                backgroundColor: 'black'
        },
        title: {
                color: '#D18635',
                fontSize: 18,
                fontWeight: 'bold',
                textAlign: 'center',
        },
        inputs: {
                marginTop: 15
        }
})