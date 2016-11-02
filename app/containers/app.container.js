import React from 'react';

import Header from '../components/header.component';
import Controls from './controls.container';

class AppContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			appName: 'IoT Light Controller',
			appVersion: '1.0.0',
			primaryColor: 'rgb(0, 0, 200)',
			secondaryColor: 'rgb(255, 255, 255)',
			wheelPosition: 224,
			brightness: 100,
			currentDevice: 'Living Room',
			devices: [
				'Living Room'
			],
			currentPreset: '',
			presets: [
				'Ambient'
			],
			wheelWidth: 0,
			wheelHeight: 0
		}
	}

	setColor() {

	}

	sendColor(device, color) {

	}

	sendCommand(device, command) {

	}

	render() {
		return (
			<div className="app-container">
				<Header
					name={this.state.appName}
					version={this.state.appVersion}
					primaryColor={this.state.primaryColor}
					secondaryColor={this.state.secondaryColor}
				/>
				<Controls />
			</div>
		)
	}
}

export default AppContainer