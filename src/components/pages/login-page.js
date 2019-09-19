import React from 'react';
import { LogIn } from '../auth';
import { Link } from 'react-router-dom';

const LogInPage = () => {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <LogIn />
        </div>
      </div>
      <div className="row text-center">
        <div className="col">
          <Link to="/signup">
            <i className="cart-icon fa fa-sign-in pr-1" />
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
