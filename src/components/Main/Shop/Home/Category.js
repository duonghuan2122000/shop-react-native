import React, { Component } from 'react';
import { SafeAreaView, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

import global from '../../../../api/global';
import little from '../../../../assets/images/little.jpg';

import { connect } from 'react-redux';

const { width } = Dimensions.get('window');
const widthImage = width - 20,
    heightImage = widthImage / 2,
    heightCategory = heightImage + 40;

export default class Category extends Component {
    render() {
        const { imageCategory, containerCategory, txtCategory } = styles;
        const { gotoListProduct, types } = this.props;
        return (
            <SafeAreaView style={containerCategory}>
                <Text style={txtCategory}>Category</Text>
                <Swiper autoplay loop>
                    {types.map(e => (
                        <TouchableOpacity key={e.id} onPress={() => gotoListProduct(e)}>
                            <Image source={{ uri: `${global.baseUrl}/images/type/${e.image}` }} style={imageCategory} />
                        </TouchableOpacity>
                    ))}
                </Swiper>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    containerCategory: { height: heightCategory, marginTop: 10, shadowColor: '#000000', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.2, elevation: 5, backgroundColor: '#fff', padding: 10 },
    txtCategory: { marginBottom: 10, color: '#919492' },
    imageCategory: {
        height: heightImage,
        width: widthImage
    }
});