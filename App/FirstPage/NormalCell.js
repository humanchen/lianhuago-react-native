/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

export default class NormalCell extends Component {

  static defaultProps = {
    name: ''
  }
  render() {
    return (
      <TouchableOpacity onPress={()=>{alert('点击了')}}>

      <View style={styles.container}>
        <View  style={{flexDirection:'row',alignItems: 'center',}}>
            <Image style={styles.imageStyle}  source={require('../Image/star.png')}
          />
            <Text style={styles.textS}>{this.props.name}</Text>
        </View>
        <View style={{flexDirection:'row',alignItems: 'center',}} >
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
    alignItems: 'center',
    justifyContent:'space-between',
     backgroundColor:'white',
     height:60,
     borderBottomWidth:0.5,
     borderBottomColor:'#e8e8e8',
     padding:10,
  },
  textS:{
    fontSize:12
  },
  imageStyle: {
      width: 30,
      height: 30
  },
});
