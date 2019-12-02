import React, { Component } from 'react';
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import TextInputValid from './TextInputValid';
export default class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            err: {
                email: true,
                password: true
            }
        }
        this.onValid = this.onValid.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValid(name, typeBool) {
        const newErr = {
            ...this.state.err
        };
        newErr[name] = typeBool;
        this.setState({ err: newErr });
    }

    onSubmit() {

    }

    render() {
        const {
            btnAuthentication,
            txtBtnAuthentication, body
        } = styles;
        const { email, password, err } = this.state;
        return (
            <SafeAreaView style={body}>
                <TextInputValid
                    name="email"
                    placeholder="Enter E-Mail"
                    value={email}
                    onChangeText={email => this.setState({ email })}
                    onValidTextInput={this.onValid}
                />
                <TextInputValid
                    name="password"
                    secureTextEntry
                    placeholder="Enter Password"
                    value={password}
                    onChangeText={password => this.setState({ password })}
                    otherValue={6}
                    onValidTextInput={this.onValid}
                />
                {(!err.email && !err.name && !err.password && !err.rePassword) ? (
                    <TouchableOpacity style={btnAuthentication} onPress={this.onSubmit}>
                        <Text style={txtBtnAuthentication}>Sign In Now</Text>
                    </TouchableOpacity>
                ) : (
                    <Text style={{ alignItems: 'center', color: '#fff' }}>Button Submit will show when no error.</Text>
                )}
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
        borderRadius: 10
    },
    txtBtnAuthentication: {
        color: '#fff'
    },
    body: {
        paddingHorizontal: 15
    }
});
