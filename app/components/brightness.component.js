import React from 'react';

class Brightness extends React.Component {
	render() {
		return (
			<div className="colorVals">
		        <div><label>R</label> <input type="text" id="rVal" /></div>
		        <div><label>G</label> <input type="text" id="gVal" /></div>
		        <div><label>B</label> <input type="text" id="bVal" /></div>
		        <div><label>RGB</label> <input type="text" id="rgbVal" /></div>
		        <div><label>HEX</label> <input type="text" id="hexVal" /></div>
		    </div>
		);
	}
}

export default Brightness