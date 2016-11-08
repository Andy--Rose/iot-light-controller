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
			wheelImgHeight: 0
		}
	}

	render() {
		return (
			<Grid className="controlContainer" fluid={true}>
				<Row className="show-grid">
					<Col className="contolscol" sm={3} md={3} lg={3}>
						<Buttons 
							device={this.props.device}
							preset={this.props.preset}
							color={this.props.color}
							mode={this.props.mode}
						/>		
					</Col>
					<Col className="colorscol" sm={9} md={9} lg={9}>
						<Colors 
							previewID={this.state.colorPreviewArea}
							handleColorChange={this.props.handleColorChange}
						/>
					</Col>
				</Row>
			</Grid>
		)
	}
}

export default Controls