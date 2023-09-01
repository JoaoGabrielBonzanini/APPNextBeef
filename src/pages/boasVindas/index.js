import React, { useEffect } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from 'react-native-animatable'

export default function BoasVindas() { //exportando o componente 
    const navigation = useNavigation();

    useEffect(() =>{
        const timer = setTimeout(() =>{//aplica o tempo para o carregamento do app e chama proxima pagina
            navigation.navigate('Login')
        }, 3000);

        return() => clearTimeout(timer);
    }, [])

        return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
            <Animatable.Image
                animation='fadeInDownBig'
                source={require('../../assets/img/nextbeeflogo.png')}
                style={{width: '80%'}}
                resizeMode="contain"
            />
            </View>
             <Animatable.View 
                delay={600}
                animation={'zoomInDown'}
                style={styles.containerArea}>
                    <Text style={styles.texto}>
                        Next Beef
                    </Text>
                    <Text style={styles.texto1}>
                        SEU PRÓXIMO BIFE
                    </Text>

            </Animatable.View>
         
        </View>
)}

const styles = StyleSheet.create({ //cria a estilização dos elementos "CSS"
    container: {
        flex: 1, //100% tela toda
        backgroundColor: 'black'
    },
    containerLogo:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerArea:{
        flex: 1

    },
    texto: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#FCB040',
        textAlign: 'center'
    },
    texto1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FCB040',
        textAlign: 'center'
    }

})