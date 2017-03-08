import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity
} from 'react-native';

import TopNavigator from '../Common/TopNavigator'


var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;

export default class Login extends Component {
    componentWillMount() {

    }

    _leftItemAction() {
        console.log('左侧按钮点击了');
    }

    _rightItemAction() {
        console.log('右侧按钮点击了');
    }


    onPress() {
        Alert.alert('Button has been pressed!');
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
                        </View>
                        <View style={styles.line}></View>
                        <View style={styles.inputBox}>
                            <Text style={styles.label}>密码</Text>
                            <TextInput style={styles.inputText} placeholder='请输入密码'></TextInput>
                        </View>
                    </View>
                    <View style={styles.forgetPassword}>
                        <TouchableOpacity

                            onPress={() => this.jumpToMain()}>
                          <Text style={{color:'blue',fontSize:14}}>忘记密码?</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={styles.bottom}>
                    <Text>sdfsdf</Text>
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
        height: 81,
        backgroundColor: 'white',
        marginTop: 20,
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
    inputText:{
        width:ScreenWidth-60-10-10,
        height:30,
        alignSelf:'center',
        fontSize: 15,
    },
    forgetPassword:{
        alignSelf:'flex-end',
        margin: 10,

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {

        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        alignSelf: 'flex-end'
    },
});