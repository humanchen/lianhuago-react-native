/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

export default class Order2Cell extends Component {
  render() {
    return (
      <TouchableOpacity onPress={()=>{alert('点击了')}}>

      <View style={styles.container}>

            <Text style={styles.textS}>待支付</Text>
            <Text style={styles.textS}>待发货</Text>
            <Text style={styles.textS}>待收货</Text>
            <Text style={styles.textS}>退货订单</Text>




      </View>

      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems: 'center',
     backgroundColor:'white',
     height:30,
     borderBottomWidth:0.5,
     borderBottomColor:'#e8e8e8',
    //  padding:5,
  },
  textS:{
    fontSize:12
  },
  imageStyle: {
      width: 15,
      height: 15
  },
});
