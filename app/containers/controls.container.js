import React from 'react';
import $ from 'jquery';
import { GetPosition } from '../../public/js/helpers';

// Application Components
import Buttons from '../components/buttons.component';
import ColorWheel from '../components/colorwheel.component';
import Brightness from '../components/brightness.component';

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
			wheelImgHeight: 0
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
	    this.showCoordinates(e, image);
	}

	showCoordinates(e, image) {
		var pixel = image.canvas.getContext('2d').getImageData(event.offsetX, event.offsetY, 1, 1).data;

        // update preview color
        var pixelColor = "rgb("+pixel[0]+", "+pixel[1]+", "+pixel[2]+")";
        $('#wheel').css('backgroundColor', pixelColor);

        // update controls
        $('#rVal').val(pixel[0]);
        $('#gVal').val(pixel[1]);
        $('#bVal').val(pixel[2]);
        $('#rgbVal').val(pixel[0]+','+pixel[1]+','+pixel[2]);

        var dColor = pixel[2] + 256 * pixel[1] + 65536 * pixel[0];
        var hexColor = '#' + ('0000' + dColor.toString(16)).substr(-6);
        $('#hexVal').val(hexColor);
        $('#hexVal').css('backgroundColor': hexColor);
	}

	render() {
		return (
			<Grid className="controlContainer" fluid={true}>
				<Row className="show-grid">
					<Col className="contolscol" sm={3} md={3} lg={3}>
						<Buttons />		
					</Col>
					<Col className="contolscol" sm={6} md={6} lg={6}>
						<ColorWheel 
							wheelClick={this.wheelHandleClick.bind(this)}
							setXY={this.setXYState.bind(this)}
							imageFile={imageFilePath}
						/>
					</Col>
					<Col className="contolscol" sm={3} md={3} lg={3}>
						<Brightness />
					</Col>
				</Row>
			</Grid>
		)
	}
}

export default Controls