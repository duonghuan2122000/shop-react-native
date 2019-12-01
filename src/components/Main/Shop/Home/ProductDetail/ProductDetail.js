import React, { Component } from 'react';
import { SafeAreaView, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

import icBack from '../../../../../assets/icons/back.png';
import icLogo from '../../../../../assets/icons/cartfull.png';

import sp1 from '../../../../../assets/images/sp1.jpg';
import global from '../../../../../api/global';

const { height } = Dimensions.get('window');
const heightImageProduct = height / 2.8,
    widthImageProduct = heightImageProduct / 452 * 361;

export default class ProductDetail extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.goBack = this.goBack.bind(this);
    }

    goBack(){
        const {navigation} = this.props;
        navigation.goBack();
    }
    
    render() {
        const {
            iconHeader, container, wrapper, header,
            imageProduct, wrapperImage, wrapperTitleProduct,
            txtProductName, txtProductPrice, txtProductDescription,
            wrapperInfo, txtInfo
        } = styles;
        const {navigation} = this.props;
        const product = navigation.getParam('product');
        return (
            <SafeAreaView style={container}>
                <SafeAreaView style={wrapper}>
                    <SafeAreaView style={header}>
                        <TouchableOpacity onPress={this.goBack}>
                            <Image source={icBack} style={iconHeader} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={icLogo} style={iconHeader} />
                        </TouchableOpacity>
                    </SafeAreaView>
                    <ScrollView>
                        <ScrollView contentContainerStyle={wrapperImage} horizontal>
                            {product.images.map((e, k) => (
                                <Image key={k} source={{uri: `${global.baseUrl}/images/product/${e}`}} style={imageProduct} />
                            ))}
                        </ScrollView>
                        <SafeAreaView style={wrapperTitleProduct}>
                            <Text style={txtProductName}>{product.name}</Text>
                            <Text style={txtProductPrice}> / {product.price}$</Text>
                        </SafeAreaView>
                        <SafeAreaView style={wrapperInfo}>
                            <Text style={txtInfo}>Material {product.material}</Text>
                            <SafeAreaView style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={txtInfo}>Color {product.color}</Text>
                                <SafeAreaView style={{backgroundColor: product.color, borderRadius: 5, height: 10, width: 10, marginLeft: 10}} />
                            </SafeAreaView>
                        </SafeAreaView>
                        <Text style={txtProductDescription}>{product.description}</Text>
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
