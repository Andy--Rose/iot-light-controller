import React from 'react';
import DeviceFile from '../../public/conf/devices.json'
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

class Devices extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			devices: DeviceFile.devices
		};
	}

	render() {
		return (
			<FormGroup id="devicesContainer" controlId="formDevices">
				<ControlLabel>Devices</ControlLabel>
				<FormControl componentClass="select" controlId="devices" value={this.props.device} onChange={this.props.handleDeviceChange}>
					{this.state.devices.map(function(device) {
						return (
							<option value={device} key={device}>{device}</option>
						);
					})}
				</FormControl>
			</FormGroup>
		)
	}
}

export default Devices