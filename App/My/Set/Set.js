import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView,
    TouchableOpacity,
    Image,
} from 'react-native';
import TopNavigator from  '../../Common/TopNavigator'
import QA from './QA'

export default class Set extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
            sectionHeaderHasChanged: (s1, s2) => s1 != s2
        });
        this.state = {
            dataSource: ds.cloneWithRowsAndSections({
                0: [
                    '常见问题', '关于退换货','注册协议','修改密码','第三方账号绑定'
                ],
                1: [
                    '退出登录'
                ],

            }), // cloneWithRows 放置数组
            // loaded: false,
        };

    }

    _leftItemAction() {
        this.props.navigator.pop();
    }

    _changeRight(rowID,sectionID){
        if(rowID!=4&&sectionID==0){
            return(
                <Image style={styles.imageStyle} source={require('../../Image/arrowright.png')}/>
            );
        }

        if(rowID==4&&sectionID==0){
            return (
                <Text style={[styles.textS,{color: 'gray'}]}>无</Text>
            );
        }


    }

    _changeText(rowData, sectionID, rowID){

        if(sectionID==1){
            let rowData1=rowData;
            return(
            <Text style={[styles.textS,{color: 'red'}]}>{rowData1}</Text>
            );
        }else {
            let rowData1=rowData;
            return(
            <Text style={styles.textS}>{rowData1}</Text>
            );
        }
    }

    _pushToDetail(rowID,sectionID){
        if(rowID==0&&sectionID==0){
            this.props.navigator.push({
                component: QA,    // 要跳转的版块
                passProps: {
                    name: '智通三千'
                },
                type: 'Normal'
            })
        }


    }


// 返回具体的cell
    _renderRow(rowData, sectionID, rowID) {

         if(rowID!=4)
            return (
                <TouchableOpacity activeOpacity={0.5} onPress={() => this._pushToDetail(rowID,sectionID)}>
                    <View style={styles.cellView}>
                        <View style={{flexDirection:'row',alignItems: 'center',}}>
                            {this._changeText(rowData,sectionID,rowID)}
                            {/*<Text style={styles.textS}>{rowData}</Text>*/}
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            {this._changeRight(rowID,sectionID)}

                        </View>
                    </View>
                </TouchableOpacity>
            );
         else
             return (
                 <TouchableOpacity activeOpacity={1} onPress={() => this._pushToDetail(rowID,sectionID)}>
                     <View style={styles.cellView}>
                         <View style={{flexDirection:'row',alignItems: 'center',}}>
                             {this._changeText(rowData,sectionID,rowID)}
                             {/*<Text style={styles.textS}>{rowData}</Text>*/}
                         </View>
                         <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                             {this._changeRight(rowID,sectionID)}

                         </View>
                     </View>
                 </TouchableOpacity>
             );

    }

    _renderSectionHeader(data, sectionID) {
        if (sectionID==0)
        return (
            <View style={styles.cellbreak}>

            </View>
        );
        else
            return (
                <View style={styles.bigcellbreak}>

                </View>
            );
    }



    render() {
        return (
            <View style={styles.container}>
                <TopNavigator
                    title='设置'
                    leftItemFunc={this._leftItemAction.bind(this)}
                    leftImageSource=  {require('../../Image/arrowto_left.png')}
                 />

                < ListView showsVerticalScrollIndicator = {false}
                           dataSource = {
                this.state.dataSource
            } // 数据源
                           renderRow = {
                this._renderRow.bind(this)
            }
                           renderSectionHeader={this._renderSectionHeader}
                />

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
    cellView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        height: 35,
        borderBottomWidth: 1,
        borderBottomColor: '#e8e8e8',
        padding: 8
    },
    cellbreak: {
        height: 10
    },
    bigcellbreak: {
        height: 20
    },
    imageStyle: {
        width: 20,
        height: 20
    },
    textS: {
        fontSize: 13,
        marginLeft:5,
    },
});
