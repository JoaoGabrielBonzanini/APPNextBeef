import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import Header1 from "../../components/header1";
import Button from "../../components/button";
import InputPassword from "../../components/inputPassword";

export default function TrocarSenha (){
        const navigation = useNavigation();
        const volta = () => navigation.navigate('Conta')
        const onpress = () => navigation.navigate('Conta')

        return (
                <View style={styles.container}>
                        <Header1 volta={volta}/>
                        <Text style={styles.title}>Editar Perfil</Text>
                        <View style={styles.inputs}>
                                <InputPassword senha={'Senha Atual'} teclado={'default'}></InputPassword>
                                <InputPassword senha={'Nova Senha'} teclado={'default'}></InputPassword>
                                <InputPassword senha={'Confirmar Senha'} teclado={'default'}></InputPassword>
                        </View>
                        <Button labelButton={'Salvar Senha'} onpress={onpress}/>
                </View>
        )
}

const styles = StyleSheet.create({
        container: {
                flex: 1,
                backgroundColor: 'black'
        },
        title: {
                color: '#D18635',
                fontSize: 18,
                fontWeight: 'bold',
                textAlign: 'center',
                paddingTop: 150
        },
        inputs: {
                paddingBottom: 150,
                marginTop: 30
        }
})