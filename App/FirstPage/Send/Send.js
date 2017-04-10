import React, {Component} from 'react';
// import styles from 'styles';

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
    AsyncStorage,
    WebView
} from 'react-native';

import  TopNavigator from '../../Common/TopNavigator'

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

const url = "http://res.cplotus-gz.com/static//delivery.html";

class Send extends Component {
    // 默认属性
    static defaultProps = {};

    // 属性类型
    static propTypes = {};

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            url : "http://res.cplotus-gz.com/static//delivery.html"
        };
    }

    // 自定义方法
    handle() {

    }

    _leftItemAction() {
        this.props.navigator.pop();
    }

    componentDidMount() {
          if(this.props.url!=null){
        // alert(this.props.name)
              this.setState({
                url : this.props.url,
              });
         }
    }
    // 渲染
    render() {
        return (
            <View style={styles.container}>
                <TopNavigator
                    title='贴心配送'
                    leftItemFunc={this._leftItemAction.bind(this)}
                    leftImageSource=  {require('../../Image/arrowto_left.png')}

                />
                <WebView
                    style={{flex: 1,backgroundColor:'gray'}}
                    source={{uri:this.state.url,method: 'GET'}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    scalesPageToFit={false}
                />
                {/*<Text style={styles.textDefault}>*/}
                    {/*Send*/}
                {/*</Text>*/}
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    line:{
        backgroundColor:'gray',
        width:ScreenWidth,
        height:0.5,
    }
});

export default Send;
