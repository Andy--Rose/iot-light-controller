// TODO: Stylize text and add hover and press effects

import React from 'react'

import Grid from '../../node_modules/react-bootstrap/lib/Grid';
import Row from '../../node_modules/react-bootstrap/lib/Row';
import Col from '../../node_modules/react-bootstrap/lib/Col';

class Buttons extends React.Component {
	getModeSetting() {
		if (this.props.mode === "color") {
			return "Color";
		} else if (this.props.mode === "preset") {
			return this.props.preset; 
		} else {
			return "Unknown mode";
		}
	}

	render() {
		return (
			<div className="buttons">
				<div id="iOControl" className="control ioControl">
					<p className="button-text-top">
						{this.props.device}
					</p>
				</div>
				<div id="setColorControl" className="control setControl">
					<p className="button-text-top">
						{this.props.device}
					</p>
					<p className="button-text-bottom">
						{this.getModeSetting()}
					</p>
				</div>
			</div>
		);
	}
}

export default Buttons;