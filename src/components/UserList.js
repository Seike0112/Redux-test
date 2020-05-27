import React from 'react';
import User from './User';

const UserList = ({ users }) => (
  <ul>
    <hr></hr>
    {users.map((user, index) =>
      <User key={index} user={user} />
    )}
  </ul>
);

export default UserList;