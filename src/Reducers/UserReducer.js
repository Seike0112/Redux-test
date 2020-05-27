import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE
} from '../actions/Action';

const initialState = {
  isFetching: false,
  userState: []
};

const users = (state = [initialState], action) => {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return [
        ...state,
        {
          isFetching: true,
          userState: []
        }
      ];
    case GET_POSTS_SUCCESS:
      return [
        ...state,
        {
          isFetching: false,
          userState: action.users,
          lastUpdated: action.receivedAt
        }
      ]
    case GET_POSTS_FAILURE:
      return [
        ...state,
        {
          isFetching: false,
          error: action.error
        }
      ]
    default:
      return state
  };
};


export default users;