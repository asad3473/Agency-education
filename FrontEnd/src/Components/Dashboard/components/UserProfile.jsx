import { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = ({ user, onClose /*, setUpdatedUsers */ }) => {
  const [editData, setEditData] = useState(user);
  const [roleChanged, setRoleChanged] = useState(user.role);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setEditData(user?._id);
    setRoleChanged(user.role);
  }, [user]);

  const changedRole = async () => {
    setLoading(true);
    console.log("🔄 Changing role for user ID:", editData);
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/admin/update-role",
        { editData, roleChanged },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      );

      console.log("✅ Role update response:", res.data);

      // Optional: update state in parent
      // if (setUpdatedUsers) setUpdatedUsers(res.data);

      setLoading(false);
      onClose();
    } catch (err) {
      console.error("❌ Role update failed:", err.response?.data || err.message);
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    >
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-md">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 relative">
          <div className="absolute top-4 right-4 space-x-2 flex">
            <button
              onClick={onClose}
              type="button"
              className="text-white hover:text-indigo-200 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-20 w-20 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-white text-3xl font-bold mb-3">
              {user.firstName?.charAt(0).toUpperCase()}
            </div>
            <h2 className="text-xl font-bold text-white">{user.firstName}</h2>
            <p className="text-indigo-100 text-sm mt-1">{user.role}</p>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-3 rounded-lg">
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider">Name</label>
              <p className="mt-1 text-sm text-gray-900 font-medium">{user.firstName}</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider">Email</label>
              <p className="mt-1 text-sm text-gray-900 font-medium">{user.email}</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg col-span-2">
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider">Status</label>
              <p className="mt-1">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  user.status === 'Active'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {user.status}
                </span>
              </p>
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">Role</label>
              <select
                value={roleChanged}
                onChange={(e) => setRoleChanged(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end border-t pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm font-medium rounded-md transition"
            >
              Close
            </button>
            <button
              type="submit"
              className="ml-3 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition"
              onClick={changedRole}
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
