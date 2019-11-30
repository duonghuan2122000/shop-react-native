import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import TopProduct from './TopProduct';

export default class Shop extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    render() {
        const {navigation} = this.props;
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#C5C7C6', paddingTop: 10 }}>
                <TopProduct navigation={navigation} />
            </SafeAreaView>
        );
    }
}