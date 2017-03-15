/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView
} from 'react-native';
import SwipeCell from './SwipeCell'
import NormalCell from './NormalCell'

export default class FirstPage extends Component {
  constructor(props) {
    super(props);
  var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 !== r2});
    this.state = {
       dataSource : ds.cloneWithRows(['a','b','c','d']),
    };
  }

  renderRow(rowData, sectionID, rowID, highlightRow){
    if(rowID==0)
    return(

        <SwipeCell/>
    );
    else if(rowID==1){
      return(
        <NormalCell name='扫一扫，快支付' smallname='扫码自助购，免排队，快支付' />
      );
    }
    else if(rowID==2){
      return(
        <NormalCell name='最新海报' />
      );
    }
    else if(rowID==3){
      return(
        <NormalCell name='贴心配送'smallname='整单满128元，专业的配送团队帮您的商品物流到家'/>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Text>I'm the FirstPage component</Text> */}
        <ListView
           dataSource={this.state.dataSource}
           renderRow={this.renderRow.bind(this)}

       />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
