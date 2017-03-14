/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

export default class NameCell extends Component {
  render() {
    return (
      <TouchableOpacity onPress={()=>{alert('点击了')}}>

      <View style={styles.container}>
        <Text style={styles.textS}>伍旺鑫</Text>
        <Text style={styles.textS}>138****5030</Text>
      </View>

      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
     backgroundColor:'white',
     height:60,
     borderBottomWidth:0.5,
     borderBottomColor:'#e8e8e8',
     padding:10,
  },
  textS:{
    fontWeight:'bold',
  },
});
