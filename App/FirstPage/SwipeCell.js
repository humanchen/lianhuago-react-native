import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Swiper from 'react-native-swiper'
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

export default class SwipeCell extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper}
       height={100}
       loop={true}
       autoplay={true}
       activeDot={<View style={{backgroundColor: 'white', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
        >
       <View style={styles.slide1}>
         <Text style={styles.text}>Hello Swiper</Text>
       </View>
       <View style={styles.slide2}>
         <Text style={styles.text}>Beautiful</Text>
       </View>
       <View style={styles.slide3}>
         <Text style={styles.text}>And simple</Text>
       </View>
     </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
    wrapper: {
 },
 slide1: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#9DD6EB',
 },
 slide2: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#97CAE5',
 },
 slide3: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#92BBD9',
 },
 text: {
   color: '#fff',
   fontSize: 30,
   fontWeight: 'bold',
 }

});
