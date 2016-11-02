import React from 'react';

class Header extends React.Component {
	render() {
		var headerStyle = {
			color: this.props.secondaryColor,
			background: this.props.primaryColor
		};
		return (
			<div className="header" style={headerStyle}>
				<div className="left">{this.props.name}</div>
				<div className="right">v-{this.props.version}</div>
			</div>
		);
	}
}

export default Header;