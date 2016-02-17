/*
	Typescript target version: ES6 (to allow Babel and Webpack to read and bundle js transpiled file)
 */
import React, {View, Text, StyleSheet, PropTypes} from "react-native";
import LayoutEvent = __React.LayoutEvent;

let styles = StyleSheet.create({
	container: {
		flex: 1,
		transform: [{rotate: '50deg'}],
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: "black"
	}
});

class App extends React.Component<any, any> {
	static propTypes = {
		testPropTypes: PropTypes.string
	};

	public _onLayout(event:LayoutEvent):void {
		this.setState({
			changeWidth: event.nativeEvent.layout.width - 6,
			changeHeight: event.nativeEvent.layout.height - 6
		});
	}

	render() {
		return (
			<View style={styles.container} onLayout={this._onLayout} onAccessibilityTap={() => {}}>
				<Text>
					Test Typescript React-Native Ayoub
				</Text>
			</View>
		)
	}
}

export default App;
