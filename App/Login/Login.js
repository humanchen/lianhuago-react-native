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
    AsyncStorage
} from 'react-native';

import TopNavigator from '../Common/TopNavigator'
import Register from '../Register/Register'
import Toast, {DURATION} from 'react-native-easy-toast'
// import userDefaults from 'react-native-user-defaults'

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
var phone='';
var password='';
export default class Login extends Component {
    componentWillMount() {

    }

    constructor(props) {
        super(props);
        console.log('Login props : ', this.props);

        //初始状态
        this.state = {
            basicColor: 'gray',
            logindisable: true,
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


    submit() {

        if(phone.length==0 || password.length==0){
            this.refs.toast.show('请输入手机号和密码', DURATION.LENGTH_LONG);
            return;
        }
        this.refs.toast.show('请求数据', DURATION.LENGTH_LONG);

        // fetch(REQUEST_URL)
        //     .then((response) => response.json())
        //     .then((responseData) => {
        //         // alert(responseData.movies)
        //         // this.refs.toast.show(responseData, DURATION.LENGTH_LONG);
        //         var movie = responseData.movies[0];
        //         this.refs.toast.show(movie.title, DURATION.LENGTH_LONG);
        //     })
        // ;

        let formData = new FormData();
        formData.append("device_id","C4BBE917-20FF-44E6-844A-0628EC6C096B");
        formData.append("mobile",phone);
        formData.append("password",password);
        // formData.append("access_token","d7a8d81d-9150-4e95-b2d5-756a5f4e76be");
        // formData.append("newest_message_time","0");
        // formData.append("outlet_no","096");
        fetch('https://lotusgo.cplotus-gz.com/api-1.8/user/login' , {
            method: 'POST',
            headers: { "Content-Type": "application/json;charset=UTF-8"},
            body: formData
        }).then((response) => {
            if (response.ok) {
                return(response.json());
                // var  accessToken= response.json().message;
                // userDefaults.set(accessToken, "accessToken")
                //     .then(data => this.refs.toast.show(data, DURATION.LENGTH_LONG));
            }
        }).then((json) => {
            // alert(json.message);
            // alert(JSON.stringify(json));
            var  accessToken= json.data.access_token;
            AsyncStorage.setItem('accessToken',accessToken).then(
                ()=>{   //成功的操作

                    this.refs.toast.show(accessToken, DURATION.LENGTH_LONG);
                },
            );

        }).catch((error) => {
            console.error(error);
        });

    }

    //改变手机号触发
    handleLoginPhoneUpdateChange(text) {
        // console.log("loginPhone change text : ", text);

        this.refs.toast.show(text, DURATION.LENGTH_LONG);
        phone=text;
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
                                       onChangeText={(text) => this.handleLoginPhoneUpdateChange(text)} ref="phoneText" maxLength={11}></TextInput>
                        </View>
                        <View style={styles.line}></View>
                        <View style={styles.inputBox}>
                            <Text style={styles.label}>密码</Text>
                            <TextInput style={styles.inputText} placeholder='请输入密码' ref="passwordText" password="true"
                                       onChangeText={(text) => password=text} ></TextInput>
                        </View>
                    </View>

                    <View style={styles.forgetPassword}>
                        <TouchableOpacity
                            onPress={() => this.submit()}>
                            <Text style={{color:'blue',fontSize:14}}>忘记密码?</Text>
                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity
                        onPress={() => this.submit()}
                        style={[styles.loginButton,{backgroundColor:this.state.basicColor}] } ref="loginbtn"
                        disabled={this.state.logindisable}>
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
        marginVertical: 10,
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
    text2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    smallline: {
        backgroundColor: 'gray',
        alignSelf: 'center',
        width: 80,
        height: 0.5,
        marginLeft: 10,
        marginRight: 10,
    },
    bottomgroup: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    imageStyle: {
        width: 40,
        height: 40
    },
    instructions: {

        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        alignSelf: 'flex-end'
    },
});
