/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
//
// export default class lianhuago extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity
} from 'react-native';

import  Login from  './App/Login/Login'

export  default  class lianhuago extends Component {
    render() {
        return (
            <Navigator initialRoute = {
                { name: 'Login', component: Login }
            }
                       configureScene = {
                (route) => {
                    return Navigator.SceneConfigs.PushFromRight;
                }
            }
                       renderScene = {
                (route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params }
                    navigator = { navigator }
                    />
                }
            }


            />

        );
    }

}



AppRegistry.registerComponent('lianhuago', () => lianhuago);
