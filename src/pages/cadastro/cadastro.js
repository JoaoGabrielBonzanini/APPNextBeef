import React, { useState }from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import Header1 from "../../components/header1";
import Input from "../../components/input";
import InputPassword from "../../components/inputPassword";
import Button from "../../components/button";

export default function Cadastro() {
        const navigation = useNavigation();
        const volta = () => navigation.navigate('Login');

        const [email, setEmail ] = useState('')
        const [nome_cliente, setNome ] = useState('')
        const [senha, setSenha ] = useState('')
        const [telefone, setTelefone ] = useState('')
        const [cpf, setCpf ] = useState('')

        const avancar = () => {
                if (email === '' || nome_cliente === '' || senha === '' || telefone === '' || cpf === '') {
                                Alert.alert('Preencher os dados corretamente.')
                }
                else {
                        navigation.navigate('Cadastro1', { email, nome_cliente, senha, telefone, cpf})
                }
        }

        return (
                <KeyboardAvoidingView style={styles.container}>
                        <ScrollView style={styles.container}>
                                <View style={styles.header}>
                                        <Header1 volta={volta} />
                                </View>
                                <View style={styles.inputs}>
                                        <Text style={styles.crie}>
                                                Crie sua conta
                                        </Text>
                                        <Input style={styles.inputs}
                                                texto={'E-mail'}
                                                teclado={'default'}
                                                valor={email}
                                                altera={setEmail}
                                        />
                                        <Input style={styles.inputs}
                                                texto={'Nome'}
                                                teclado={'default'}
                                                valor={nome_cliente}
                                                altera={setNome}
                                        />
                                        <InputPassword valor={senha} altera={setSenha}/>
                                        <Input style={styles.inputs}
                                                texto={'Telefone'}
                                                teclado={'numeric'}
                                                valor={telefone}
                                                altera={setTelefone}
                                        />
                                        <Input style={styles.inputs}
                                                texto={'CPF'}
                                                teclado={'numeric'}
                                                valor={cpf}
                                                altera={setCpf}
                                        />
                                        <Button style={styles.inputs} labelButton={'Próximo'} onpress={avancar}/>
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
                flex: 1.3,
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