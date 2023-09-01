import React from 'react';

import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Button({labelButton, onpress}) {
    return (
            <TouchableOpacity style={styles.button} onPress={onpress}>
                <Text style={styles.buttonText}>
                    {labelButton}
                </Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FCB040',
        paddingVertical: 10,
        marginTop: 40,
        borderRadius: 20,
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto', 
        marginBottom: 20,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    }
})