import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ListView} from 'react-native';
import TopNavigator from  '../../Common/TopNavigator'

var Dimensions = require('Dimensions');
var ScreenHeight = Dimensions.get('window').height;
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export default class AboutUs extends Component {
    //返回
    _leftItemAction() {
        this.props.navigator.pop();
    }

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource: ds.cloneWithRows(['0', '1', '2','3']),

        };
    }


    _renderRow(rowData, sectionID, rowID, highlightRow) {
        if (rowID == 0) {
            return (
                <View style={styles.firstCell}>
                    <View style={{flexDirection:'column',marginLeft:10,}}>
                        <Text style={styles.maintext}>莲花GO</Text>
                        <Text style={styles.secondText}>软件版本：1.9.2</Text>
                    </View>
                    <View>
                        <Image style={styles.imageStyle} source={require('../../Image/icon_about_us.png')}
                        />
                    </View>
                </View>
            )
        }
        else if (rowID == 1)
            return (
                <View style={styles.secondCell}>

                    <Text style={{marginLeft:10,color:'black',fontSize:12}}>客服热线:</Text>
                    <Text
                        style={{marginLeft:5,color:'red',fontSize:12, textDecorationLine:'underline'}}>400-700-8000</Text>


                </View>
            )
        else if(rowID == 2)
            return (
                <View style={styles.thirdCell}>

                    <Text style={{marginLeft:10,color:'black',fontSize:13}}>    卜蜂莲花是泰国知名跨国集团--正大集团下属的零售企业。莲花GO是卜蜂莲花超市一款自助购物软件。可实现自助扫描商品、快捷手机支付、自助打印小票、轻松完成提货的购物过程。免排队、快支付，莲花GO给您更便利的生活体验！</Text>



                </View>
            )
        else
            return (

                <View style={styles.forthCell}>

                    <View style={styles.smallView}>
                        <Image style={styles.bigImageStyle} source={require('../../Image/icon_about_us.png')}
                        />
                        <View >
                            
                        </View>
                    </View>



                </View>


            )

    }


    render() {
        return (
            <View style={styles.container}>
                <TopNavigator
                    title='关于我们'
                    leftItemFunc={this._leftItemAction.bind(this)}
                    leftImageSource={ require('../../Image/arrowto_left.png')}
                />
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                    showsVerticalScrollIndicator={false}

                />
                {/*/!*<Image style={styles.imageStyle}*!/*/}
                {/*source={require('../Image/cartbig.png')}/>*/}
                {/*<Text style={styles.maintext}>购物车空空的，快去逛逛吧~</Text>*/}
                {/*<View style={styles.redButton}>*/}
                {/*<TouchableOpacity activeOpacity={0.6}>*/}
                {/*<Text style={styles.goBuyText}>*/}
                {/*去购物*/}
                {/*</Text>*/}
                {/*</TouchableOpacity>*/}
                {/*</View>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
        backgroundColor: '#e6e6e6',
        flexDirection: 'column',

    },
    firstCell: {
        height: 60,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#e8e8e8',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    secondCell: {
        height: 40,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#e8e8e8',
        flexDirection: 'row',
        alignItems: 'center',
    },
    thirdCell:{
        height: 120,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#e8e8e8',
        padding:10,
        // flexDirection: 'row',
        // alignItems: 'center',
    },
    forthCell:{
        height: ScreenHeight-64-10-60-50-120,
        backgroundColor: 'white',
        // borderBottomWidth: 1,
        // borderBottomColor: '#e8e8e8',
        paddingTop:20,
        paddingLeft:50,
        // flexDirection: 'row',
        // alignItems: 'center',
    },
    smallView:{
      flexDirection:'row',
        alignItems:'center',
    },

    imageStyle: {
        width: 50,
        height: 50,
        margin: 5,
    },
    bigImageStyle: {
        width: 60,
        height: 60,
        // margin: 5,
    },

    maintext: {
        fontWeight: 'bold',
        fontSize: 14,
        color: 'black',
        // textAlign: 'center',
    },
    secondText: {
        fontSize: 13,
        color: 'gray',
    },
    redButton: {
        backgroundColor: 'red',
        marginTop: 40,
        borderRadius: 5,
        width: 170,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    goBuyText: {
        color: 'white',
    },
});
