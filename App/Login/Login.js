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
                    title='这个是标题'

                    rightItemTitle='按钮'
                    rightTextColor='#3393F2'
                    leftItemFunc={this._leftItemAction.bind(this)}
                    rightItemFunc={this._rightItemAction.bind(this)}/>
                <View style={{flex: 1}}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>
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
    },
});