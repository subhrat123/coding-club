import { useState } from "react";

const AdminMembers = () => {
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
      <h1 className="text-2xl font-bold mb-4">Members Management</h1>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search members..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 p-2 border rounded"
        />
        
        <select onChange={(e) => setTeamFilter(e.target.value)} className="w-full md:w-1/4 p-2 border rounded">
          <option value="">All Teams</option>
          <option value="Engineering">Engineering</option>
          <option value="Marketing">Marketing</option>
          <option value="Sales">Sales</option>
        </select>

        <select onChange={(e) => setRoleFilter(e.target.value)} className="w-full md:w-1/4 p-2 border rounded">
          <option value="">All Roles</option>
          <option value="Admin">Admin</option>
          <option value="Member">Member</option>
          <option value="Guest">Guest</option>
        </select>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">Add Member</button>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <table className="table-auto w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Team</th>
              <th className="px-4 py-2 text-left">Role</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={index} className="border-b-2 border-gray-200">
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.team}</td>
                <td className="px-4 py-2">{user.role}</td>
                <td className="px-4 py-2">
                  <button className="bg-gray-200 text-black px-3 py-1 rounded">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminMembers;

