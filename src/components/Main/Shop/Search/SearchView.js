import React, { Component } from 'react';
import { SafeAreaView, Text, FlatList, TouchableOpacity, Image, Dimensions, StyleSheet } from 'react-native';

import backIcon from '../../../../assets/icons/backList.png';
import sp1 from '../../../../assets/images/sp1.jpg';

const { height, width } = Dimensions.get('window');
const imageProductHeight = (height / 11 * 10 - 100) / 3 - 40,
    imageProductWidth = imageProductHeight / 452 * 361,
    colorViewWidth = width - 30 - imageProductWidth - 10;

export default class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
        this.gotoProductDetail = this.gotoProductDetail.bind(this);
    }

    gotoProductDetail(){
        const {navigation} = this.props;
        navigation.push('ProductDetail');
    }

    render() {
        const {
            container, wrapper,
            containerProduct, imageProduct, infoProduct, txtProductPrice,
            viewColor
        } = styles;
        return (
            <SafeAreaView style={container}>
                <SafeAreaView style={wrapper}>

                    <FlatList
                        data={[1, 2, 3, 4]}
                        keyExtractor={item => item.toString()}
                        numColumns={1}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={containerProduct} onPress={this.gotoProductDetail}>
                                <SafeAreaView>
                                    <Image source={sp1} style={imageProduct} />
                                </SafeAreaView>
                                <SafeAreaView style={infoProduct}>
                                    <Text>Product Name</Text>
                                    <Text style={txtProductPrice}>Product Price</Text>
                                    <Text>Material Sink</Text>
                                    <SafeAreaView style={viewColor}>
                                        <Text>Color RoyalBlue</Text>
                                        <SafeAreaView style={{ backgroundColor: 'blue', height: 10, width: 10, borderRadius: 5 }} />
                                        <SafeAreaView />

                                    </SafeAreaView>
                                </SafeAreaView>
                            </TouchableOpacity>
                        )}
                    />
                </SafeAreaView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#C5C7C6', padding: 10 },
    wrapper: { backgroundColor: '#fff', shadowColor: '#000', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.2, elevation: 5, flex: 1 },
    containerProduct: { flexDirection: 'row', borderTopColor: '#C5C7C6', borderTopWidth: 1, marginHorizontal: 15, paddingTop: 15, marginBottom: 15 },
    imageProduct: { height: imageProductHeight, width: imageProductWidth },
    infoProduct: { justifyContent: 'space-between', paddingLeft: 10 },
    txtProductPrice: { color: 'red' },
    viewColor: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: colorViewWidth }
});
