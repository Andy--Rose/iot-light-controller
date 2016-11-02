import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from './containers/app.container';

class App extends React.Component {
	getPosition(el) {
		var xPos = 0;
		var yPos = 0;

		while (el) {
		if (el.tagName == "BODY") {
			// deal with browser quirks with body/window/document and page scroll
			var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
			var yScroll = el.scrollTop || document.documentElement.scrollTop;

			xPos += (el.offsetLeft - xScroll + el.clientLeft);
			yPos += (el.offsetTop - yScroll + el.clientTop);
		} else {
			// for all other non-BODY elements
			xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
			yPos += (el.offsetTop - el.scrollTop + el.clientTop);
		}

		el = el.offsetParent;
		}
		return {
		x: xPos,
		y: yPos
		};
	}
	render() {
		return (
			<AppContainer />
		)
	}
}

ReactDOM.render(<App />, document.getElementById('iot-light-controller'))