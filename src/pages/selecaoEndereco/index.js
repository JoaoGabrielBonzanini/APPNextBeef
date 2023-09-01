import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, StyleSheet, View, ScrollView } from "react-native"
import Header1 from "../../components/header1";
import Address from "../../components/address";

export default function SelecaoEndereco ({navigation, route}) {
        // const navigation = useNavigation();
        const clientId = route.params.clientId;
        const volta = () => navigation.navigate('Carrinho', {clientId})
        return (
                <ScrollView style={styles.container}>
                        <Header1 volta={volta}/>
                        <Text style={styles.end}>Meus Endereços</Text>
                        <View style={styles.box}>
                                <Address nome={'Casa'} endereco={'Rua dos Manacás, 850 - Vila Formosa'} cidade={'Araraquara CEP:14850-325'}></Address>
                        </View>
                        <View style={styles.box}>
                                <Address nome={'Casa'} endereco={'Rua Voluntários da Pátria, 1878 - Centro'} cidade={'Araraquara CEP:14801-320'}></Address>
                        </View>
                </ScrollView>
        )

}

const styles = StyleSheet.create({
        container: {
                flex: 1,
                backgroundColor: 'black'
        },
        end: {
                fontSize: 20,
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: 20
        },
        box: {
                marginBottom: 30,
        }
})