/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
  TouchableOpacity
} from 'react-native';
import NameCell from './NameCell'
import MemberCardCell from './MemberCardCell'
const DI = require('Dimensions');
const WINDOW = DI.get('window');

export default class My extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged:(s1,s2) => s1!=s2});
    this.state = {
        dataSource: ds.cloneWithRowsAndSections({a:['a', 'b','c']}),  // cloneWithRows 放置数组
        // loaded: false,
    };


  }

  // 返回具体的cell
  _renderRow(rowData,sectionID,rowID) {
      if(rowID==0){
        return(
          <NameCell/>
        );

      }else  if(rowID==1){

        return(
          <MemberCardCell/>
        );


      }else
      {
      return(
          <TouchableOpacity activeOpacity={0.5} onPress={ () => this.pushToDetail(rowData) }>
              <View style={styles.cellView}>
                  <View style={styles.rightView}>
                      <Text style={styles.topTitle}>{sectionID}</Text>
                      <Text style={styles.bottomTitle}>{rowID}</Text>
                      <Text >{rowData}</Text>
                  </View>
              </View>
          </TouchableOpacity>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Text >I'm the My component</Text> */}
        <ListView showsVerticalScrollIndicator={false}
            dataSource={this.state.dataSource}  // 数据源
            renderRow={this._renderRow.bind(this)}
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
  cellView: {
      padding: 10,
      backgroundColor:'white',
      borderBottomWidth:0.5,
      borderBottomColor:'#e8e8e8',
      flexDirection:'row',
      width:WINDOW.width
  },
  topTitle: {
      color:'red',
      fontSize:15,
      width:100,
      marginBottom:8
  },
  bottomTitle: {
      color:'blue',
  }
});
