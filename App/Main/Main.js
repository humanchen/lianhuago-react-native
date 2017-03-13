import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator'
import FirstPage from '../FirstPage/FirstPage'
import TopNavigator from '../Common/TopNavigator'
export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTab: '首页',
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TopNavigator
                    title='登录'
                    rightItemTitle='注册'
                    rightTextColor='red'
                    />
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '首页'}
                        title="首页"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        onPress={() => this.setState({ selectedTab: '首页' })}>
                        <FirstPage/>
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === '扫码购'}
                        title="扫码购"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        onPress={() => this.setState({ selectedTab: '扫码购' })}>
                        <FirstPage/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '购物车'}
                        title="购物车"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        onPress={() => this.setState({ selectedTab: '购物车' })}>
                        <FirstPage/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '我的'}
                        title="我的"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        onPress={() => this.setState({ selectedTab: '我的' })}>
                        <FirstPage/>
                    </TabNavigator.Item>

                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6e6e6',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    tabText: {
        color: "#000000",
        fontSize: 13
    },
    selectedTabText: {
        color: "blue",
        fontSize: 13
    },

});
