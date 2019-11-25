import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default (props) => {
    const {navigation} = props;
    return (
        <View>
            <Text>Shop</Text>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Text>Open Menu</Text>
            </TouchableOpacity>
        </View>
    );
}