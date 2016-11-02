import React from 'react'

import Grid from '../../node_modules/react-bootstrap/lib/Grid';
import Row from '../../node_modules/react-bootstrap/lib/Row';
import Col from '../../node_modules/react-bootstrap/lib/Col';

class Buttons extends React.Component {
	render() {
		return (
			<div className="buttons">
				<div id="iOControl" className="control ioControl">I/O</div>
				<div id="setColorControl" className="control setControl">Set</div>
			</div>
		);
	}
}

export default Buttons;