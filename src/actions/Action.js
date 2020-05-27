import axios from 'axios';

export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
const getPostsRequest = () => {
  return {
    type: GET_POSTS_REQUEST
  }
};

export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const getPostsSuccess = (json) => {
  return {
    type: GET_POSTS_SUCCESS,
    users: json,
    receiveAt: Date.now()
  }
};

export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';
const getPostsFailure = (error) => {
  return {
    type: GET_POSTS_FAILURE,
    error
  }
};

export const getUsers = () => {
  return (dispatch) => {
    dispatch(getPostsRequest())
    return axios.get(`http://localhost:3001/users`)
      .then(res =>
        dispatch(getPostsSuccess(res.data))
      ).catch(err =>
        dispatch(getPostsFailure(err))
      )
  };
};