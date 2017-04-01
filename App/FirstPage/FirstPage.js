/* @flow */

import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView
} from 'react-native';
import SwipeCell from './SwipeCell'
import NormalCell from './NormalCell'
import Poster from  './Poster/Poster'
import Send from  './Send/Send'

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export default class FirstPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSource: ds.cloneWithRows(['a', 'b', 'c', 'd']),
            icon1: '0',
            icon2: '0',
            icon3: '0',
        };
    }


    componentDidMount() {
        let formData = new FormData();
        formData.append("device_id", "C4BBE917-20FF-44E6-844A-0628EC6C096B");
        formData.append("access_token", "a99d5c1c-c893-49e8-bb8b-de2dd4016466");
        formData.append("outlet_no", "096");
        fetch('https://lotusgo.cplotus-gz.com/api-1.8/home/advertise', {
            method: 'POST',

            body: formData
        }).then((response) => {
            if (response.ok) {
                return (response.json());

            }
        }).then((json) => {
            // alert(json.message);
            // alert(JSON.stringify(json));
            let data1 = json.data;
            // alert(data1)
            //  alert(data1.ad_list[0].icon_url)
            this.setState({
                dataSource: ds.cloneWithRows(['d', 'c', 'b', 'a']),
                icon1: data1.ad_list[0].icon_url,
                icon2: data1.ad_list[1].icon_url,
                icon3: data1.ad_list[2].icon_url
            });
            // this.refs.toast.show(this.state.dataList[0].select_icon, DURATION.LENGTH_LONG);
            // this.refs.img1.setNativeProps({
            //    source:require('../Image/star123.png')
            // });

        }).catch((error) => {
            console.error(error);
        });
    }

    gotoPoster(){
        this.props.navigator.push({
            component: Poster,    // 要跳转的版块
            passProps: {
                name: '智通三千'
            },
            type: 'Normal'
        })
    }

    gotoSend(){
        this.props.navigator.push({
            component: Send,    // 要跳转的版块
            passProps: {
                name: '智通三千'
            },
            type: 'Normal'
        })
    }

    renderRow(rowData, sectionID, rowID, highlightRow) {
        if (rowID == 0)
            return (

                <SwipeCell/>
            );
        else if (rowID == 1) {
            return (
                <View>
                    <View style={{backgroundColor:'#e8e8e8',width:ScreenWidth,height:1}}></View>
                    <NormalCell name='扫一扫，快支付' smallname='扫码自助购，免排队，快支付' imgUrl={this.state.icon1}/>
                </View>
            );
        }
        else if (rowID == 2) {
            return (
                <NormalCell name='最新海报' imgUrl={this.state.icon2} clickFunc={this.gotoPoster.bind(this)} />
            );
        }
        else if (rowID == 3) {
            return (
                <NormalCell name='贴心配送' smallname='整单满128元，专业的配送团队帮您的商品物流到家' imgUrl={this.state.icon3} clickFunc={this.gotoSend.bind(this)}/>
            );
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <Text>I'm the FirstPage component</Text> */}
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}

                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
});
