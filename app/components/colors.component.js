import React from 'react';

class Colors extends React.Component {
	componentDidMount() {
		var previewID = this.props.previewID;
		ColorPicker.fixIndicators(
			document.getElementById('slider-indicator'),
			document.getElementById('picker-indicator'));
		ColorPicker(
			document.getElementById('slider'), 
			document.getElementById('picker'),
			function(hex, hsv, rgb, pickerCoordinate, sliderCoordinate) {
				ColorPicker.positionIndicators(
					document.getElementById('slider-indicator'),
					document.getElementById('picker-indicator'),
					sliderCoordinate, pickerCoordinate
				);
				document.getElementById(previewID).style.backgroundColor = hex;
			}
		);
	}

	render() {
		return (
			<div id="colors">
				<div id="picker-wrapper">
					<div id="picker"></div>
					<div id="picker-indicator"></div>
				</div>
				<div id="slider-wrapper">
					<div id="slider"></div>
					<div id="slider-indicator"></div>
				</div>
			</div>
		);
	}
}

export default Colors