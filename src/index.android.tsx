/*
 Note: This must be compiled with the target set to ES6
 */

import React, {View, Text} from "react-native";
import {PropTypes} from "react-native";

class App extends React.Component<any, any> {
	static propTypes = {
		backgroundColor: PropTypes.string,
		textColor: PropTypes.string,
		text: PropTypes.string,
		textSize: PropTypes.number
	};
	render() {
		return (
			<View>
				<Text>
					Test Typescript React-Native Ayoub
				</Text>
			</View>
		)
	}
}

export default App;
