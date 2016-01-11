/*
Note: This must be compiled with the target set to ES6
The content of index.io.js could be something like
    'use strict';
     import { AppRegistry } from 'react-native'
     import Welcome from './gen/Welcome'
     AppRegistry.registerComponent('MopNative', () => Welcome);
For a list of complete Typescript examples: check https://github.com/bgrieder/RNTSExplorer
 */

///<reference path="../typings/react-native-ayoub/react-native-ayoub.d.ts" />


import React from 'react-native';
var {Component, View, Text} = React;

class App extends Component<any,any> {
    render() {
        return (
            <View>
                <Text>
                    Test Typescript React-Native
                </Text>
            </View>
        )
    }
}

export default App
