/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

export default class Order1Cell extends Component {
  render() {
    return (
      <TouchableOpacity onPress={()=>{alert('点击了')}}>

      <View style={styles.container}>
        <View>
            <Text style={styles.textS}>我的订单</Text>
        </View>
        <View style={{flexDirection:'row',alignItems: 'center',}} >
            <Text style={styles.textS}>查看全部订单</Text>
            <Image style={styles.imageStyle}  source={require('../Image/arrowright.png')}
          />
        </View>


      </View>

      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    justifyContent:'space-between',
     backgroundColor:'white',
     height:30,
     borderBottomWidth:0.5,
     borderBottomColor:'#e8e8e8',
     padding:10,
  },
  textS:{
    fontSize:12
  },
  imageStyle: {
      width: 15,
      height: 15
  },
});
