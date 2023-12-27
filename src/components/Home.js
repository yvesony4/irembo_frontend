import React from "react";

import HeaderDash from "./dashboard/Header.js";
import Sidebar from "./dashboard/Sidebar.js";
import UserTable from "./dashboard/UserTable.js";
import logo from "../images/irembo_logo.png";

function Home() {
  const user = {
    username: "JohnDoe",
    profilePhoto: { logo },
  };

  const enrolledUsers = [
    { id: 1, name: "User 1", email: "user1@example.com" },
    { id: 2, name: "User 2", email: "user2@example.com" },
    // Add more user data as needed
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <HeaderDash username={user.username} profilePhoto={user.profilePhoto} />
        <img src={logo} alt="Logo" className="h-16 w-auto mx-auto mt-4" />
        <UserTable users={enrolledUsers} />
      </div>
    </div>
  );
}

export default Home;
