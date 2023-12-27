import React from "react";

const LoggedIn = ({ username, handleLogout }) => {
  return (
    <div>
      <h2>Welcome, {username}!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LoggedIn;
