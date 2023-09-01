import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text } from 'react-native';
import Header1 from "../../components/header1";
import Input from "../../components/input";
import Button from "../../components/button";
import Login from "../login";

export default function EsqueciSenha () {
        const navigation = useNavigation ();
        const volta = () => navigation.navigate('Login')
        const onpress = () => navigation.navigate('Login');

        return (
                <View style={styles.container}>
                        <Header1 volta={volta}/>
                        <View style={styles.box}>
                                <Text style={styles.recuperar}>Recupere sua conta</Text>
                                <Text style={styles.informeEmail}>Informe seu e-mail cadastrado</Text>
                                <Input texto={'E-mail'} teclado={'default'}/>
                                <Button labelButton={'Enviar'} onpress={onpress}/>
                        </View>
                </View>
        )
}

const styles = StyleSheet.create({
        container: {
                flex: 1,
                backgroundColor: 'black'
        },
        box: {
                flex: 2,
                backgroundColor: 'black'
        },
        recuperar: {
                textAlign: 'center',
                fontSize: 17,
                marginBottom: 75,
                fontWeight: 'bold',

                color: '#FCB040',
        },
        informeEmail: {
                textAlign: 'center',
                fontSize: 15,
                color: '#FCB040',
        },
})