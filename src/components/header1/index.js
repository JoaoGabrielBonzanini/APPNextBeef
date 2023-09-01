import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Header1({ volta }) {

    return (
        <View style={styles.containerHeader}>
            <View style={styles.volta}>
                <TouchableOpacity onPress={volta}><MaterialCommunityIcons name="arrow-left-circle" size={50} color="#FCB040" /></TouchableOpacity>
            </View>
            <View style={styles.logo}>
                <Image source={require('../../assets/img/nextbeeflogo.png')} style={styles.headerImage} resizeMode='cover' />
                <Text style={styles.titulo}>Next Beef</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerHeader: {
        flex: 0.5,
        flexDirection: 'row',
        backgroundColor: 'black'
    },
    headerImage: {
        width: 110,
        height: 110,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FCB040',
        textAlign: 'center'
    },
    volta: {
        width: 50,
        height: 150,
        marginTop: 5
    },
    logo: {
        marginLeft: 100,
        marginRight: 'auto',
        height: 150

    }
})