import React, { Component } from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet, Dimensions, FlatList } from 'react-native';

import sp1 from '../../../../assets/images/sp1.jpg';

const { height } = Dimensions.get('window');
const heightImageProduct = (height / 11 * 10 - 40) / 3 - 65,
    widthImageProduct = heightImageProduct / 452 * 361;

export default class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
        this.gotoProductDetail = this.gotoProductDetail.bind(this);
    }

    gotoProductDetail() {
        const { navigation } = this.props;
        navigation.push('ProductDetail');
    }

    render() {
        const {
            container, containerProduct, imageProduct,
            productInfo, txtProductName, txtProductPrice, control, changeQuantity,
            wrapperContent, removeProduct, txtChangeQuantity, btnCheckOut,
            txtCheckOut
        } = styles;
        return (
            <SafeAreaView style={container}>

                <FlatList
                    data={[1, 2, 3, 4, 5]}
                    keyExtractor={item => item.toString()}
                    renderItem={({ item }) => (
                        <SafeAreaView style={containerProduct}>
                            <Image source={sp1} style={imageProduct} />
                            <SafeAreaView style={wrapperContent}>
                                <SafeAreaView style={productInfo}>
                                    <Text style={txtProductName}>Product Name</Text>
                                    <Text style={txtProductPrice}>Product Price</Text>
                                    <SafeAreaView style={control}>
                                        <SafeAreaView style={changeQuantity}>
                                            <TouchableOpacity>
                                                <Text style={txtChangeQuantity}>-</Text>
                                            </TouchableOpacity>
                                            <Text>1</Text>
                                            <TouchableOpacity>
                                                <Text style={txtChangeQuantity}>+</Text>
                                            </TouchableOpacity>
                                        </SafeAreaView>
                                        <TouchableOpacity onPress={this.gotoProductDetail}>
                                            <Text>Show Details</Text>
                                        </TouchableOpacity>
                                    </SafeAreaView>
                                </SafeAreaView>
                                <TouchableOpacity>
                                    <Text style={removeProduct}>x</Text>
                                </TouchableOpacity>
                            </SafeAreaView>
                        </SafeAreaView>
                    )}
                />

                <TouchableOpacity style={btnCheckOut}>
                    <Text style={txtCheckOut}>TOTAL {1000}$ CHECKOUT NOW</Text>
                </TouchableOpacity>

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#c5c7c6',
        flex: 1,
        padding: 10
    },
    containerProduct: {
        backgroundColor: '#fff',
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        elevation: 5,
        flexDirection: 'row',
        padding: 10,
        marginBottom: 10
    },
    imageProduct: {
        height: heightImageProduct,
        width: widthImageProduct
    },
    productInfo: {
        justifyContent: 'space-between',
        flex: 1
    },
    txtProductName: {
        color: '#a39a99',
        fontSize: 18
    },
    txtProductPrice: {
        color: 'red',
        fontSize: 16
    },
    control: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    changeQuantity: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 0.8
    },
    wrapperContent: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 10,
        justifyContent: 'space-between'
    },
    removeProduct: {
        color: '#a39a99',
        fontSize: 18
    },
    txtChangeQuantity: {
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#c5c7c6',
        borderRadius: 5
    },
    btnCheckOut: {
        backgroundColor: '#50C797',
        padding: 10,
        alignItems: 'center',
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        elevation: 5
    },
    txtCheckOut: {
        color: '#fff',
        fontWeight: '800'
    }
});
