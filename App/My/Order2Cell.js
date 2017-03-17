/* @flow */

import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';

export default class Order2Cell extends Component {
    render() {
        return (
            <TouchableOpacity onPress={()=>{alert('点击了')}}>

                <View style={styles.container}>
                    <View style={styles.smallItem} >
                        <Image style={styles.imageStyle}  source={require('../Image/mine_to_pay.png')}/>
                        <Text style={styles.textS}>待支付</Text>
                    </View>
                    <View style={styles.smallItem}>
                        <Image style={styles.imageStyle}  source={require('../Image/mine_to_send.png')}/>
                        <Text style={styles.textS}>待发货</Text>
                    </View>
                    <View style={styles.smallItem}>
                        <Image style={styles.imageStyle}  source={require('../Image/mine_to_receive.png')}/>
                        <Text style={styles.textS}>待收货</Text>
                    </View>
                    <View style={styles.smallItem}>
                        <Image style={styles.imageStyle}  source={require('../Image/mine_order_return.png')}/>
                        <Text style={styles.textS}>退货订单</Text>
                    </View>


                </View>

            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 50,
        borderBottomWidth: 0.5,
        borderBottomColor: '#e8e8e8',
        //  padding:5,
    },
    smallItem: {
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
    },
    textS: {
        fontSize: 8,
        marginTop:3,
        color:'#797979',
    },
    imageStyle: {
        width: 22,
        height: 22
    },
});
