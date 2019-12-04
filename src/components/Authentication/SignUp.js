import React, { Component } from 'react';
import { SafeAreaView, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import TextInputValid from './TextInputValid';
import fetchSignUp from '../../api/fetchSignUp';
export default class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: '',
            rePassword: '',
            err: {
                name: true,
                email: true,
                password: true,
                rePassword: true
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

    onSuccess() {
        const { gotoSignIn } = this.props;
        Alert.alert(
            'Notice',
            'Register User successful',
            [
                { text: 'OK', onPress: gotoSignIn() },
            ],
            { cancelable: false },
        );
    }

    onFailure() {
        Alert.alert(
            'Notice',
            'Register User failure',
            [
                { text: 'OK' },
            ],
            { cancelable: false },
        );
    }

    onSubmit() {
        const { name, email, password } = this.state;
        fetchSignUp(name, email, password)
            .then(text => {
                if (text === 'THANH_CONG') return this.onSuccess();
                return this.onFailure();
            });
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
                    onValidTextInput={this.onValid}
                />
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
                <TextInputValid
                    name="rePassword"
                    secureTextEntry
                    placeholder="Confirm Pasword"
                    value={rePassword}
                    onChangeText={rePassword => this.setState({ rePassword })}
                    otherValue={password}
                    onValidTextInput={this.onValid}
                />
                {(!err.email && !err.name && !err.password && !err.rePassword) ? (
                    <TouchableOpacity style={btnAuthentication} onPress={this.onSubmit}>
                        <Text style={txtBtnAuthentication}>Sign Up Now</Text>
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
        borderRadius: 10,
        marginTop: 10
    },
    txtBtnAuthentication: {
        color: '#fff'
    },
    body: {
        paddingHorizontal: 15
    },
    txtBtnAuthenticationDisable: {
        color: '#5b5b5b'
    }
});
