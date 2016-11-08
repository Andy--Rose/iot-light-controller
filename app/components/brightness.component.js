import React from 'react';
import { AddEventListener } from '../../public/js/helpers';
import { EnableDragging } from '../../public/js/helpers';

class Brightness extends React.Component {
	componentDidMount() {
		this.props.updateSelection("white");
		this.props.updateSlider();
		AddEventListener(
			document.getElementById('slider'),
			'click',
			this.props.slideListener()
		$('.slide').on('mousedown', this.props.mouseDown);
	}

	render() {
		return (
			<div className="brightness">
		        <canvas className="slide" id="brightness"></canvas>
		        <canvas className="slide" id="slider"></canvas>
		    </div>
		);
	}
}

export default Brightness