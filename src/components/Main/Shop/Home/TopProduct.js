import React, { Component, Fragment } from 'react';
import { Text, SafeAreaView, FlatList, TouchableOpacity, Image, Dimensions, StyleSheet } from 'react-native';

import sp1 from '../../../../assets/images/sp1.jpg';
import Category from './Category';

import { connect } from 'react-redux';
import global from '../../../../api/global';

const { width } = Dimensions.get('window');
const widthProduct = (width - 60) / 2,
    widthImageProduct = widthProduct,
    heightImageProduct = widthImageProduct * 452 / 361;

class TopProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
        this.gotoListProduct = this.gotoListProduct.bind(this);
        this.gotoProductDetail = this.gotoProductDetail.bind(this);
    }

    gotoListProduct(type) {
        const { navigation } = this.props;
        navigation.push('ListProduct', { type });
    }

    gotoProductDetail(product) {
        const { navigation } = this.props;
        navigation.push('ProductDetail', { product });
    }

    render() {
        const {
            container, containerList, productStyle,
            imageProduct, txtProductName, txtProductPrice
        } = styles;
        const { topProducts, types } = this.props;
        return (
            <SafeAreaView style={container}>

                <FlatList
                    contentContainerStyle={containerList}
                    data={topProducts}
                    numColumns={2}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={productStyle} onPress={() => this.gotoProductDetail(item)}>
                            <Image source={{ uri: `${global.baseUrl}/images/product/${item.images[0]}` }} style={imageProduct} />
                            <Text style={txtProductName}>{item.name}</Text>
                            <Text style={txtProductPrice}>{item.price}$</Text>
                        </TouchableOpacity>
                    )}
                    ListHeaderComponent={() => (
                        <Fragment>
                            <Category types={types} gotoListProduct={this.gotoListProduct} />
                            <Text style={{ backgroundColor: '#fff', paddingLeft: 10, paddingTop: 10, color: '#919492', borderTopColor: '#C5C7C6', borderTopWidth: 5, }}>Top Product</Text>
                        </Fragment>
                    )}
                    ListHeaderComponentStyle={{ backgroundColor: '#C5C7C6' }}
                />
            </SafeAreaView>
        )
    }
}

export default connect(({ initData }) => ({
    types: initData.types,
    topProducts: initData.topProducts
}))(TopProduct);

const styles = StyleSheet.create({
    container: { backgroundColor: '#fff', marginHorizontal: 10 },
    containerList: { justifyContent: 'space-around', alignItems: 'center', paddingBottom: 5 },
    productStyle: { width: widthProduct, backgroundColor: '#fff', margin: 5, shadowColor: '#000000', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.2, elevation: 5 },
    imageProduct: { width: widthImageProduct, height: heightImageProduct },
    txtProductName: { marginLeft: 10 },
    txtProductPrice: { marginLeft: 10, color: 'red', marginVertical: 5 }
});
