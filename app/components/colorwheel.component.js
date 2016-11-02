import React from 'react';
import $ from 'jquery';
import { GetPosition } from '../../public/js/helpers';

class ColorWheel extends React.Component {
	componentDidMount() {
		this.initImage();
	    this.setWheelPointer();
	}

	initImage() {
	    var img = document.getElementById("wheel");
	    var setXYFunc = this.props.setXY;
	    var wheelClickFunc = this.props.wheelClick;
	    $('#wheel').click(function (e) {
	    	setXYFunc(event.offsetX, event.offsetY);
	    	wheelClickFunc(e);
	    });
	    img.crossOrigin = "Anonymous";
	}

	setWheelPointer() {
		var container = document.getElementById('wheelContainer');
		var root = GetPosition(container);
		$('#wheelPointer').css({
			left: root.x,
			top: root.y + (container.clientHeight / 4) 
		});
	}

	render() {
		return (
			<div className="wheelContainer" id="wheelContainer">
				<img className="wheel" id="wheel" src={this.props.imageFile}></img>
				<img className="selector" id="wheelPointer" width="25px" height="25px" src="public/img/selector.png" />
			</div>
		);
	}
}

export default ColorWheel