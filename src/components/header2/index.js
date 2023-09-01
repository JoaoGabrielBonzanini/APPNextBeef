import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";


export default function Header2({home}) {
    return (

        <View style={styles.containerHeader}>
            <View style={styles.casinha}>
                <TouchableOpacity onPress={home}><Image source={require('../../assets/img/home.png')} style={styles.headerHome} resizeMode="cover" /></TouchableOpacity>
            </View>
            <View style={styles.logo}>
                <Image source={require('../../assets/img/nextbeeflogo.png')} style={styles.headerImage} resizeMode='cover'/>
                <Text style={styles.titulo}> Next Beef </Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    containerHeader: {
        flex: 0.6,
        backgroundColor: 'black',
        flexDirection: 'row',
    },
    headerImage: {
        width: 110,
        height: 110,
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FCB040'
    },
    headerHome: {
        width: 40,
        height: 40,
        marginLeft: 15,
        marginTop: 15
    },
    logo: {
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center'
    },
    casinha: {
        height: 0,
        width: 0
    }
})