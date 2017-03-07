
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';


var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;


export  default class TopNavigator extends Component {


    render() {

        // console.log("MyNavigatorTop props : ", this.props);

        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.name}</Text>
            </View>
        );

    }
}

    const styles = StyleSheet.create({
        container: {
            width: ScreenWidth,
            height: 64,
            backgroundColor: 'white',
            // backgroundColor: '#00a9be',
            alignItems: 'center'
        },
        title: {
            marginTop: (20 + (44 - 17) / 2),
            fontSize: 17,
            color: 'black'
        }
    });

