import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Image, Text, View, TouchableOpacity, ScrollView } from "react-native"
import Header3 from "../../components/header3";
import Product from "../../components/product";

export default function Produtos({route, navigation}) {
        const carrinho = () => navigation.navigate('Carrinho')
        const clientId = route.params

        return (
                <ScrollView style={styles.container} >
                        <Header3 carrinho={carrinho} onPress={navigation.navigate('Conta', {clientId})}/> 
                        <View style={styles.whole}>
                                <Text style={styles.lojaEnd}>Sebastião Fernandes Nogueira, 60. Américo Brasiliense/SP</Text>
                                <View style={styles.box}>
                                        <View style={styles.pesquisar}>
                                                <Image source={require('../../assets/img/lupa.png')} style={styles.lupa}></Image>
                                                <Text style={styles.lupaPesquisar} >Pesquisar produto</Text>
                                        </View>
                                        <TouchableOpacity style={styles.buscar}><Text style={styles.busq}>Buscar</Text></TouchableOpacity>
                                </View>
                        </View>
                        <View style={styles.tipos}>
                                <TouchableOpacity style={styles.select}><Text style={styles.busq}>Carne</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.noSelect}><Text style={styles.noSelection}>Frango</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.noSelect}><Text style={styles.noSelection}>Outros</Text></TouchableOpacity>
                        </View>
                        <View style={styles.fileiraProdutos}>
                                <Product imagem={(require('../../assets/img/noix.png'))} corte={'Noix'} marca={'CHEF'} valor={'89,90'}></Product>
                        </View>
                        <View style={styles.fileiraProdutos}>
                                <Product></Product>
                        </View>
                        <View style={styles.fileiraProdutos}>
                                <Product></Product>
                        </View>
                </ScrollView>
        )
}

const styles = StyleSheet.create({
        container: {
                flex: 1,
                backgroundColor: 'black',
        },
        pesquisar: {
                flexDirection: 'row',
                width: '60%',
                paddingVertical: 8,
                borderRadius: 15,
                borderWidth: 3,
                borderColor: 'white',
                height: 41
        },
        lojaEnd: {
                color: 'white',
                textAlign: 'center',
                
        },
        lupaPesquisar: {
                color: 'white',
                fontSize: 15,
                marginLeft: 15
        },
        lupa: {
                height: 25,
                width: 25,
                marginLeft: 8
        },
        busq: {
                color: 'black',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 15
        },
        box: {
                justifyContent: 'space-evenly',
                flexDirection: 'row',
                marginTop: 20
        },
        buscar: {
                backgroundColor: '#FCB040',
                width: '25%',
                height: 41,
                paddingVertical: 8,
                borderRadius: 15,
        },
        select: {
                backgroundColor: '#FCB040',
                width: '25%',
                height: 41,
                paddingVertical: 8,
                borderRadius: 15,
                marginTop: 25,
        },
        tipos: {
                flexDirection: 'row',
                justifyContent: 'space-evenly'
        },
        noSelect: {
                width: '25%',
                height: 41,
                paddingVertical: 8,
                borderRadius: 15,
                marginTop: 25,
                borderWidth: 1,
                borderColor: 'white'
        },
        noSelection: {
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 15
        },
        fileiraProdutos: {
                padding: 20,
        }
})