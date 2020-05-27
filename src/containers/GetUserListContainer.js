import { connect } from 'react-redux';
import UserList from '../components/UserList';

const mapStateToProps = (state) => {
  const length = state.users.length;
  const currentState = state.users[length - 1];
  return { users: currentState.userState };
};

const GetPostList = connect(
  mapStateToProps
)(UserList);

export default GetPostList;

