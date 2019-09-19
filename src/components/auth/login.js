import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

import ErrorIndicator from '../error-indicator';
import { withUserService } from '../hoc';
import { logInUser } from '../../actions/user';
import Spinner from '../spinner';

import { compose } from '../../utils';

class LogIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
		this.onUsernameChange = this.onUsernameChange.bind(this);
		this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
	}

	onUsernameChange(event) {
		this.setState({ username: event.target.value });
	}

	onPasswordChange(event) {
		this.setState({ password: event.target.value });
	}

	onSubmit(e) {
		e.preventDefault();
    this.props.onSubmit({
			username: this.state.username,
			password: this.state.password
		});
	}

	render() {
		return (
			<div className="row">
				<div className="col-12 mt-3">
					<form onSubmit={this.onSubmit}>
					  <div className="form-group row">
					    <label className="col-4 col-form-label">Username</label>
					    <div className="col-8">
					      <input
									required
									type="text"
									className="form-control"
									placeholder="Username"
									value={this.state.username}
									onChange={this.onUsernameChange} />
					    </div>
					  </div>
					  <div className="form-group row">
					    <label className="col-4 col-form-label">Password</label>
					    <div className="col-8">
					      <input
									required
									type="password"
									className="form-control"
									placeholder="Password"
									value={this.state.password}
									onChange={this.onPasswordChange} />
					    </div>
					  </div>
						<div className="form-group row">
						 	<div className="col-12 mt-3">
								<button type="submit" className="btn btn-primary btn-lg btn-block">Submit</button>
							</div>
					 	</div>
					</form>
				</div>
			</div>
		);
	}
}

class LogInContainer extends Component {
  render() {
    const { loading, error, onSubmit } = this.props;

    if (loading)
      return <Spinner />;

    if (error)
      return <ErrorIndicator error={error} />

    return <LogIn onSubmit={onSubmit} />
  }
}

// Distributing store argument here
const mapStateToProps = ({ user: { loading, error } }) => {
  return { loading, error }
};

// { userService } is received from the second argument ownProps
const mapDispatchToProps = (dispatch, { userService }) => ({
  onSubmit: ({ username, password }) =>
    logInUser(userService, dispatch, { username, password })
})

export default compose(
  withUserService(),
  connect(mapStateToProps, mapDispatchToProps)
)(LogInContainer);
