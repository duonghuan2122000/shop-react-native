import React, { Component } from 'react';
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import TextInputValid from './TextInputValid';
export default class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: '',
            rePassword: '',
            err: false
        }
    }

    render() {
        const {
            btnAuthentication,
            txtBtnAuthentication, body
        } = styles;
        const { name, email, password, rePassword, err } = this.state;
        return (
            <SafeAreaView style={body}>
                <TextInputValid
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChangeText={name => this.setState({ name })}
                />
                <TextInputValid
                    name="email"
                    placeholder="Enter E-Mail"
                    value={email}
                    onChangeText={email => this.setState({ email })}
                />
                <TextInputValid
                    name="password"
                    secureTextEntry
                    placeholder="Enter Password"
                    value={password}
                    onChangeText={password => this.setState({ password })}
                    otherValue={6}
                />
                <TextInputValid
                    name="rePassword"
                    secureTextEntry
                    placeholder="Confirm Pasword"
                    value={rePassword}
                    onChangeText={rePassword => this.setState({ rePassword })}
                    otherValue={password}
                />
                <TouchableOpacity style={btnAuthentication}>
                    <Text style={txtBtnAuthentication}>Sign Up Now</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    btnAuthentication: {
        borderWidth: 1,
        borderColor: '#fff',
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10
    },
    txtBtnAuthentication: {
        color: '#fff'
    },
    body: {
        paddingHorizontal: 15
    }
});
