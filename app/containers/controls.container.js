import React from 'react';
import $ from 'jquery';
import { GetPosition } from '../../public/js/helpers';

// Application Components
import Buttons from '../components/buttons.component';
import Colors from '../components/colors.component';
//import ColorWheel from '../components/colorwheel.component';
//import Brightness from '../components/brightness.component';

// Bootstrap Components
import Grid from '../../node_modules/react-bootstrap/lib/Grid';
import Row from '../../node_modules/react-bootstrap/lib/Row';
import Col from '../../node_modules/react-bootstrap/lib/Col';

const imageFilePath = "http://arose-iot-light-controller.s3-website-us-west-2.amazonaws.com/public/img/colorwheel.png"

class Controls extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			wheelImgWidth: 0,
			wheelImgHeight: 0,
			colorPreviewArea: "setColorControl"
		}
	}

	setXYState(x, y) {
		this.setState({
			eventX: x, 
			eventY: y
		});
	}

	wheelHandleClick(e) {
		var image = document.getElementById("wheel");
		if(!image.canvas) {
            image.canvas = $('<canvas />')[0];
            image.canvas.width = image.width;
            image.canvas.height = image.height;
            image.canvas.getContext('2d').drawImage(image, 0, 0, image.width, image.height);
        }

		var selector = document.getElementById('wheelPointer');
		selector.style.left = event.offsetX + "px";
	    selector.style.top = event.offsetY + "px";
	    this.setWheelColor(e, image);
	}

	brightnessHandleChange(x, y) {
		
	}

	brightnessHandleMouseDown(e) {
		$('body').on('mouseup', function handle(e) {
			$('body').off('mouseup mousemove', handle);
		});

		$('body').on('mousemove', function handle(e) {
	    	var sliderCanvas = document.getElementById("slide-selector");
			var brightnessCanvas = document.getElementById("slide");

			var location = {
				x: event.offsetX,
				y: event.offsetY
			};

			var minY = brightnessCanvas.offsetParent.offsetTop;
			var maxY = minY + brightnessCanvas.offsetHeight;
			var sliderOffsetHeight = location.y - 35;

			if (minY < location.y < maxY) {
				sliderCanvas.style.top = sliderOffsetHeight + "px";
			}

			var postLocation = {
				x: sliderCanvas.offsetX + (sliderCanvas.width / 2),
				y: sliderCanvas.offsetY + (sliderCanvas.height / 2)
			};

			var pixel = brightnessCanvas.getContext('2d').getImageData(5, location.y, 1, 1).data;

			var pixelColor = "rgb("+pixel[0]+", "+pixel[1]+", "+pixel[2]+")";
			$('#wheel').css('backgroundColor', pixelColor);
	    });
	}

	setWheelColor(e, imageObj) {
		var pixel = imageObj.canvas.getContext('2d').getImageData(event.offsetX, event.offsetY, 1, 1).data;

        // update preview color
        var pixelColor = "rgb("+pixel[0]+", "+pixel[1]+", "+pixel[2]+")";
        $('#wheel').css('backgroundColor', pixelColor);
        this.updateBrightnessSelection(pixelColor);
	}

	setBrightnessColor(location, brightnessCanvas) {
		var pixel = brightnessCanvas.getContext('2d').getImageData(location.x, location.y, 1, 1).data;

		var pixelColor = "rgb("+pixel[0]+", "+pixel[1]+", "+pixel[2]+")";
		$('#wheel').css('backgroundColor', pixelColor);
	}

	updateBrightnessSelection(color) {
		var slider = document.getElementById("slide");
		var ctx = slider.getContext('2d');
		var grd = ctx.createLinearGradient(0, 0, 0, 150);
		grd.addColorStop(0, color);
		grd.addColorStop(1, "black");
		ctx.fillStyle = grd;
		ctx.fillRect(10, 3, 50, 150);
	}

	updateBrightnessSlider() {
		var selector = document.getElementById("slide-selector");
		var ctx = selector.getContext('2d');
		var grd = ctx.createLinearGradient(3, 7, 4, 65, 7, 4);
		grd.addColorStop(0, "lightgrey");
		grd.addColorStop(1, "black");
		ctx.lineWidth = 6;
		ctx.lineJoin = "round";
		ctx.strokeStyle = grd;
		ctx.moveTo(3, 3);
		ctx.lineTo(67, 3);
		ctx.lineTo(67, 17);
		ctx.lineTo(3, 17);
		ctx.lineTo(3, 3);
		ctx.lineTo(67, 3);
		ctx.stroke();
	}

	moveBrightnessSlider(location, brightnessCanvas, sliderCanvas) {
			}

	render() {
		return (
			<Grid className="controlContainer" fluid={true}>
				<Row className="show-grid">
					<Col className="contolscol" sm={3} md={3} lg={3}>
						<Buttons />		
					</Col>
					<Col className="colorscol" sm={9} md={9} lg={9}>
						<Colors 
							previewID={this.state.colorPreviewArea}
						/>
					</Col>
				</Row>
			</Grid>
		)
	}
}

export default Controls

					// <Col className="contolscol" sm={6} md={6} lg={6}>
					// 	<ColorWheel 
					// 		wheelClick={this.wheelHandleClick.bind(this)}
					// 		setXY={this.setXYState.bind(this)}
					// 		imageFile={imageFilePath}
					// 	/>
					// </Col>
					// <Col className="contolscol" sm={3} md={3} lg={3}>
					// 	<Brightness 
					// 		updateSelection={this.updateBrightnessSelection.bind(this)}
					// 		updateSlider={this.updateBrightnessSlider.bind(this)}
					// 		mouseDown={this.brightnessHandleMouseDown.bind(this)}
					// 	/>
					// </Col>