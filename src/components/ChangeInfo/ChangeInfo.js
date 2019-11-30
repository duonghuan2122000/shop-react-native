import React, { Component } from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

import icBack from '../../assets/icons/back_white.png';

export default class ChangeInfo extends Component {
  render() {
    const {
      container, header, iconHeader, txtHeader,
      txtInput, txtBtnAuthentication, btnAuthentication, body
    } = styles;
    return (
      <SafeAreaView style={container}>
        <SafeAreaView style={header}>
          <TouchableOpacity>
            <Image source={icBack} style={iconHeader} />
          </TouchableOpacity>
          <Text style={txtHeader}>User Infomation</Text>
          <SafeAreaView />
        </SafeAreaView>
        <SafeAreaView style={body}>
          <TextInput
            value="Duong Huan"
            placeholder="Enter Name"
            style={txtInput}
          />
          <TextInput
            value="Ha Noi"
            placeholder="Enter Address"
            style={txtInput}
          />
          <TextInput
            value="0866444202"
            placeholder="Enter Phone Number"
            textContentType="telephoneNumber"
            style={txtInput}
          />
          <TouchableOpacity style={btnAuthentication}>
            <Text style={txtBtnAuthentication}>Change Info</Text>
          </TouchableOpacity>
        </SafeAreaView>
        <SafeAreaView />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: '#50C797',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10
  },
  iconHeader: {
    height: 24,
    width: 24
  },
  txtHeader: {
    color: '#fff',
    fontWeight: '800'
  },
  txtInput: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 10,
    borderColor: '#50C797',
    borderWidth: 1
  },
  btnAuthentication: {
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#50C797'
  },
  txtBtnAuthentication: {
    color: '#fff'
  },
  body: {
    paddingHorizontal: 15
  }
});
