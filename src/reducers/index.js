import updateUser from './user';

const reducer = (state, action) => {
  console.log(action.type);
  return {
    user: updateUser(state, action)
  };
}

export default reducer;
