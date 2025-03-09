import { useState } from "react";

const MemberManagement = () => {
  const [search, setSearch] = useState("");
  const [teamFilter, setTeamFilter] = useState("");
  const [roleFilter, setRoleFilter] = useState("");

  const users = [
    { name: "Alice Johnson", email: "alice@example.com", team: "Engineering", role: "Admin" },
    { name: "Bob Smith", email: "bob@example.com", team: "Marketing", role: "Member" },
    { name: "Charlie Brown", email: "charlie@example.com", team: "Sales", role: "Guest" },
  ];

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) &&
      (teamFilter ? user.team === teamFilter : true) &&
      (roleFilter ? user.role === roleFilter : true)
  );

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-white text-2xl font-bold mb-4">Members Management</h1>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search members..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-[#141327] text-white w-full md:w-1/3 p-2 border rounded"
        />

        <select
          onChange={(e) => setTeamFilter(e.target.value)}
          className="w-full md:w-1/4 p-2 border rounded"
        >
          <option value="">All Teams</option>
          <option value="Engineering">Engineering</option>
          <option value="Marketing">Marketing</option>
          <option value="Sales">Sales</option>
        </select>

        <select
          onChange={(e) => setRoleFilter(e.target.value)}
          className="w-full md:w-1/4 p-2 border rounded"
        >
          <option value="">All Roles</option>
          <option value="Admin">Admin</option>
          <option value="Member">Member</option>
          <option value="Guest">Guest</option>
        </select>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">Add Member</button>
      </div>

      <div className="bg-[#141327] text-white p-4 rounded-lg shadow-md">
        <table className="w-full border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-800">
              <th className="border border-gray-700 px-4 py-2">Name</th>
              <th className="border border-gray-700 px-4 py-2">Email</th>
              <th className="border border-gray-700 px-4 py-2">Team</th>
              <th className="border border-gray-700 px-4 py-2">Role</th>
              <th className="border border-gray-700 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={index} className="odd:bg-gray-900 even:bg-gray-800">
                <td className="border border-gray-700 px-4 py-2">{user.name}</td>
                <td className="border border-gray-700 px-4 py-2">{user.email}</td>
                <td className="border border-gray-700 px-4 py-2">{user.team}</td>
                <td className="border border-gray-700 px-4 py-2">{user.role}</td>
                <td className="border border-gray-700 px-4 py-2">
                  <button className="bg-blue-600 text-white font-semibold px-3 py-1 rounded">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MemberManagement;
