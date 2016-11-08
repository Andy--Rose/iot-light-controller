// https://github.com/DavidDurman/FlexiColorPicker/blob/master/examples/showcase.html

import React from 'react';

class Colors extends React.Component {
	componentDidMount() {
		var previewID = this.props.previewID;
		var handleColorChangeFunc = this.props.handleColorChange;
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
				handleColorChangeFunc(hex);
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