import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';

export default (props) => {
    return (
        <ScrollView>
            <SafeAreaView style={{flex: 1}}>
                <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
                    <Text>Menu</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </ScrollView>
    );
}