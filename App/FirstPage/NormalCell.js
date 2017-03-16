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
    name: '',
    smallname:'',
    imgUrl:'',
  }

  _showSmall(){
    if(this.props.smallname!='')
    return(
        <Text style={styles.textM} >{this.props.smallname}</Text>
    )


  }

  render() {
    return (
      <TouchableOpacity onPress={()=>{alert('点击了')}}>

      <View style={styles.container}>
        <View  style={{flexDirection:'row',alignItems: 'center',}}>
            <Image style={styles.imageStyle} source={{
                url: this.props.imgUrl
            }}
          />
             <View style={styles.view1}>
            <Text style={styles.textS}>{this.props.name}</Text>
           {this._showSmall()}


            </View>
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
    fontSize:14,
    // marginLeft:10,
  },
  textM:{
    fontSize:12,
    color:'gray',
    paddingTop:3,
  },
  imageStyle: {
      width: 30,
      height: 30
  },
  view1:{
    marginLeft:10,
    flexDirection:'column',
  }
});
