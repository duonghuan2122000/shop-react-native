import React, { Component } from 'react';
import { SafeAreaView, Text, FlatList, TouchableOpacity, Image, Dimensions, StyleSheet, ActivityIndicator } from 'react-native';

import backIcon from '../../../../../assets/icons/backList.png';
import global from '../../../../../api/global';

import fetchListProduct from '../../../../../api/fetchListProduct';

const { height, width } = Dimensions.get('window');
const imageProductHeight = (height / 11 * 10 - 100) / 3 - 40,
    imageProductWidth = imageProductHeight / 452 * 361,
    colorViewWidth = width - 30 - imageProductWidth - 10;

export default class ListProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            page: 1,
            products: [],
            loading: false,
            hasData: false
        }
        this.goBack = this.goBack.bind(this);
        this.gotoProductDetail = this.gotoProductDetail.bind(this);
        this.loadMoreData = this.loadMoreData.bind(this);
        this.renderFooterLoadMore = this.renderFooterLoadMore.bind(this);
    }

    UNSAFE_componentWillMount() {
        const { page, products } = this.state;
        this.setState({ hasData: true });
        fetchListProduct(page)
            .then(json => this.setState({
                page: page + 1,
                products: [...products, ...json]
            }))
            .catch(() => this.setState({ loading: false }));
    }

    goBack() {
        const { navigation } = this.props;
        navigation.goBack();
    }

    gotoProductDetail(product) {
        const { navigation } = this.props;
        navigation.push('ProductDetail', { product });
    }

    loadMoreData() {
        this.setState({ loading: true });
        const { page, products, hasData } = this.state;
        if (!hasData) return null;
        fetchListProduct(page)
            .then(json => this.setState({
                page: page + 1,
                products: [...products, ...json],
                loading: false
            }))
            .catch(() => this.setState({ loading: false, hasData: false }));
    }

    renderFooterLoadMore() {
        const { loading, hasData } = this.state;
        if (!loading || !hasData) return null;
        return <ActivityIndicator size="small" color="#00ff00" />
    }

    render() {
        const {
            container, wrapper, header, iconHeader, titleHeader,
            containerProduct, imageProduct, infoProduct, txtProductPrice,
            viewColor
        } = styles;
        const { navigation } = this.props;
        const type = navigation.getParam('type');
        const { products } = this.state;
        return (
            <SafeAreaView style={container}>
                <SafeAreaView style={wrapper}>
                    <SafeAreaView style={header}>
                        <TouchableOpacity onPress={this.goBack}>
                            <Image source={backIcon} style={iconHeader} />
                        </TouchableOpacity>
                        <Text style={titleHeader}>{type.name}</Text>
                        <SafeAreaView style={{ width: 15 }} />
                    </SafeAreaView>

                    <FlatList
                        data={products}
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
                        onEndReachedThreshold={0.1}
                        onEndReached={this.loadMoreData}
                        ListFooterComponent={this.renderFooterLoadMore}
                    />
                </SafeAreaView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#C5C7C6', padding: 10 },
    wrapper: { backgroundColor: '#fff', shadowColor: '#000', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.2, elevation: 5, flex: 1 },
    header: { justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 10 },
    iconHeader: { height: 24, width: 24 },
    titleHeader: { color: '#e04696' },
    containerProduct: { flexDirection: 'row', borderTopColor: '#C5C7C6', borderTopWidth: 1, marginHorizontal: 15, paddingTop: 15, marginBottom: 15 },
    imageProduct: { height: imageProductHeight, width: imageProductWidth },
    infoProduct: { justifyContent: 'space-between', paddingLeft: 10 },
    txtProductPrice: { color: 'red' },
    viewColor: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: colorViewWidth }
});
