import React, { Component } from 'react';
import { SafeAreaView, Text, Image, Dimensions, StyleSheet } from 'react-native';
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
        return (
            <SafeAreaView style={containerCategory}>
                <Text style={txtCategory}>Category</Text>
                <Swiper autoplay loop>
                    <SafeAreaView>
                        <Image source={little} style={imageCategory} />
                    </SafeAreaView>
                    <SafeAreaView>
                        <Image source={maxi} style={imageCategory} />
                    </SafeAreaView>
                    <SafeAreaView>
                        <Image source={party} style={imageCategory} />
                    </SafeAreaView>
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