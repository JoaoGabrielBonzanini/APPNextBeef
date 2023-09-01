import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Header3({volta, carrinho}) {
    
    return (
        <View style={styles.containerHeader}>
            <View style={styles.volta}>
                    <TouchableOpacity onPress={volta}><MaterialCommunityIcons name="arrow-left-circle" size={50} color="#FCB040"/></TouchableOpacity>
                </View>
            <View style={styles.logo}>
                <Image source={require('../../assets/img/nextbeeflogo.png')} style={styles.headerImage} resizeMode='cover'/>
                <Text style={styles.titulo}>Next Beef</Text>
            </View>
            <View style={styles.car}>
               <TouchableOpacity onPress={carrinho}><Image source={require('../../assets/img/shopping.png')} style={styles.headerCar} /></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerHeader: {
        backgroundColor: 'black',
        flexDirection: 'row'
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
    headerCar: {
        width: 40,
        height: 40,
        marginTop: 5
    },
    volta: {
        width: 50,
        height: 150,
        marginTop: 5,
        width: '30%'
    },
    logo: {
        marginLeft: 'auto',
        marginRight: 'auto',
        // backgroundColor: 'yellow',
        width: '40%'
    },
    car: {
        width: '30%', 
        // backgroundColor: 'green',
        alignItems: 'flex-end'
        
    }
})