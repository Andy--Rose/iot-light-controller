import React from 'react';

class Brightness extends React.Component {
	componentDidMount() {
		this.initSlider();
		this.initSelector();
	}

	initSlider() {
		var slider = document.getElementById("slide");
		var ctx = slider.getContext('2d');
		var grd = ctx.createLinearGradient(0, 0, 0, 150);
		grd.addColorStop(0, this.props.selectedColor);
		grd.addColorStop(1, "black");
		ctx.fillStyle = grd;
		ctx.fillRect(10, 3, 50, 150);
	}

	initSelector() {
		var selector = document.getElementById("slide-selector");
		var ctx = selector.getContext('2d');
		ctx.lineWidth = 6;
		ctx.strokeStyle = "lightgrey";
		ctx.moveTo(3, 3);
		ctx.lineTo(67, 3);
		ctx.lineTo(67, 17);
		ctx.lineTo(3, 17);
		ctx.lineTo(3, 3);
		ctx.stroke();
	}

	render() {
		return (
			<div className="brightness">
		        <canvas className="slide" id="slide"></canvas>
		        <canvas className="slide" id="slide-selector"></canvas>
		    </div>
		);
	}
}

export default Brightness