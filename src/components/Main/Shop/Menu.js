import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

export default class Menu extends Component {
    render() {
        return (
            <ScrollView>
                <SafeAreaView style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.closeDrawer()}>
                        <Text>Menu</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </ScrollView>
        );
    }
} 