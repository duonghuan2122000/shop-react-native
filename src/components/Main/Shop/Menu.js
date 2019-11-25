import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';

export default () => {
    return (
        <ScrollView>
            <SafeAreaView style={{flex: 1}}>
                <TouchableOpacity>
                    <Text>Menu</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </ScrollView>
    );
}