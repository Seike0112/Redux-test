import React from 'react';

const Price = ({ users }) => (
  <div>
    {users.map((user, index) =>
      <div>{user.price}</div>
    )}
  </div>
);

export default Price;