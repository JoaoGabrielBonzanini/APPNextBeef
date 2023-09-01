import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, ScrollView, Text, Image, TextInput, TouchableOpacity } from "react-native";
import Header1 from "../../components/header1";
import ShoppingItem from "../../components/shoppingItem";
import Button from "../../components/button";

export default function Carrinho ({navigation, route}) {
        // const navigation = useNavigation ();
        const clientId = route.params.clientId;
        console.log(clientId)
        const onpress = () => navigation.navigate('Confirmado', {clientId});
        const volta = () => navigation.navigate('Produtos', {clientId});
        const irConfirmado = () => navigation.navigate('ConfirmadoRetirada', {clientId});
        const irSelecaoEndereco = () => navigation.navigate('SelecaoEndereco', {clientId});

        return (
                <ScrollView style={styles.container}>
                        <Header1 volta={volta}></Header1>
                        <View>
                                <ShoppingItem texto={'Picanha BBK Secrets aproximadamente 900g'} imagem={require('../../assets/img/picanha.png')} preco={'89,90'}></ShoppingItem>
                                <ShoppingItem texto={'Noix CHEF aproximadamente 1,2Kg'} imagem={require('../../assets/img/noix.png')} preco={'59,90'}></ShoppingItem>
                        </View>
                        <View style={styles.resumo}>
                                <View style={styles.View}>
                                        <Text style={styles.sub}>Subtotal </Text>
                                        <Text style={styles.sub}>R$: 149,80</Text>
                                </View>
                                <View style={styles.View}>
                                        <Text style={styles.taxa}>Taxa de entrega </Text>
                                        <Text style={styles.taxa}>R$: 10,00</Text>
                                </View>
                                <View style={styles.View}>
                                        <Text style={styles.total}>Valor total </Text>
                                        <Text style={styles.total}>R$: 159,80</Text>
                                </View>
                        </View>
                        <View style={styles.pgto}>
                                <Text style={styles.formaPgto}>Forma de Pagamento</Text>
                                <Text style={styles.forma}> Cartão de Crédito - Final 1234 </Text>
                        </View>
                        <View style={styles.entrega}>
                                <Text style={styles.nomeEndereco}>Casa</Text>
                                <Text style={styles.endereco}>Rua dos Manacás, 850 - Vila Formosa</Text>
                                <Text style={styles.endereco}>Araraquara CEP: 14850-325</Text>
                                <View style={styles.opcaoEntrega}>
                                 <TouchableOpacity onPress={irConfirmado}><Text style={styles.opcao}>Retirada</Text></TouchableOpacity>
                                 <TouchableOpacity onPress={irSelecaoEndereco}><Text style={styles.opcao}>Alterar endereço</Text></TouchableOpacity>
                                </View>
                        </View>
                        <Button labelButton={'Finalizar Pedido'} onpress={onpress}/>
                </ScrollView>
        )
}

const styles = StyleSheet.create({
        container: {
                flex: 1,
                backgroundColor: 'black'
        },
        resumo: {
                alignItems: 'flex-end',
                borderBottomColor: 'white',
                borderBottomWidth: 1,
        },
        View: {
                flexDirection: 'row'
        },
        sub: {
                color: 'white',
                marginTop: 10,
                marginRight: 25,
                fontWeight: 'bold',
                fontSize: 16
        },
        taxa: {
                color: 'white',
                marginTop: 8,
                marginBottom: 8,
                marginRight: 25,
                fontSize: 16
        },
        total: {
                color: '#FCB040',
                marginBottom: 10,
                marginRight: 25,
                fontWeight: 'bold',
                fontSize: 16
        },
        pgto: {
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                borderBottomWidth: 1,
                borderBottomColor: 'white',
                padding: 25
        },
        formaPgto: {
                color: '#FCB040'
        },
        forma: {
                color: 'white'
        },
        nomeEndereco: {
                color: '#FCB040',
                textAlign: 'center',
                fontSize: 16,
                fontWeight: 'bold',
                marginBottom: 20,
                marginTop: 15
        },
        endereco: {
                color: 'white',
                textAlign: 'center'
        },
        opcaoEntrega: {
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: 20
        },
        opcao: {
                color: '#FCB040',
                fontSize: 16,
                fontWeight: 'bold',
                marginBottom: 10,
        }
})