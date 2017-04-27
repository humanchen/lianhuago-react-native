import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Platform,
    Dimensions,
    Animated,
    Easing
} from 'react-native';
// import BarcodeScanner from 'react-native-barcode-scanner-universal'
// import BarcodeScanner from 'react-native-barcodescanner';
import Camera from 'react-native-camera';
import TopNavigator from '../Common/TopNavigator'
import Viewfinder from './Viewfinder'
import Toast, {DURATION} from 'react-native-easy-toast'

export default class Scan extends Component {


    constructor(props) {
        super(props);
        this.state = {
            fadeInOpacity: new Animated.Value(-200), // 二维坐标
            marlef: new Animated.Value(-200),
        };
    }

    //扫描返回
    onBarCodeRead=(e)=>{
        console.log(e.data);
        this.refs.toast.show(e.data, DURATION.LENGTH_LONG);
    }

    _leftItemAction() {
        this.props.navigator.pop();
    }


    startAnimation() {
        // this.state.translateValue.setValue({x:0, y:0});
        // Animated.decay( // 以一个初始速度开始并且逐渐减慢停止。  S=vt-（at^2）/2   v=v - at
        //     this.state.translateValue,
        //     {
        //         velocity: 10, // 起始速度，必填参数。
        //         deceleration: 0.8, // 速度衰减比例，默认为0.997。
        //     }
        // ).start();
        this.state.marlef.setValue(-200);
        Animated.timing(this.state.marlef, {
            toValue: 200, // 目标值
            duration: 3000, // 动画时间
            easing: Easing.linear // 缓动函数
        }).start(() => this.startAnimation());
    }

    componentDidMount() {
         this.startAnimation();
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
                    aspect={Camera.constants.Aspect.fill}
                    >
                    <View style={{width:Dimensions.get('window').width,height:(Dimensions.get('window').height-200-64)/2,position:'absolute',top:0,backgroundColor:'black',opacity:0.5}}></View>
                    <View style={{width:(Dimensions.get('window').width-200)/2,height:200,position:'absolute',top:(Dimensions.get('window').height-200-64)/2,left:0,backgroundColor:'black',opacity:0.5}}></View>
                    <View style={{width:(Dimensions.get('window').width-200)/2,height:200,position:'absolute',top:(Dimensions.get('window').height-200-64)/2,left:(Dimensions.get('window').width-200)/2+200,backgroundColor:'black',opacity:0.5}}></View>
                    <View style={{width:Dimensions.get('window').width,height:(Dimensions.get('window').height-200-64)/2,position:'absolute',top:(Dimensions.get('window').height-200-64)/2+200,backgroundColor:'black',opacity:0.5}}></View>
                    <Viewfinder
                        backgroundColor={this.props.viewFinderBackgroundColor}
                        color={this.props.viewFinderBorderColor}
                        borderWidth={this.props.viewFinderBorderWidth}
                        borderLength={this.props.viewFinderBorderLength}
                        height={this.props.viewFinderHeight}
                        isLoading={this.props.viewFinderShowLoadingIndicator}
                        width={this.props.viewFinderWidth}
                    >
                    </Viewfinder>
                    <Animated.Image// 可选的基本组件类型: Image, Text, View(可以包裹任意子View)
                        style = {{width: 200,height:20,alignItems: 'center',justifyContent: 'center',
                  marginTop:this.state.marlef
                  }}
                        source={require('../Image/scanning.png')}>
                    </Animated.Image>
                    {/*<View style={styles.rectangle}></View>*/}
                    {/*<Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>*/}
                </Camera>
                <Toast ref="toast"/>
            </View>
        );
    }


    // render() {
    //     let scanArea = null
    //     scanArea = (
    //         <View style={styles.rectangleContainer}>
    //             <View style={styles.rectangle} />
    //         </View>
    //     )
    //
    //     return (
    //         <BarcodeScanner
    //             onBarCodeRead={ this.onBarCodeRead  }
    //             style={styles.camera}
    //         >
    //             {scanArea}
    //         </BarcodeScanner>
    //     );
    // }


    // takePicture() {
    //     this.camera.capture()
    //         .then((data) => console.log(data))
    //         .catch(err => console.error(err));
    // }



}

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    preview: {
         // backgroundColor:'gray',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // height: 200,
        // width: Dimensions.get('window').width,


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
    camera: {
        flex: 1
    },
    rectangleContainer: {
        height: 350,
        width: 350,
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
