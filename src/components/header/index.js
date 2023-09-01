import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

export default function Header(){
    return(
        
      <View style={styles.containerHeader}>
        <Image
        source={require('../../assets/img/nextbeeflogo.png')}
        style={styles.headerImage}
        resizeMode='cover'
        />
        <Text style={styles.titulo}>
            Next Beef
        </Text>
      </View>
      
    )
    
}

const styles= StyleSheet.create({
    containerHeader:{
        flex: 0.6,
        backgroundColor: 'black' 
    },
    headerImage:{
        width: 110,
        height:110,
        marginLeft: 'auto',
        marginRight: 'auto',

    },
    titulo:{
        fontWeight:'bold',
        fontSize:20,
        color:'#FCB040',
        textAlign: 'center',
    }
})