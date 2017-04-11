import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,

} from 'react-native';
import TopNavigator from  '../../Common/TopNavigator'
import Panel from './Panel'

export default class QA extends Component {
    _leftItemAction() {
        this.props.navigator.pop();
    }

    render() {
        return (
            <View style={styles.container}>
                <TopNavigator
                    title='常见问题'
                    leftItemFunc={this._leftItemAction.bind(this)}
                    leftImageSource=  {require('../../Image/arrowto_left.png')}
                />
                <ScrollView style={{paddingTop:10}}>
                    <Panel title='如何使用莲花GO手机客户端App购物'>
                        <Text>用您的手机号码在App注册登录后，在用您的手机号码在App注册登录后，在用您的手机号码在App注册登录后，在用您的手机号码在App注册登录后，在用您的手机号码在App注册登</Text>
                    </Panel>
                    <Panel title='如何查询订单？'>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                    </Panel>
                    <Panel title='如何修改订单？'>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</Text>
                    </Panel>

                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6e6e6',

        flexDirection: 'column'
    },
});
