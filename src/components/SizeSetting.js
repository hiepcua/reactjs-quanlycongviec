import React, { Component } from 'react';

class SizeSetting extends Component {
	changSize(value) {
		this.props.onChangSize(value);
	}

	render(){
		return (
			<div className="panel panel-warning">
				<div className="panel-heading">
					<h3 className="panel-title">Size: { this.props.fontSize }px</h3>
				</div>
				<div className="panel-body">
					<button type="button" className="btn btn-success"
						onClick={ () => this.changSize(-2) }
					>Giảm</button>
					&nbsp;&nbsp;&nbsp;
					<button type="button" className="btn btn-success"
						onClick={ () => this.changSize(2) }
					>Tăng</button>
				</div>
			</div>
		);
	}
}

export default SizeSetting;
