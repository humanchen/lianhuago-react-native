import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView,
    TouchableOpacity,
    Image
} from 'react-native';
import NameCell from './NameCell'
import MemberCardCell from './MemberCardCell'
import Order1Cell from './Order1Cell'
import Order2Cell from './Order2Cell'
const DI = require('Dimensions');
const WINDOW = DI.get('window');

export default class My extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
            sectionHeaderHasChanged: (s1, s2) => s1 != s2
        });
        this.state = {
            dataSource: ds.cloneWithRowsAndSections({
                0: [
                    'a', 'b'
                ],
                1: [
                    'a', 'b'
                ],
                2: ['分享给好友', '用户反馈', '我的优惠券', '关于我们', '设置']
            }), // cloneWithRows 放置数组
            // loaded: false,
        };

    }

    // 返回具体的cell
    _renderRow(rowData, sectionID, rowID) {
        if (rowID == 0 && sectionID == 0) {
            return (<NameCell/>);

        } else if (rowID == 1 && sectionID == 0) {

            return (
                <View>
                    <MemberCardCell/>
                    <View style={styles.cellbreak}></View>
                </View>
            );

        } else if (sectionID == 1 && rowID == 0) {
            return (<Order1Cell/>);
        } else if (sectionID == 1 && rowID == 1) {
            return (
                <View>
                    <Order2Cell/>
                    <View style={styles.cellbreak}></View>
                </View>

            );
        } else {
            return (
                <TouchableOpacity activeOpacity={0.5} onPress={() => this.pushToDetail(rowData)}>
                    <View style={styles.cellView}>
                        <View>
                            <Text style={styles.textS}>{rowData}</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            {/* <Text style={styles.textS}>查看全部订单</Text> */}
                            <Image style={styles.imageStyle} source={require('../Image/arrowright.png')}/>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        }
    }

    render() {
        return (
            <View style={styles.container}>

             < ListView showsVerticalScrollIndicator = {false}
            dataSource = {
                this.state.dataSource
            } // 数据源
            renderRow = {
                this._renderRow.bind(this)
            }
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
    cellView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        height: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#e8e8e8',
        padding: 10
    },
    textS: {
        fontSize: 12
    },
    imageStyle: {
        width: 15,
        height: 15
    },
    topTitle: {
        color: 'red',
        fontSize: 15,
        width: 100,
        marginBottom: 8
    },
    bottomTitle: {
        color: 'blue'
    },
    cellbreak: {
        height: 10
    }
});
