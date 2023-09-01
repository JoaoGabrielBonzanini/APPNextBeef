import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, Image, View } from "react-native";

export default function Order({ endereco, data, horario, pedido, onpressShop, total }) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <View style={styles.container3}>
                    <View>
                        <Image style={styles.imagem} source={require('../../assets/img/check.png')} />
                    </View>
                    <Text style={styles.endereco}>{endereco}</Text>
                </View>
                <View style={styles.container4}>
                    <Text style={styles.titulo2}>{data}</Text>
                    <Text style={styles.titulo2}>{horario}</Text>
                </View>
            </View>
            <View style={styles.container5}>
                <Text style={styles.titulo3}>Pedido Nº: {pedido}</Text>
                <Text style={styles.titulo3}>R$: {total}</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black'
    },
    container2: {
        flexDirection: 'row'
    },
    container3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 2,
        borderColor: 'white',
        paddingTop: 20,
        width: '80%'

    },
    container4:{
        width:'20%',
        justifyContent:'center',
        borderTopWidth: 2,
        borderColor: 'white',
    },
    container5: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 2,
        borderColor: 'white',
        paddingBottom: 10,
    },
    endereco: {
        width: '70%',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
        textAlign: 'center',
        fontSize:13,
        fontWeight:'bold',
    },

    titulo3: {
        color: 'white',
        fontWeight:'bold',
        fontSize:13

    },

    titulo2: {
        color: 'white',
        fontSize:12,
        textAlign:'center'

    },
    texto: {
        color: 'white',
        fontSize: 16,
        marginLeft: 20,
        marginTop: 10
    },
    imagem: {
        width: 60,
        height: 60
    },
   

})