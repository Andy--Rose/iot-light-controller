import React from 'react'

import Grid from '../../node_modules/react-bootstrap/lib/Grid';
import Row from '../../node_modules/react-bootstrap/lib/Row';
import Col from '../../node_modules/react-bootstrap/lib/Col';

class Buttons extends React.Component {
	getModeSetting() {
		if (this.props.mode === "color") {
			return "Color";
		} else if (this.props.mode === "preset") {
			return "Preset " + this.props.preset; 
		} else {
			return "Unknown mode";
		}
	}

	render() {
		return (
			<div className="buttons">
				<div id="iOControl" className="control ioControl">I/O</div>
				<div id="setColorControl" className="control setControl">
					<p>
						Set {this.props.device} with {this.getModeSetting()}
					</p>
				</div>
			</div>
		);
	}
}

export default Buttons;