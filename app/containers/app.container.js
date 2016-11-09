import React from 'react';

import Header from '../components/header.component';
import Controls from './controls.container';
import Devices from '../components/devices.component';
import Presets from '../components/presets.component';

class AppContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			appName: 'IoT Light Controller',
			appVersion: '1.0.0',
			device: "Couch",
			preset: "AmbientCycle",
			color: "#fff",
			mode: "None",
			primaryColor: 'rgb(0, 0, 200)',
			secondaryColor: 'rgb(255, 255, 255)',
			colorPreviewArea: "setColorControl"
		}
	}

	handleDeviceChange(e) {
		this.setState(
			{device: e.target.value}
		)
	}

	handlePresetChange(e) {
		this.setState(
			{
				preset: e.target.value,
				mode: "preset"
			}
		)
		var id = this.state.colorPreviewArea;
		document.getElementById(id).style.backgroundColor = "white";
	}

	handleColorChange(selectedColor) {
		this.setState(
			{
				color: selectedColor,
				mode: "color"
			}
		)
		var id = this.state.colorPreviewArea;
		document.getElementById(id).style.backgroundColor = selectedColor;
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
				<Controls 
					device={this.state.device}
					preset={this.state.preset}
					color={this.state.color}
					mode={this.state.mode}
					handleColorChange={this.handleColorChange.bind(this)}
				/>
				<Devices
					device={this.state.device}
					handleDeviceChange={this.handleDeviceChange.bind(this)}
				/>
				<Presets
					preset={this.state.preset}
					handlePresetChange={this.handlePresetChange.bind(this)}
				/>
			</div>
		)
	}
}

export default AppContainer