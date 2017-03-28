import React, {Component} from 'react';


import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    Alert,
    Image,
    AsyncStorage
} from 'react-native';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

import TopNavigator from  '../../Common/TopNavigator'


class Coupon extends Component {
    // 默认属性
    static defaultProps = {};

    // 属性类型
    static propTypes = {};

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    // 自定义方法
    handle() {

    }

    _leftItemAction() {
        this.props.navigator.pop();
    }

    // 渲染
    render() {
        return (
            <View style={styles.container}>
                <TopNavigator
                    title='我的优惠券'
                    leftItemFunc={this._leftItemAction.bind(this)}
                    leftImageSource=  {require('../../Image/arrowto_left.png')}
                    rightImageSource= {require('../../Image/mine_share_to_frien.png')}
                    rightItemFunc={this._leftItemAction.bind(this)}
                />
                <Image style={styles.imageStyle}
                       source={require('../../Image/mine_qrcode.png')}/>
                <Text style={styles.maintext}>
                    邀请好友扫一扫二维码，下载莲花GO
                </Text>
                {/*<View style={styles.imageStyle}>*/}

                {/*</View>*/}


                {/*<Text style={styles.textDefault}>*/}
                {/*Share*/}
                {/*</Text>*/}
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        //  alignItems: 'center',
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
    thirdCell: {
        height: 120,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#e8e8e8',
        padding: 10,
        // flexDirection: 'row',
        // alignItems: 'center',
    },
    forthCell: {
        height: ScreenHeight - 64 - 10 - 60 - 50 - 120,
        backgroundColor: 'white',
        // borderBottomWidth: 1,
        // borderBottomColor: '#e8e8e8',
        paddingTop: 20,
        paddingLeft: 50,
        // flexDirection: 'row',
        // alignItems: 'center',
    },
    smallView: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    imageStyle: {

        width: 150,
        height: 150,
        marginTop: 50,

        alignSelf:'center',
        // backgroundColor:'white',
    },
    bigImageStyle: {
        width: 70,
        height: 70,
        // margin: 5,
    },

    maintext: {
        // fontWeight: 'bold',
        fontSize: 13,
        color: 'black',
        marginTop: 20,
        textAlign: 'center',
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


export default Coupon;
