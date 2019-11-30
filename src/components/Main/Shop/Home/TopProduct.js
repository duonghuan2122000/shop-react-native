import React, { Component, Fragment } from 'react';
import { Text, SafeAreaView, FlatList, TouchableOpacity, Image, Dimensions, StyleSheet } from 'react-native';

import sp1 from '../../../../assets/images/sp1.jpg';
import Category from './Category';

const { width } = Dimensions.get('window');
const widthProduct = (width - 60) / 2,
    widthImageProduct = widthProduct,
    heightImageProduct = widthImageProduct * 452 / 361;

export default class TopProduct extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.gotoListProduct = this.gotoListProduct.bind(this);
        this.gotoProductDetail = this.gotoProductDetail.bind(this);
    }

    gotoListProduct(){
        const {navigation} = this.props;
        navigation.push('ListProduct');
    }
    
    gotoProductDetail(){
        const {navigation} = this.props;
        navigation.push('ProductDetail');
    }

    render() {
        const {
            container, containerList, productStyle, 
            imageProduct, txtProductName, txtProductPrice
        } = styles;
        return (
            <SafeAreaView style={container}>
                
                <FlatList
                    contentContainerStyle={containerList}
                    data={[1, 2, 3, 4, 5, 6]}
                    numColumns={2}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={productStyle} onPress={this.gotoProductDetail}>
                            <Image source={sp1} style={imageProduct} />
                            <Text style={txtProductName}>Product Name</Text>
                            <Text style={txtProductPrice}>Product Price</Text>
                        </TouchableOpacity>
                    )}
                    ListHeaderComponent={() => (
                        <Fragment>
                            <Category gotoListProduct={this.gotoListProduct} />
                            <Text style={{ backgroundColor: '#fff', paddingLeft: 10, paddingTop: 10, color: '#919492', borderTopColor: '#C5C7C6', borderTopWidth: 5, }}>Top Product</Text>
                        </Fragment>
                    )}
                    ListHeaderComponentStyle={{backgroundColor: '#C5C7C6'}}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: { backgroundColor: '#fff', marginHorizontal: 10 },
    containerList: { justifyContent: 'space-around', alignItems: 'center' },
    productStyle: { width: widthProduct, backgroundColor: '#fff', margin: 5, shadowColor: '#000000', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.2, elevation: 5 },
    imageProduct: { width: widthImageProduct, height: heightImageProduct },
    txtProductName: { marginLeft: 10 },
    txtProductPrice: { marginLeft: 10, color: 'red', marginVertical: 5 }
});
