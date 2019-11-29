import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';

import profile from '../../../assets/images/profile.png';
export default class Menu extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn: true
        }
    }
    
    render() {
        const {
            container, imageProfile, btnSignIn,
            txtBtn, btnSignedIn
        } = styles;
        const signInJSX = (
            <SafeAreaView style={{ alignItems: 'center' }}>
                <Image source={profile} style={imageProfile} />
                <TouchableOpacity style={btnSignIn}>
                    <Text style={txtBtn}>Sign In</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );

        const signedInJSX = (
            <SafeAreaView style={{ justifyContent: 'space-around' }}>
                <SafeAreaView style={{ alignItems: 'center' }}>
                    <Image source={profile} style={imageProfile} />
                    <Text style={{ marginTop: 10, color: '#fff' }}>Duong Huan</Text>
                </SafeAreaView>
                <SafeAreaView>
                    <TouchableOpacity style={btnSignedIn}>
                        <Text style={txtBtn}>Order History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnSignedIn}>
                        <Text style={txtBtn}>Change Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnSignedIn}>
                        <Text style={txtBtn}>Sign Out</Text>
                    </TouchableOpacity>
                </SafeAreaView>
                <SafeAreaView />
            </SafeAreaView>
        );
        const mainJSX = this.state.isLoggedIn ? signedInJSX : signInJSX;

        return (
            <SafeAreaView
                style={container}
                forceInset={{ top: 'always', horizontal: 'never' }}>
                    {mainJSX}
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#50C797' },
    imageProfile: { height: 100, width: 100 },
    btnSignIn: { backgroundColor: '#fff', alignSelf: 'stretch', marginHorizontal: 10, borderRadius: 5, padding: 10, marginTop: 10, alignItems: 'center' },
    txtBtn: { color: '#50C797' },
    btnSignedIn: { backgroundColor: '#fff', alignSelf: 'stretch', marginHorizontal: 10, borderRadius: 5, padding: 10, marginTop: 10 }
});