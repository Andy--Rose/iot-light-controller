import React from 'react';
import DeviceFile from '../../public/conf/devices.json'
import FormControl from 'react-bootstrap/lib/FormControl';

class Devices extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			devices: DeviceFile.devices
		};
	}

	render() {
		return (
			<select id="devices" type="dropdown" value={this.props.device} onChange={this.props.handleDeviceChange}>
				{this.state.devices.map(function(device) {
					return (
						<option value={device} key={device}>{device}</option>
					);
				})}
			</select>
		)
	}
}

export default Devices