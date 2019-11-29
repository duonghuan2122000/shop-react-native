import React, { Component } from 'react';
import { View } from 'react-native';
import TopProduct from './TopProduct';

export default class Shop extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#C5C7C6', paddingTop: 10 }}>
                <TopProduct />
            </View>
        );
    }
}

// const styles = StyleSheet.create({

// });