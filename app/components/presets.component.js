import React from 'react';
import PresetFile from '../../public/conf/presets.json'
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

class Devices extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			presets: PresetFile.presets
		};
	}

	render() {
		return (
			<FormGroup id="presetsContainer" controlId="formPresets">
				<ControlLabel>Presets</ControlLabel>
				<FormControl componentClass="select" controlId="presets" value={this.props.preset} onChange={this.props.handlePresetChange}>
					{this.state.presets.map(function(preset) {
						return (
							<option value={preset} key={preset}>{preset}</option>
						);
					})}
				</FormControl>
			</FormGroup>
		)
	}
}

export default Devices