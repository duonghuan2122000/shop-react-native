import React, { Component, Fragment } from 'react';
import { TextInput, Text, StyleSheet } from 'react-native';
import {
    required, isEmail, minLength, isEqual
} from '../../validate/validate';
export default class TextInputValid extends Component {
    constructor(props) {
        super(props)

        this.state = {
            err: null
        }
        this.onValid = this.onValid.bind(this);
    }

    onValid() {
        const { name, value, otherValue } = this.props;
        const { err } = validationCheck(name, value, otherValue);
        this.setState({ err });
    }

    render() {
        const {
            txtInput, invalidText
        } = styles;
        const { placeholder, onChangeText, value, secureTextEntry } = this.props;
        const { err } = this.state;
        return (
            <Fragment>
                <TextInput
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    style={txtInput}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                    onBlur={this.onValid}
                />
                {err && (
                    <Text style={invalidText}>{err}</Text>
                )}
            </Fragment>
        );
    }
}

const validationCheck = (type, ...args) => {
    switch (type) {
        case "name": {
            let string = args[0].toString();
            if (!required(string)) {
                return {
                    err: 'Name is required'
                }
            } else {
                return {
                    err: null
                }
            }
        }
        case "email": {
            let string = args[0].toString();
            if (!isEmail(string)) {
                return {
                    err: 'Email is invalid'
                }
            } else {
                return {
                    err: null
                }
            }
        }
        case "password": {
            let string = args[0].toString(),
                num = parseInt(args[1]);
            if (!minLength(string, num)) {
                return {
                    err: `Password must have the least of ${num} letters`
                }
            } else {
                return {
                    err: null
                }
            }
        }
        case "rePassword": {
            let str1 = args[0].toString(),
                str2 = args[1].toString();
            if (!isEqual(str1, str2)) {
                return {
                    err: 'Confirm password does not match password'
                }
            } else {
                return {
                    err: null
                }
            }
        }
        default:
            break;
    }
}

const styles = StyleSheet.create({
    txtInput: {
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingLeft: 10,
        marginTop: 5
    },
    invalidText: {
        color: '#c93434',
        marginLeft: 10
    }
});
