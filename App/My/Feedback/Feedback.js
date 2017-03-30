import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

import TopNavigator from  '../../Common/TopNavigator'

export default class Feedback extends Component {

    constructor(props) {
        super(props);
        // alert('Login props : ', this.props);

        //初始状态
        this.state = {
            basicColor: 'gray',
            logindisable: true,
        };
    }

    _leftItemAction() {
        this.props.navigator.pop();
    }

    handleLoginPhoneUpdateChange(text) {
        // console.log("loginPhone change text : ", text);


        if (text.length > 0) {
            console.log("改变状态");
            this.setState({
                basicColor: 'red',
                logindisable: false,
            });

        }
        else {
            this.setState({
                basicColor: 'gray',
                logindisable: true,
            });

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TopNavigator
                    title='优惠券'
                    leftItemFunc={this._leftItemAction.bind(this)}
                    leftImageSource=  {require('../../Image/arrowto_left.png')}

                />
                <View style={styles.bgView}>
                    <TextInput style={styles.inputText} placeholder='亲，你使用中遇到什么问题，或有什么功能建议吗?欢迎您提供给我们，谢谢' ref="passwordText"
                               multiline={true}    onChangeText={(text) => this.handleLoginPhoneUpdateChange(text)}  ></TextInput>
                </View>

                <TouchableOpacity
                    onPress={() => this.submit()}
                    style={[styles.loginButton,{backgroundColor:this.state.basicColor}] } ref="loginbtn"
                    disabled={this.state.logindisable}>
                    <Text style={{color:'white',fontSize:14,textAlign:'center'}}>提交</Text>
                </TouchableOpacity>



            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#e6e6e6',
        flexDirection: 'column',
    },
    bgView: {
      backgroundColor :'white',
        width:ScreenWidth,
        height:150,
    },
    inputText: {
        // width: ScreenWidth - 60 - 10 - 10,
        // height: 30,
        // alignSelf: 'center',
         fontSize: 14,
        flex:1,
        padding:15,
    },
    loginButton: {
        backgroundColor: 'gray',
        width: ScreenWidth - 20,
        height: 35,
        alignSelf: 'center',

        borderRadius: 5,
        marginTop: 30,
        justifyContent: 'center',
    },

    cellView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        height: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#e8e8e8',
        padding: 8
    },
    textS: {
        fontSize: 12,
        marginLeft:8,
    },
    imageStyle: {
        width: 15,
        height: 15
    },
    topTitle: {
        color: 'red',
        fontSize: 15,
        width: 100,
        marginBottom: 8
    },
    bottomTitle: {
        color: 'blue'
    },
    cellbreak: {
        height: 10
    }
});
