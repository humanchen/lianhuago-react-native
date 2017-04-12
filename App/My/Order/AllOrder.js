import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import TopNavigator from  '../../Common/TopNavigator'
var ScrollableTabView = require('react-native-scrollable-tab-view');
import DefaultTabBar from '../Order/DefaultTabBar'
export default class AllOrder extends Component {
    _leftItemAction() {
        this.props.navigator.pop();
    }

    render() {
        return (
            <View style={styles.container}>
                <TopNavigator
                    title='订单列表'
                    leftItemFunc={this._leftItemAction.bind(this)}
                    leftImageSource=  {require('../../Image/arrowto_left.png')}
                />
                <ScrollableTabView
                    renderTabBar={() => <DefaultTabBar backgroundColor={'white'}
                    activeTextColor={'red'}
                    underlineStyle={{backgroundColor:'red',height:2}}


                    />}

                    >
                    <Text tabLabel='全部订单'/>
                    <Text tabLabel='待支付'/>
                    <Text tabLabel='待发货'/>
                    <Text tabLabel='待收货'/>
                    <Text tabLabel='退货订单'/>

                </ScrollableTabView>
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
