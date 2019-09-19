import React from 'react';
import { SignUp } from '../auth';
import { LogIn } from '../auth';

const WelcomePage = () => {
	return (
    <div className="row justify-content-around">
      <div className="col-sm-12 col-md-5">
        <SignUp />
      </div>
      <div className="col-sm-12 col-md-5 ">
        <LogIn />
      </div>
    </div>
  );
}

export default WelcomePage;
