import React, { Component } from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet, Dimensions, FlatList } from 'react-native';

import global from '../../../../api/global';
import { updateCart } from '../../../../store/actions/cart';

import { connect } from 'react-redux';

const { height } = Dimensions.get('window');
const heightImageProduct = (height / 11 * 10 - 40) / 3 - 65,
    widthImageProduct = heightImageProduct / 452 * 361;

class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
        this.gotoProductDetail = this.gotoProductDetail.bind(this);
        this.increProduct = this.increProduct.bind(this);
        this.decreProduct = this.decreProduct.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
    }

    gotoProductDetail(product) {
        const { navigation } = this.props;
        navigation.push('ProductDetail', { product });
    }

    increProduct(idProduct) {
        const { cart } = this.props;
        const newCart = cart.map(e => {
            if (e.product.id === idProduct) {
                e.quantity++;
            }
            return e;
        });

        this.props.dispatch(updateCart(newCart));
    }

    decreProduct(idProduct) {
        const { cart } = this.props;
        const newCart = cart.map(e => {
            if (e.product.id === idProduct) {
                e.quantity--;
            }
            return e;
        }).filter(e => e.quantity >= 1);

        this.props.dispatch(updateCart(newCart));
    }

    removeProduct(idProduct) {
        const { cart } = this.props;
        const newCart = cart.filter(e => e.product.id != idProduct);
        this.props.dispatch(updateCart(newCart));
    }

    render() {
        const {
            container, containerProduct, imageProduct,
            productInfo, txtProductName, txtProductPrice, control, changeQuantity,
            wrapperContent, txtRemoveProduct, txtChangeQuantity, btnCheckOut,
            txtCheckOut
        } = styles;
        const { cart } = this.props;
        let totalPrice = cart.map(e => e.quantity * e.product.price).reduce((a, b) => a + b);
        return (
            <SafeAreaView style={container}>

                <FlatList
                    data={cart}
                    keyExtractor={item => item.product.id}
                    renderItem={({ item }) => (
                        <SafeAreaView style={containerProduct}>
                            <Image source={{ uri: `${global.baseUrl}/images/product/${item.product.images[0]}` }} style={imageProduct} />
                            <SafeAreaView style={wrapperContent}>
                                <SafeAreaView style={productInfo}>
                                    <Text style={txtProductName}>{item.product.name}</Text>
                                    <Text style={txtProductPrice}>{item.product.price}$</Text>
                                    <SafeAreaView style={control}>
                                        <SafeAreaView style={changeQuantity}>
                                            <TouchableOpacity onPress={() => this.decreProduct(item.product.id)}>
                                                <Text style={txtChangeQuantity}>-</Text>
                                            </TouchableOpacity>
                                            <Text>{item.quantity}</Text>
                                            <TouchableOpacity onPress={() => this.increProduct(item.product.id)}>
                                                <Text style={txtChangeQuantity}>+</Text>
                                            </TouchableOpacity>
                                        </SafeAreaView>
                                        <TouchableOpacity onPress={() => this.gotoProductDetail(item.product)}>
                                            <Text>Show Details</Text>
                                        </TouchableOpacity>
                                    </SafeAreaView>
                                </SafeAreaView>
                                <TouchableOpacity onPress={() => this.removeProduct(item.product.id)}>
                                    <Text style={txtRemoveProduct}>x</Text>
                                </TouchableOpacity>
                            </SafeAreaView>
                        </SafeAreaView>
                    )}
                />

                <TouchableOpacity style={btnCheckOut}>
                    <Text style={txtCheckOut}>TOTAL {totalPrice}$ CHECKOUT NOW</Text>
                </TouchableOpacity>

            </SafeAreaView>
        )
    }
}

export default connect(({ cart }) => {
    return {
        cart
    }
})(Cart);

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
    txtRemoveProduct: {
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
