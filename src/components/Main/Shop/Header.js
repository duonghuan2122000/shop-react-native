import React, { Component } from 'react';
import {
    StyleSheet, Dimensions,
    TouchableOpacity, SafeAreaView, Text, Image, TextInput
} from 'react-native';
import icMenu from '../../../assets/icons/ic_menu.png';
import icLogo from '../../../assets/icons/ic_logo.png';

const { width, height } = Dimensions.get('window');

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
        this.openMenu = this.openMenu.bind(this);
    }

    openMenu() {
        const { navigation } = this.props;
        navigation.openDrawer();
    }

    render() {
        const { container, topHeader, imageHeader, txtInputHeader, txtHeader } = styles;
        return (
            <SafeAreaView style={container}>
                <SafeAreaView style={topHeader}>
                    <TouchableOpacity onPress={this.openMenu}>
                        <Image source={icMenu} style={imageHeader} />
                    </TouchableOpacity>
                    <Text style={txtHeader}>Wearing A Dress</Text>
                    <Image source={icLogo} style={imageHeader} />
                </SafeAreaView>
                <TextInput
                    placeholder="What do you want to buy ?"
                    style={txtInputHeader}
                />
            </SafeAreaView>
        );
    }
}

const heightImage = height / 11 * 0.3,
    heightTxtInput = heightImage * 2;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#50C797', paddingVertical: 20, justifyContent: 'space-between', paddingHorizontal: 20 },
    topHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    imageHeader: { height: heightImage, width: heightImage },
    txtInputHeader: { height: heightTxtInput, width: width - 40, backgroundColor: '#fff', paddingLeft: 20, padding: 0 },
    txtHeader: { color: '#fff', fontSize: heightImage }
});