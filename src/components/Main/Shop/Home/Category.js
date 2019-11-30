import React, { Component } from 'react';
import { SafeAreaView, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

import little from '../../../../assets/images/little.jpg';
import maxi from '../../../../assets/images/maxi.jpg';
import party from '../../../../assets/images/party.jpg';

const { width } = Dimensions.get('window');
const widthImage = width - 20,
    heightImage = widthImage / 2,
    heightCategory = heightImage + 40;

export default class Category extends Component {
    render() {
        const { imageCategory, containerCategory, txtCategory } = styles;
        const { gotoListProduct } = this.props;
        return (
            <SafeAreaView style={containerCategory}>
                <Text style={txtCategory}>Category</Text>
                <Swiper autoplay loop>
                    <TouchableOpacity onPress={gotoListProduct}>
                        <Image source={little} style={imageCategory} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={gotoListProduct}>
                        <Image source={maxi} style={imageCategory} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={gotoListProduct}>
                        <Image source={party} style={imageCategory} />
                    </TouchableOpacity>
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