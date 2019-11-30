import React, { Component } from 'react';
import { SafeAreaView, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

import icBack from '../../../../../assets/icons/back.png';
import icLogo from '../../../../../assets/icons/cartfull.png';

import sp1 from '../../../../../assets/images/sp1.jpg';

const { height } = Dimensions.get('window');
const heightImageProduct = height / 2.8,
    widthImageProduct = heightImageProduct / 452 * 361;

export default class ProductDetail extends Component {
    render() {
        const {
            iconHeader, container, wrapper, header,
            imageProduct, wrapperImage, wrapperTitleProduct,
            txtProductName, txtProductPrice, txtProductDescription,
            wrapperInfo, txtInfo
        } = styles;
        return (
            <SafeAreaView style={container}>
                <SafeAreaView style={wrapper}>
                    <SafeAreaView style={header}>
                        <TouchableOpacity>
                            <Image source={icBack} style={iconHeader} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={icLogo} style={iconHeader} />
                        </TouchableOpacity>
                    </SafeAreaView>
                    <ScrollView>
                        <ScrollView contentContainerStyle={wrapperImage} horizontal>
                            <Image source={sp1} style={imageProduct} />
                            <Image source={sp1} style={imageProduct} />
                        </ScrollView>
                        <SafeAreaView style={wrapperTitleProduct}>
                            <Text style={txtProductName}>Product Name</Text>
                            <Text style={txtProductPrice}> / Product Price</Text>
                        </SafeAreaView>
                        <SafeAreaView style={wrapperInfo}>
                            <Text style={txtInfo}>Material Sink</Text>
                            <SafeAreaView style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={txtInfo}>Color Khaki</Text>
                                <SafeAreaView style={{backgroundColor: 'green', borderRadius: 5, height: 10, width: 10, marginLeft: 10}} />
                            </SafeAreaView>
                        </SafeAreaView>
                        <Text style={txtProductDescription}>Lorem Ipsum is simply dummy text of the printing and 
                            tting industry. Lorem Ipsum has been the industry's standard 
                            dummy text ever since the 1500s, when an unknown printer took 
                            alley of type and scrambled it to make a type specimen book. It 
                            has survived not only five centuries, but also the leap into 
                            electronic typesetting, remaining essentially unchanged. It 
                            was popularised in the 1960s with the release of Letraset sheets 
                            aining Lorem Ipsum passages, and more recently with desktop 
                            publishing software like Aldus PageMaker including versions 
                            of Lorem Ipsum.</Text>
                    </ScrollView>
                </SafeAreaView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    iconHeader: { height: 24, width: 24 },
    container: { flex: 1, backgroundColor: '#c5c7c6', padding: 15 },
    wrapper: { flex: 1, backgroundColor: '#fff', shadowColor: '#000', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.2, elevation: 5, padding: 10 },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10
    },
    imageProduct: {
        height: heightImageProduct,
        width: widthImageProduct,
        marginHorizontal: 5
    },
    wrapperImage: {
        flexDirection: 'row'
    },
    wrapperTitleProduct: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    },
    txtProductName: {
        fontWeight: '800',
        fontSize: 18
    },
    txtProductPrice: {
        fontSize: 18,
        color: '#a39a99'
    },
    txtProductDescription: {
        color: '#a39a99',
        marginTop: 20
    },
    wrapperInfo: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10
    },
    txtInfo: {
        color: '#e04696'
    }
});
