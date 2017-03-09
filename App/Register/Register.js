import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    Alert,
    Image,
} from 'react-native';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
import TopNavigator from '../Common/TopNavigator'
export default class Register extends Component {


    _leftItemAction(){
        console.log('左侧按钮点击了');
        this.props.navigator.pop();
    }

    _rightItemAction(){
        console.log('右侧按钮点击了');



    }


    render() {



        return (

            <View style={{flex:1}}>
                <TopNavigator
                    title='注册'
                    leftItemTitle='返回'
                    leftTextColor='blue'
                    leftItemFunc={this._leftItemAction.bind(this)}
                    rightItemFunc={this._rightItemAction.bind(this)}/>

            </View>
        );
    }
}