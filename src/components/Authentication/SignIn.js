import React, { Component } from 'react';
import { SafeAreaView, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

export default class SignIn extends Component {
    render() {
        const {
            txtInput, btnAuthentication,
            txtBtnAuthentication, body
          } = styles;
        return (
            <SafeAreaView style={body}>
                <TextInput
                    placeholder="Enter Email"
                    style={txtInput}
                />
                <TextInput
                    placeholder="Enter Password"
                    style={txtInput}
                />
                <TouchableOpacity style={btnAuthentication}>
                    <Text style={txtBtnAuthentication}>Sign In Now</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    txtInput: {
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 10
    },
    btnAuthentication: {
        borderWidth: 1,
        borderColor: '#fff',
        padding: 10,
        alignItems: 'center',
        borderRadius: 10
    },
    txtBtnAuthentication: {
        color: '#fff'
    },
    body: {
        paddingHorizontal: 15
    }
});
