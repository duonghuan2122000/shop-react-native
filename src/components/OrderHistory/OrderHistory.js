import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';

import icBack from '../../assets/icons/back_white.png';

export default class OrderHistory extends Component {
  render() {
    const {
      container, header, iconHeader, txtHeader, body, orderDetail,
      infoDetail, txtInfoDetail, txtIDStatus, txtTime, txtTotal
    } = styles;
    return (
      <SafeAreaView style={container}>
        <SafeAreaView style={header}>
          <TouchableOpacity>
            <Image source={icBack} style={iconHeader} />
          </TouchableOpacity>
          <Text style={txtHeader}>User Infomation</Text>
          <SafeAreaView />
        </SafeAreaView>
        <SafeAreaView style={body}>
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7]}
            keyExtractor={item => item.toString()}
            renderItem={({ item }) => (
              <SafeAreaView style={orderDetail}>
                <SafeAreaView style={infoDetail}>
                  <Text style={txtInfoDetail}>Order ID</Text>
                  <Text style={txtIDStatus}>123</Text>
                </SafeAreaView>
                <SafeAreaView style={infoDetail}>
                  <Text style={txtInfoDetail}>Order Time</Text>
                  <Text style={txtTime}>02/12/2000</Text>
                </SafeAreaView>
                <SafeAreaView style={infoDetail}>
                  <Text style={txtInfoDetail}>Status</Text>
                  <Text style={txtIDStatus}>Pending</Text>
                </SafeAreaView>
                <SafeAreaView style={infoDetail}>
                  <Text style={txtInfoDetail}>Total</Text>
                  <Text style={txtTotal}>{1000}$</Text>
                </SafeAreaView>
              </SafeAreaView>
            )}
          />
        </SafeAreaView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: '#50C797',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10
  },
  iconHeader: {
    height: 24,
    width: 24
  },
  txtHeader: {
    color: '#fff',
    fontWeight: '800'
  },
  body: {
    backgroundColor: '#c5c7c6',
    flex: 1,
    padding: 10
  },
  orderDetail: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    elevation: 5,
    padding: 10,
    marginBottom: 10
  },
  infoDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  txtInfoDetail: {
    color: '#a39a99',
    fontWeight: 'bold'
  },
  txtIDStatus: {
    color: '#50C797'
  },
  txtTime: {
    color: '#e04696'
  },
  txtTotal: {
    color: '#e04696',
    fontWeight: 'bold'
  }
});
