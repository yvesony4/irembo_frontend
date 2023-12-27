import React from "react";

const UserTable = ({ users }) => (
  <div className="p-4">
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">Name</th>
          <th className="py-2 px-4 border-b">Email</th>
          {/* Add more table headers as needed */}
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td className="py-2 px-4 border-b">{user.name}</td>
            <td className="py-2 px-4 border-b">{user.email}</td>
            {/* Add more table cells as needed */}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default UserTable;
