import React, { Component } from 'react';
import { SafeAreaView, Text, FlatList, TouchableOpacity, Image, Dimensions, StyleSheet } from 'react-native';

import fetchSearch from '../../../../api/fetchSearch';
import global from '../../../../api/global';

const { height, width } = Dimensions.get('window');
const imageProductHeight = (height / 11 * 10 - 100) / 3 - 40,
    imageProductWidth = imageProductHeight / 452 * 361,
    colorViewWidth = width - 30 - imageProductWidth - 10;

export default class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            listSearch: []
        }
        this.gotoProductDetail = this.gotoProductDetail.bind(this);
    }

    componentDidMount() {
        const search = this.props.navigation.dangerouslyGetParent().getParam('search');
        console.log(search);
        fetchSearch(search)
            .then(json => this.setState({ listSearch: json }))
    }

    gotoProductDetail(product) {
        const { navigation } = this.props;
        navigation.push('ProductDetail', { product });
    }

    render() {
        const {
            container, wrapper,
            containerProduct, imageProduct, infoProduct, txtProductPrice,
            viewColor
        } = styles;
        const { listSearch } = this.state;
        return (
            <SafeAreaView style={container}>
                <SafeAreaView style={wrapper}>

                    <FlatList
                        data={listSearch}
                        keyExtractor={item => item.id}
                        numColumns={1}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={containerProduct} onPress={() => this.gotoProductDetail(item)}>
                                <SafeAreaView>
                                    <Image source={{ uri: `${global.baseUrl}/images/product/${item.images[0]}` }} style={imageProduct} />
                                </SafeAreaView>
                                <SafeAreaView style={infoProduct}>
                                    <Text>{item.name}</Text>
                                    <Text style={txtProductPrice}>{item.price}$</Text>
                                    <Text>Material {item.material}</Text>
                                    <SafeAreaView style={viewColor}>
                                        <Text>Color {item.color}</Text>
                                        <SafeAreaView style={{ backgroundColor: item.color, height: 10, width: 10, borderRadius: 5 }} />
                                        <SafeAreaView />

                                    </SafeAreaView>
                                </SafeAreaView>
                            </TouchableOpacity>
                        )}
                        ListEmptyComponent={(
                            <Text>Enter keyword to search.</Text>
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
