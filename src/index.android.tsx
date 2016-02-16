/*
	Typescript target version: ES6 (to allow Babel and Webpack to read and bundle js transpiled file)
 */

import React, {View, Text, PropTypes} from "react-native";

class App extends React.Component<any, any> {
	static propTypes = {
		testPropTypes: PropTypes.string
	};

	render() {
		return (
			<View onAccessibilityTap={() => {}}>
				<Text>
					Test Typescript React-Native Ayoub
				</Text>
			</View>
		)
	}
}

export default App;
