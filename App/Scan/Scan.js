import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Platform
} from 'react-native';
import BarcodeScanner from 'react-native-barcode-scanner-universal'
// import BarcodeScanner from 'react-native-barcodescanner';
import Camera from 'react-native-camera';

export default class Scan extends Component {
    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         torchMode: 'off',
    //         cameraType: 'back',
    //     };
    // }
    // barcodeReceived(e) {
    //     console.log('Barcode: ' + e.data);
    //     console.log('Type: ' + e.type);
    // }
    // render() {
    //     let scanArea = null
    //     if (Platform.OS === 'ios') {
    //         scanArea = (
    //             <View style={styles.rectangleContainer}>
    //                 <View style={styles.rectangle} />
    //             </View>
    //         )
    //     }
    //
    //     return (
    //         <BarcodeScanner
    //             onBarCodeRead={(code) => console.log(code)}
    //             style={styles.camera}>
    //             {scanArea}
    //         </BarcodeScanner>
    //     )
    // }

    constructor(props) {
        super(props);
        this.state = {
            code: "None"
        };
        this._show = this._show.bind(this);
    }

    render() {
        let scanArea = null;
        if (Platform.OS === 'ios') {
            scanArea = (
                <View style={styles.rectangleContainer}>
                    <View style={styles.rectangle} />
                </View>
            )
        }
        return (
            <View>
                <Text style={ [{color:"red"},{fontSize:16}] }>{this.state.code}</Text>
                <BarcodeScanner
                    onBarCodeRead={ (code) => this._show(code)}
                    style={styles.camera}>
                    {scanArea}
                </BarcodeScanner>
            </View>
        )
    }

    _show(val) {
        this.setState({
            code:val.data
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1
    },
    rectangleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    rectangle: {
        height: 250,
        width: 250,
        borderWidth: 2,
        borderColor: '#00FF00',
        backgroundColor: 'transparent'
    }

});
