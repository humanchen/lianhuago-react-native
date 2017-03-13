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

            <View style={styles.container}>
                <TopNavigator
                    title='登录'
                    rightItemTitle='注册'
                    rightTextColor='red'
                    leftItemFunc={this._leftItemAction.bind(this)}
                    rightItemFunc={this._rightItemAction.bind(this)}/>

                <View style={styles.top}>
                    <View style={styles.inputContainer}>
                        <View style={styles.inputBox}>
                            <Text style={styles.label}>手机号</Text>
                            <TextInput style={styles.inputText} placeholder='请输入手机号'></TextInput>
                            <TouchableOpacity
                                onPress={() => this.onPress()} style={styles.yanzhengButton}>
                                <Text style={{color:'red',fontSize:10}}>获取验证码</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.line}></View>
                        <View style={styles.inputBox}>
                            <Text style={styles.label}>验证码</Text>
                            <TextInput style={styles.inputText} placeholder='请输入验证码'></TextInput>
                        </View>
                        <View style={styles.line}></View>
                        <View style={styles.inputBox}>
                            <Text style={styles.label}>设置密码</Text>
                            <TextInput style={styles.inputText} placeholder='密码不小于6位'></TextInput>
                        </View>
                        <View style={styles.line}></View>
                        <View style={styles.inputBox}>
                            <Text style={styles.label}>确认密码</Text>
                            <TextInput style={styles.inputText} placeholder='请确认密码'></TextInput>
                        </View>
                    </View>

                    <View style={styles.xieyiText}>
                        <Text style={{color:'black',fontSize:12}}>注册即视为同意</Text>
                        <TouchableOpacity
                            onPress={() => this.onPress()}>
                            <Text style={{color:'blue',fontSize:12,textDecorationLine:'underline',marginLeft:5}}>莲花GO用户注册协议</Text>
                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity
                        onPress={() => this.onPress()} style={styles.loginButton}>
                        <Text style={{color:'white',fontSize:14,textAlign:'center'}}>注册</Text>
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
        // alignItems: 'center',
        backgroundColor: '#e6e6e6',
        flexDirection: 'column'
    },

    top: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    bottom: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    inputContainer: {
        height: 81+80+2,
        backgroundColor: 'white',
        marginTop: 10,
    },
    inputBox: {
        flex: 1,
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',


    },
    label: {
        width: 70,
        textAlign: 'left',
        marginLeft: 10,
    },
    line: {
        backgroundColor: '#e6e6e6',
        height: 1,
        width: ScreenWidth,
    },
    inputText: {
        width: ScreenWidth - 60 - 10 -80,
        height: 30,
        alignSelf: 'center',
        fontSize: 15,
    },
    loginButton: {
        backgroundColor: 'gray',
        width: ScreenWidth - 20,
        height: 35,
        alignSelf: 'center',

        borderRadius: 5,
        marginTop: 10,
        justifyContent: 'center',
    },
    yanzhengButton:{

        borderRadius: 10,
        width: 60,
        height: 20,
        borderColor:'red',
        position:'absolute',
        right:10,
        top:10,

        borderWidth:1,

        justifyContent: 'center',
        alignItems: 'center',
    },

    xieyiText:{
      flexDirection:'row',
        marginLeft:10,
        marginTop:10,
        alignItems: 'center',

    },

    text2:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    smallline:{
        backgroundColor:'gray',
        alignSelf:'center',
        width:80,
        height:0.5,
        marginLeft:10,
        marginRight:10,
    },
    bottomgroup:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:30
    },

});