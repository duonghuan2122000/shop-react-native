import React, { Component } from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';

import icBack from '../../assets/icons/back_white.png';
import icLogo from '../../assets/icons/ic_logo.png';

import SignIn from './SignIn';
import SignUp from './SignUp';

export default class Authentication extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isSignIn: false
    }
    this.gotoSignIn = this.gotoSignIn.bind(this);
    this.gotoSignUp = this.gotoSignUp.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  gotoSignIn() {
    this.setState({ isSignIn: true });
  }

  gotoSignUp() {
    this.setState({ isSignIn: false });
  }

  goBack(){
    const {navigation} = this.props;
    navigation.goBack();
  }

  render() {
    const {
      container, header, iconHeader,
      footer, btnSignIn, btnSignUp, txtBtn,
      disabledBtn
    } = styles;
    const {isSignIn} = this.state;
    const mainJSX = isSignIn ? <SignIn /> : <SignUp gotoSignIn={this.gotoSignIn} />;
    return (
      <KeyboardAvoidingView style={container} enabled behavior="padding">
        <SafeAreaView style={header}>
          <TouchableOpacity onPress={this.goBack}>
            <Image source={icBack} style={iconHeader} />
          </TouchableOpacity>
          <Image source={icLogo} style={iconHeader} />
        </SafeAreaView>
        {mainJSX}
        <SafeAreaView style={footer}>
          <TouchableOpacity style={btnSignIn} onPress={this.gotoSignIn} disabled={isSignIn}>
            <Text style={isSignIn ? disabledBtn : txtBtn}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={btnSignUp} onPress={this.gotoSignUp} disabled={!isSignIn}>
            <Text style={!isSignIn ? disabledBtn : txtBtn}>Sign Up</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#50C797',
    padding: 10,
    justifyContent: 'space-between'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  iconHeader: {
    height: 24,
    width: 24
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10
  },
  btnSignIn: {
    backgroundColor: '#fff',
    marginRight: 1,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15
  },
  btnSignUp: {
    backgroundColor: '#fff',
    marginLeft: 1,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15
  },
  txtBtn: {
    color: '#50C797'
  },
  disabledBtn: {
    color: '#a39a99'
  }
});