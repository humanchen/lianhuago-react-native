import React from 'react-native';
// import styles from 'styles';
import TopNavigator from  '../../Common/TopNavigator'
const {Component, View, Text} = React;

class Share extends Component {
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
            <View>
                <TopNavigator
                    title='分享给好友'
                    leftItemFunc={this._leftItemAction.bind(this)}
                    leftImageSource={ require('../../Image/arrowto_left.png')}
                />
                <Text style={styles.textDefault}>
                    Share
                </Text>
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
        width: 50,
        height: 50,
        margin: 5,
    },
    bigImageStyle: {
        width: 70,
        height: 70,
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


export default Share;
