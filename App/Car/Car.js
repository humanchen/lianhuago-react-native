/* @flow */

import React, {Component} from 'react';
import {View, Text, StyleSheet,TouchableOpacity,Image} from 'react-native';

export default class Car extends Component {
    render() {
        return (
            <View style={styles.container}>
              <Image style={styles.imageStyle}
                     source={require('../Image/cartbig.png')}/>
                <Text style={styles.maintext}>购物车空空的，快去逛逛吧~</Text>
                <View style={styles.redButton}>
                  <TouchableOpacity activeOpacity={0.6} >
                  <Text style={styles.goBuyText}>
                    去购物
                  </Text>
                </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyle:{
      width:125/2,
      height:108/2,
      marginTop:30,
    },
    maintext: {
        fontSize: 11,
        color: 'gray',
        marginTop: 10,
        textAlign:'center',
    },
    redButton: {
        backgroundColor: 'red',
        marginTop: 40,
        borderRadius: 5,
        width: 170,
        height: 40,
       justifyContent: 'center',
        alignItems: 'center'
    },
    goBuyText:{
       color:'white',
    },
});
