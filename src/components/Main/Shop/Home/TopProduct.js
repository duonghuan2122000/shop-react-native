import React, { Component, Fragment } from 'react';
import { Text, View, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';

import sp1 from '../../../../assets/images/sp1.jpg';
import Category from './Category';

const { width } = Dimensions.get('window');
const widthProduct = (width - 60) / 2,
    widthImageProduct = widthProduct,
    heightImageProduct = widthImageProduct * 452 / 361;

export default class TopProduct extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#fff', marginHorizontal: 10 }}>
                
                <FlatList
                    contentContainerStyle={{ justifyContent: 'space-around', alignItems: 'center' }}
                    data={[1, 2, 3, 4, 5, 6]}
                    numColumns={2}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={{ width: widthProduct, backgroundColor: '#fff', margin: 5, shadowColor: '#000000', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.2, elevation: 5 }}>
                            <Image source={sp1} style={{ width: widthImageProduct, height: heightImageProduct }} />
                            <Text style={{ marginLeft: 10 }}>Product Name</Text>
                            <Text style={{ marginLeft: 10, color: 'red', marginVertical: 5 }}>Product Price</Text>
                        </TouchableOpacity>
                    )}
                    ListHeaderComponent={() => (
                        <Fragment>
                            <Category />
                            <Text style={{ backgroundColor: '#fff', paddingLeft: 10, paddingTop: 10, color: '#919492', borderTopColor: '#C5C7C6', borderTopWidth: 5, }}>Top Product</Text>
                        </Fragment>
                    )}
                    ListHeaderComponentStyle={{backgroundColor: '#C5C7C6'}}
                />
            </View>
        )
    }
}
