import React from "react";

const Header = ({ username, profilePhoto }) => (
  <div className="flex flex-col items-end p-4">
    <div className="flex items-center space-x-2">
      <img src={profilePhoto} alt="Profile" className="w-8 h-8 rounded-full" />
      <span className="text-gray-700">{username}</span>
    </div>
    <button
      onClick={() => {
        // Add your logout logic here
        console.log("Logout clicked");
      }}
      className="text-gray-500 hover:text-gray-700 cursor-pointer"
    >
      Logout
    </button>
  </div>
);

export default Header;
