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

import TopNavigator from '../Common/TopNavigator'
import Register from '../Register/Register'
import Toast, {DURATION} from 'react-native-easy-toast'

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;

export default class Login extends Component {
    componentWillMount() {

    }

    constructor(props) {
        super(props);
        console.log('Login props : ', this.props);

        //初始状态
        this.state = {
            basicColor:'gray',
            logindisable:true,
        };
    }


    _leftItemAction() {
        console.log('左侧按钮点击了');
    }

    _rightItemAction() {
        console.log('右侧按钮点击了');
        this.props.navigator.push({
            component: Register,    // 要跳转的版块
            passProps: {
                name: '智通三千'
            },
            type: 'Normal'
        })


    }


    onPress() {
        // Alert.alert('Button has been pressed!');
        this.refs.toast.show('hello world!',DURATION.LENGTH_LONG);
    }

    //改变手机号触发
    handleLoginPhoneUpdateChange(text) {
        console.log("loginPhone change text : ", text);

        if (text.length > 0) {
            console.log("改变状态");
            this.setState({
                basicColor:'red',
                logindisable:false,
            });

        }
        else {
            this.setState({
                basicColor:'gray',
                logindisable:true,
            });

        }
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
                            <TextInput style={styles.inputText}
                                       placeholder='请输入手机号'
                                       onChangeText={(text) => this.handleLoginPhoneUpdateChange(text)}></TextInput>
                        </View>
                        <View style={styles.line}></View>
                        <View style={styles.inputBox}>
                            <Text style={styles.label}>密码</Text>
                            <TextInput style={styles.inputText} placeholder='请输入密码'></TextInput>
                        </View>
                    </View>

                    <View style={styles.forgetPassword}>
                        <TouchableOpacity
                            onPress={() => this.onPress()}>
                            <Text style={{color:'blue',fontSize:14}}>忘记密码?</Text>
                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity
                        onPress={() => this.onPress()} style={[styles.loginButton,{backgroundColor:this.state.basicColor}] } ref="loginbtn" disabled={this.state.logindisable}>
                        <Text style={{color:'white',fontSize:14,textAlign:'center'}}>登录</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.bottom}>
                    <View style={styles.text2}>
                        <View style={styles.smallline}>

                        </View>
                        <Text style={{color:'gray',fontSize:15,textAlign:'center'}}>
                            第三方快捷登录方式
                        </Text>
                        <View style={styles.smallline}>

                        </View>
                    </View>


                    <View style={styles.bottomgroup}>
                        <View style={{position:'absolute',top:30,left: 15,justifyContent:'center'}}>
                            <Image style={styles.imageStyle}
                                   source={require('../Image/umsocial_wechat.png')}/>
                            <Text style={{color:'black',fontSize:11,textAlign:'center'}}>
                                微信登录
                            </Text>
                        </View>

                        <View style={{alignSelf:'center',marginTop:30,justifyContent:'center'}}>
                            <Image style={styles.imageStyle}
                                   source={require('../Image/umsocial_qq.png')}/>
                            <Text style={{color:'black',fontSize:11,textAlign:'center'}}>
                                QQ登录
                            </Text>
                        </View>

                    </View>

                </View>
                <Toast ref="toast"/>
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
        height: 81,
        backgroundColor: 'white',
        marginVertical:10,
    },
    inputBox: {
        flex: 1,
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',


    },
    label: {
        width: 60,
        textAlign: 'left',
        marginLeft: 10,
    },
    line: {
        backgroundColor: '#e6e6e6',
        height: 1,
        width: ScreenWidth,
    },
    inputText: {
        width: ScreenWidth - 60 - 10 - 10,
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
    forgetPassword: {
        alignSelf: 'flex-end',
        margin: 10,
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
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    imageStyle:{
        width:40,
        height:40
    },
    instructions: {

        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        alignSelf: 'flex-end'
    },
});
