import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
	constructor(props) {
		super(props);

		this.state = { comment: '' };
	}
	handleChange(event) {
		this.setState({ comment: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		
		this.props.saveComment(this.state.comment);
		this.setState({ comment: '' });
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
				<textarea 
					value={this.state.comment}
					onChange={this.handleChange.bind(this)} />
				<button>Submit Commment</button>
			</form>
		);
	}
}

//passing action instead of mapDispatchThingtoThing
export default connect(null, actions)(CommentBox);
