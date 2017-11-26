import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

@inject('appState')
@observer
export class members extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	
	/*在渲染前调用*/
	componentWillMount() {
	}
	
	/*在第一次渲染后调用*/
	componentDidMount() {
	}
	
	
	/*渲染函数*/
	render() {
		return (
			<div>
        this is member
			</div>
		);
	}
}
