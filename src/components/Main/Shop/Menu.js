import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';

import profile from '../../../assets/images/profile.png';
export default class Menu extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn: true
        }
        this.gotoOrderHistor = this.gotoOrderHistor.bind(this);
        this.gotoChangeInfo = this.gotoChangeInfo.bind(this);
        this.gotoAuthentication = this.gotoAuthentication.bind(this);
    }

    gotoOrderHistor(){
        const {navigation} = this.props;
        navigation.closeDrawer();
        navigation.push('OrderHistory');
    }

    gotoChangeInfo(){
        const {navigation} = this.props;
        navigation.closeDrawer();
        navigation.push('ChangeInfo');
    }

    gotoAuthentication(){
        const {navigation} = this.props;
        navigation.closeDrawer();
        navigation.push('Authentication');
    }
    
    render() {
        const {
            container, imageProfile, btnSignIn,
            txtBtn, btnSignedIn
        } = styles;
        const signInJSX = (
            <SafeAreaView style={{ alignItems: 'center' }}>
                <Image source={profile} style={imageProfile} />
                <TouchableOpacity style={btnSignIn} onPress={this.gotoAuthentication}>
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
                    <TouchableOpacity style={btnSignedIn} onPress={this.gotoOrderHistor}>
                        <Text style={txtBtn}>Order History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnSignedIn} onPress={this.gotoChangeInfo}>
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