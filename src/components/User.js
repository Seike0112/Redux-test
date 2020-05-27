import React from 'react';

const User = ({ user }) => {

  return (
    <React.Fragment>
      <h1>ユーザーID：　{user.id}</h1>
      <h2>会員番号：　{user.user_number}</h2>
      <h2>お支払金額：　{user.user_price}円</h2>
      <hr></hr>
    </React.Fragment>
  )
}
  ;

export default User;