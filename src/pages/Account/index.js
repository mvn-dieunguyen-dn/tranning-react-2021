import React from 'react';
import useAuth from '../../hooks/useAuth';

function Account(props) {
  const auth = useAuth()
  return (
    <div className="page-account">
      <h1>This is Account page</h1>
      <div className="btn-group">
        <button className="btn" onClick={ auth.logout }>Logout</button>
      </div>
    </div>
  );
}

export default Account;