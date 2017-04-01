import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    WebView,
} from 'react-native';
import  TopNavigator from '../../Common/TopNavigator'

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

const url = "http://wx.ismartgo.cn/core/dmflows/viewarticle.aspx?uid=467159&m=1&t=1&id=91187";


export default class Poster extends Component {

    _leftItemAction() {
        this.props.navigator.pop();
    }


    render() {
        return (
            <View style={styles.container}>
                <TopNavigator
                    title='最新海报'
                    leftItemFunc={this._leftItemAction.bind(this)}
                    leftImageSource=  {require('../../Image/arrowto_left.png')}
                    rightImageSource= {require('../../Image/mine_share_to_frien.png')}
                    rightItemFunc={this._leftItemAction.bind(this)}
                />
                <Text style={{padding:3,fontSize:12}}>【莲花海报】2017/3/22-4/4（广佛）</Text>
                <View style={styles.line}></View>
                <WebView
                    style={{flex: 1,backgroundColor:'gray'}}
                    source={{uri:url,method: 'GET'}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    scalesPageToFit={false}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    line:{
        backgroundColor:'gray',
        width:ScreenWidth,
        height:0.5,
    }
});

