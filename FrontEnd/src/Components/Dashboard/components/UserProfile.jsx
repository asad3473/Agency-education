import { useState, useEffect } from 'react';

const UserProfile = ({ user, onClose, onEdit }) => {
  const [editData, setEditData] = useState(user);
  const [roleChanged, setRoleChanged] = useState(false);

  useEffect(() => {
    setEditData(user);
    setRoleChanged(false);
  }, [user]);

  const handleRoleChange = (e) => {
    setEditData({ ...editData, role: e.target.value });
    setRoleChanged(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (roleChanged) {
      onEdit({ ...user, role: editData.role });
      setRoleChanged(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-md">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 relative">
          <div className="absolute top-4 right-4 space-x-2 flex">
            <button
              onClick={onClose}
              className="text-white hover:text-indigo-200 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-20 w-20 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-white text-3xl font-bold mb-3">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <h2 className="text-xl font-bold text-white">{user.name}</h2>
            <p className="text-indigo-100 text-sm mt-1">{user.role}</p>
          </div>
        </div>

        {/* Body */}
        <form onSubmit={handleSave} className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-3 rounded-lg">
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider">Name</label>
              <p className="mt-1 text-sm text-gray-900 font-medium">{user.name}</p>
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
                name="role"
                value={editData.role}
                onChange={handleRoleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="Admin">Admin</option>
                <option value="User">User</option>
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
              disabled={!roleChanged}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;

