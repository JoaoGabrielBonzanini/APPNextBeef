import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, TouchableOpacity, Alert, KeyboardAvoidingView } from 'react-native';
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Button from "../../components/button";
import Input from "../../components/input";
import Header from "../../components/header";
import InputPassword from "../../components/inputPassword";

export default function Login({navigation}) {
        // const navigation = useNavigation();
        const clientId = 1;

        const trocaSenha = () => navigation.navigate('EsqueciSenha', {clientId});
        const cadastro = () => navigation.navigate('Cadastro', {clientId});
        const irProdutos = () => navigation.navigate('Produtos', {clientId})

        const [email, setEmail] = useState('');
        const [senha, setSenha] = useState('');

        useEffect(() => {
                fetchToken();
        }, [])

        const fetchToken = async () => {
                try {
                        const token = await AsyncStorage.getItem('authtoken')
                        console.log(token)
                }
                catch (error) {
                        console.log(error)
                }
        }

        const efetuaLogin = async () => {
                try {
                        const resposta = await axios.post('http://10.51.47.70:3000/auth', {
                                email: email,
                                senha: senha
                        },)
                        if (resposta.status === 200) {
                                const token = resposta.data.token
                                await AsyncStorage.setItem('authToken', token)
                                Alert.alert('Login efetuado com sucesso.')
                                irProdutos();
                                setEmail('')
                                setSenha('')
                                console.log(email)
                                console.log(senha)
                                console.log(clientId)
                        }
                }
                catch (error) {
                        console.log('Erro autenticação', error)
                        Alert.alert('Occoreu um erro. Tente novamente')
                        setEmail('')
                        setSenha('')
                        navigation.navigate('Login')
                        console.log(email)
                        console.log(senha)
                }
        }

        return (
                <KeyboardAvoidingView style={styles.container}>
                        <View style={styles.header}>
                                <Header />
                        </View>
                        <View style={styles.inputs}>
                                <Input texto={'E-mail'} teclado={'default'} altera={setEmail} valor={email} />
                                <InputPassword teclado={'default'} altera={setSenha} valor={senha} />
                                <Text style={styles.esqueci} onPress={trocaSenha}> Esqueci minha senha</Text>
                                <Text style={styles.cadastro} onPress={cadastro}>Ainda não tem conta? Cadastre-se!</Text>
                                <Button labelButton={'Login'} onpress={efetuaLogin} />
                        </View>
                </KeyboardAvoidingView>
        )
}

const styles = StyleSheet.create({
        container: {
                flex: 1,
                backgroundColor: 'black'
        },
        header: {
                flex: 1.3,
        },
        inputs:{
                flex: 2,
        },
        esqueci: {
                color: '#FCB040',
                fontWeight: 'bold',
                marginLeft: '60%',
                marginTop: 10,
        },
        cadastro: {
                color: '#FCB040',
                textAlign: 'center',
                marginTop: 15,
                fontWeight: 'bold',
        }
})