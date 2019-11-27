import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';

import Header from './Header';
import Category from './Category';

export default class Shop extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             
        }
        this.openDrawer = this.openDrawer.bind(this);
    }
    
    openDrawer() {
        const { navigation } = this.props;
        navigation.openDrawer();
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#C5C7C6' }}>
                <Header openMenu={this.openDrawer} />
                <View style={{ flex: 10, marginTop: 10 }}>
                    <Category />
                </View>
            </View>
        );
    }
}