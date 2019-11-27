import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, ScrollView } from 'react-native';

import Header from './Header';
import Category from './Category';

import sp1 from '../../../assets/images/sp1.jpg';

const {width} = Dimensions.get('window');
const widthProduct = (width - 60) / 2,
      widthImageProduct = widthProduct,
      heightImageProduct = widthImageProduct * 452 / 361;

export default class Shop extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
        this.openDrawer = this.openDrawer.bind(this);
    }

    openDrawer() {
        const { navigation } = this.props;
        navigation.openDrawer();
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#C5C7C6' }}>
                <Header openMenu={this.openDrawer} />
                <View style={{ flex: 10, marginTop: 10 }}>
                    <ScrollView contentContainerStyle={{flex: 1, backgroundColor: '#fff', marginHorizontal: 10, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                        <View style={{width: widthProduct, backgroundColor: '#fff', margin: 5, shadowColor: '#000000', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.2, elevation: 5}}>
                            <Image source={sp1} style={{width: widthImageProduct, height: heightImageProduct}} />
                            <Text style={{marginLeft: 10}}>Product Name</Text>
                            <Text style={{marginLeft: 10, color: 'red'}}>Product Price</Text>
                        </View>

                        <View style={{width: widthProduct, backgroundColor: '#fff', margin: 5, shadowColor: '#000000', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.2, elevation: 5}}>
                            <Image source={sp1} style={{width: widthImageProduct, height: heightImageProduct}} />
                            <Text style={{marginLeft: 10}}>Product Name</Text>
                            <Text style={{marginLeft: 10, color: 'red'}}>Product Price</Text>
                        </View>

                        <View style={{width: widthProduct, backgroundColor: '#fff', margin: 5, shadowColor: '#000000', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.2, elevation: 5}}>
                            <Image source={sp1} style={{width: widthImageProduct, height: heightImageProduct}} />
                            <Text style={{marginLeft: 10}}>Product Name</Text>
                            <Text style={{marginLeft: 10, color: 'red'}}>Product Price</Text>
                        </View>

                        <View style={{width: widthProduct, backgroundColor: '#fff', margin: 5, shadowColor: '#000000', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.2, elevation: 5}}>
                            <Image source={sp1} style={{width: widthImageProduct, height: heightImageProduct}} />
                            <Text style={{marginLeft: 10}}>Product Name</Text>
                            <Text style={{marginLeft: 10, color: 'red'}}>Product Price</Text>
                        </View>

                        <View style={{width: widthProduct, backgroundColor: '#fff', margin: 5, shadowColor: '#000000', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.2, elevation: 5}}>
                            <Image source={sp1} style={{width: widthImageProduct, height: heightImageProduct}} />
                            <Text style={{marginLeft: 10}}>Product Name</Text>
                            <Text style={{marginLeft: 10, color: 'red'}}>Product Price</Text>
                        </View>
                        
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});