import React from 'react';
import { SignUp } from '../auth';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
	return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <SignUp />
        </div>
      </div>
      <div className="row text-center">
        <div className="col">
          <Link to="/login">
            <i className="cart-icon fa fa-sign-in pr-1" />
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
