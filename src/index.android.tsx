/*
 Note: This must be compiled with the target set to ES6
 */

import React, {View, Text, PropTypes} from "react-native";

class App extends React.Component<any, any> {
	static propTypes = {
		testPropTypes: PropTypes.string
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
