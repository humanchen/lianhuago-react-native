import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Platform,
    Dimensions
} from 'react-native';
// import BarcodeScanner from 'react-native-barcode-scanner-universal'
// import BarcodeScanner from 'react-native-barcodescanner';
import Camera from 'react-native-camera';
import TopNavigator from '../Common/TopNavigator'

export default class Scan extends Component {


    constructor(props) {
        super(props);
    }

    //扫描返回
    onBarCodeRead=(e)=>{
        console.log(e.data);
    }

    _leftItemAction() {
        this.props.navigator.pop();
    }

    render() {
        return (
            <View style={styles.container}>
                <TopNavigator
                    title='扫条码'
                    leftItemFunc={this._leftItemAction.bind(this)}
                    leftImageSource=  {require('../Image/closey.png')}
                />
                <Camera
                    ref={(cam) => {
            this.camera = cam;
          }}
                   
                    onBarCodeRead={this.onBarCodeRead}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}>
                    <View style={styles.rectangle}></View>
                    {/*<Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>*/}
                </Camera>
            </View>
        );
    }

    takePicture() {
        this.camera.capture()
            .then((data) => console.log(data))
            .catch(err => console.error(err));
    }



}

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    preview: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    // capture: {
    //     flex: 0,
    //     backgroundColor: '#fff',
    //     borderRadius: 5,
    //     color: '#000',
    //     padding: 10,
    //     margin: 40
    // },


    // container: {
    //     flex: 1,
    // },
    // camera: {
    //     flex: 1
    // },
    // rectangleContainer: {
    //     height: 350,
    //     width: 350,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     backgroundColor: 'transparent'
    // },
    rectangle: {
        height: 250,
        width: 250,
        borderWidth: 2,
        borderColor: '#00FF00',
        backgroundColor: 'transparent'
    }

});
