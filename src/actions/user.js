const userError = (error) => {
  return {
    type: 'USER_ERROR',
    payload: error
  }
}

const userLoginRequest = () => {
  return {
    type: 'USER_LOGIN_REQUEST'
  }
}

const userLoginSuccess = (user) => {
  return {
    type: 'USER_LOGIN_SUCCESS',
    payload: user
  }
}

const userSignupRequest = () => {
  return {
    type: 'USER_SIGNUP_REQUEST'
  }
}

const userSignupSuccess = (user) => {
  return {
    type: 'USER_SIGNUP_SUCCESS',
    payload: user
  }
}

const userUpdateRequest = () => {
  return {
    type: 'USER_UPDATE_REQUEST'
  };
};

const userUpdateSuccess = (object) => {
  return {
    type: 'USER_UPDATE_SUCCESS',
    payload: object
  };
};

const logInUser = (userService, dispatch, { username, password }) => {
  dispatch(userLoginRequest());
  userService.logIn({ username, password })
    .then(user => dispatch(userLoginSuccess(user)))
    .catch(err => dispatch(userError(err)));
}

const signUpUser = (userService, dispatch, { email, username, password }) => {
  dispatch(userSignupRequest());
  userService.signUp({ email, username, password })
    .then(user => dispatch(userSignupSuccess(user)))
    .catch(err => dispatch(userError(err)));
}

const updateUser = (userService, dispatch, { email }) => {
  dispatch(userUpdateRequest());
  userService.updateUser({ email })
    .then(() => dispatch(userUpdateSuccess()))
    .catch(err => dispatch(userError(err)))
}

export {
  logInUser,
  signUpUser,
  updateUser
};
