const updateUser = (state, action) => {

  if (state === undefined)
    return {
      email: null,
      username: null,
      token: null,
      loading: false
    };

  switch (action.type) {
    case 'USER_LOGIN_REQUEST':
    case 'USER_SIGNUP_REQUEST':
    case 'USER_UPDATE_REQUEST':
      return {
        ...state.user,
        loading: true
      }

    case 'USER_LOGIN_SUCCESS':
      return {
        email: action.payload.email,
        username: action.payload.username,
        token: action.payload.token,
        loading: false
      }

    case 'USER_SIGNUP_SUCCESS':
      return {
        email: action.payload.email,
        username: action.payload.username,
        token: action.payload.token,
        loading: false
      }

    case 'USER_UPDATE_SUCCESS':
      return {
        ...state.user,
        email: action.payload.email,
        loading: false
      }

    case 'USER_ERROR':
      return {
        ...state.user,
        loading: false,
        error: action.payload
      }

    default:
      return state.user;
  }
}

export default updateUser;
