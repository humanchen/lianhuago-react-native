import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import TopNavigator from '../Common/TopNavigator'

export default class Login extends Component {
    componentWillMount() {

    }
    _leftItemAction() {
        console.log('左侧按钮点击了');
    }

    _rightItemAction() {
        console.log('右侧按钮点击了');
    }

    render() {
        return (

            <View style={styles.container}>
                <TopNavigator
                    title='登录'

                    rightItemTitle='注册'
                    rightTextColor='#3393F2'
                    leftItemFunc={this._leftItemAction.bind(this)}
                    rightItemFunc={this._rightItemAction.bind(this)}/>
                <View style={styles.top}>
             <Text>sdfsdf</Text>
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
        backgroundColor: '#F5FCFF',
        flexDirection: 'column'
    },

    top: {
        flex: 1,
        backgroundColor:'red',
        flexDirection:'column',
        justifyContent:'flex-start'
    },
    bottom: {
        flex: 1,backgroundColor:'blue',flexDirection:'column',justifyContent:'flex-end'
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