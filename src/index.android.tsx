/*
Note: This must be compiled with the target set to ES6
The content of index.io.js could be something like
    'use strict';
     import { AppRegistry } from 'react-native'
     import Welcome from './gen/Welcome'
     AppRegistry.registerComponent('MopNative', () => Welcome);
For a list of complete Typescript examples: check https://github.com/bgrieder/RNTSExplorer
 */
import React from "react-native";
import {Component, Text, View} from "react-native";

class App extends Component<any, any> {
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
