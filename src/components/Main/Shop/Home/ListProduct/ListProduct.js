import React, { Component } from 'react';
import { SafeAreaView, Text, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';

import backIcon from '../../../../../assets/icons/backList.png';
import sp1 from '../../../../../assets/images/sp1.jpg';

const { height, width } = Dimensions.get('window');
const imageProductHeight = (height / 11 * 10 - 100) / 3 - 40,
    imageProductWidth = imageProductHeight / 452 * 361,
    colorViewWidth = width - 30 - imageProductWidth - 10;

export default class ListProduct extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#C5C7C6', padding: 10 }}>
                <SafeAreaView style={{backgroundColor: '#fff', shadowColor: '#000', shadowOffset: {width: 0, height: 3}, shadowOpacity: 0.2, elevation: 5, flex: 1}}>
                    <SafeAreaView style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 10 }}>
                        <TouchableOpacity>
                            <Image source={backIcon} style={{ height: 24, width: 24 }} />
                        </TouchableOpacity>
                        <Text style={{ color: '#e04696' }}>Party Dress</Text>
                        <SafeAreaView style={{width: 15}} />
                    </SafeAreaView>

                    <FlatList
                        data={[1, 2, 3, 4]}
                        keyExtractor={item => item.toString()}
                        numColumns={1}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={{ flexDirection: 'row', borderTopColor: '#C5C7C6', borderTopWidth: 1, marginHorizontal: 15, paddingTop: 15, marginBottom: 15 }}>
                                <SafeAreaView>
                                    <Image source={sp1} style={{ height: imageProductHeight, width: imageProductWidth }} />
                                </SafeAreaView>
                                <SafeAreaView style={{ justifyContent: 'space-between', paddingLeft: 10 }}>
                                    <Text>Product Name</Text>
                                    <Text style={{ color: 'red' }}>Product Price</Text>
                                    <Text>Material Sink</Text>
                                    <SafeAreaView style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: colorViewWidth }}>
                                        <SafeAreaView>
                                            <Text>Color RoyalBlue</Text>
                                        </SafeAreaView>
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
