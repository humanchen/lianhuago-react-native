import React, {Component, PropTypes} from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    Animated
} from 'react-native'

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;

const ICONS = {
    up: require('../../Image/icon_common_problem_down.png'),
    down: require('../../Image/icon_common_problem_right.png')
}

export default class extends Component {
    static propTypes = {
        expanded: PropTypes.bool,
        title: PropTypes.string,
        onToggle: PropTypes.func
    }

    static defaultProps = {
        expanded: false
    }

    constructor(props) {
        super(props)

        this.state = {
            expanded: props.expanded,
            animation: new Animated.Value(),

        }
      this.state.animation.setValue(35)
    }

    toggle() {
        // const {onToggle} = this.props
        const {expanded, maxHeight, minHeight, animation} = this.state
        const initialValue = expanded ? minHeight + maxHeight : minHeight
        const finalValue = expanded ? minHeight : minHeight + maxHeight

        this.setState({expanded: !expanded})
        animation.setValue(initialValue)

        Animated.timing(animation, {
            toValue: finalValue
        }).start()

        // onToggle()
    }






    render() {
        const {expanded, animation, maxHeight} = this.state
        const icon = expanded ? 'up' : 'down'

        return (
            <Animated.View style={[styles.container, {height: animation}]}>
                <View style={styles.titleContainer}
                      onLayout={event => this.setState({minHeight: event.nativeEvent.layout.height})}>
                    <TouchableHighlight
                        style={{height:35}}
                        onPress={this.toggle.bind(this)}
                        underlayColor="#f1f1f1">
                        <View style={styles.button}>

                        <Text style={styles.title}>{this.props.title}</Text>
                        {/*<Image style={styles.imageStyle} source={require('../../Image/arrowright.png')}/>*/}
                            <Image style={styles.buttonImage} source={ICONS[icon]} />
                        </View>
                    </TouchableHighlight>
                </View>


                {/*fixed bug in recent version of react-native that maxHeight will be changed when body is collapsed*/}
                <View style={styles.body}
                      onLayout={event => !maxHeight && this.setState({maxHeight: event.nativeEvent.layout.height})}>
                    {this.props.children}
                </View>
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop:1,
        overflow: 'hidden'
    },
    titleContainer: {
        width: ScreenWidth,
        height:35,
    },
    title: {
        fontSize: 13,
        color: '#2a2f43',
    },
    button: {
        padding:5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: ScreenWidth,
        height:35,
        alignItems:'center',
    },
    buttonImage: {
        width: 15,
        height: 15,
        resizeMode:'contain'
    },
    body: {
        padding: 10,
        paddingTop: 5,
        backgroundColor: '#e6e6e6',
    },
    imageStyle: {
        width: 20,
        height: 20
    },
});