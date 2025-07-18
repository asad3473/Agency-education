import { useState, useEffect } from 'react';
import UserProfile from '../components/UserProfile';
import { FiUser, FiMail, FiShield, FiActivity, FiEye, FiTrash2, FiX } from 'react-icons/fi';
import axios from 'axios';

const Users = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [loading, setLoading] = useState(false)
  const [deleteLoading, setDeleteLoading]= useState(false)
  const [userDeleteId, setUserDeleteId] = useState(null);
  const [users, setUsers] = useState([]);
  const [updatedUsers,setUpdatedUsers] = useState(null)
  const [userCount, setUserCount] = useState({
  user: 0,
  activeUsers: 0,
  inactiveUsers: 0,
  admin: 0,
})

  const handleViewProfile = (user) => {
    setSelectedUser(user);
    setShowProfile(true);
  };



  // const handleUpdateUser = (updatedUser) => {
  //   setSelectedUser(updatedUser);
  // };

  const handleDeleteClick = (userId) => {
    setShowDeleteModal(true);
    setUserDeleteId(userId)
  };

  const handleConfirmDelete = async() => {
    try {
      console.log("user Id:: ", userDeleteId)
        setDeleteLoading(true);
        // Get user stats (active/inactive/admin)
        const deleteRes = await axios.delete("http://localhost:8000/api/v1/admin/delete-user",
           {data:{userDeleteId} },
           {
          withCredentials: true,
        }
      )
      setUpdatedUsers(deleteRes)
       
        setDeleteLoading(false)
      } catch (err) {
        setDeleteLoading(false);
        if (err.response?.status === 401) {
          console.log("❌ Unauthorized:", err.response.status);
        } else {
          console.error("Unexpected error:", err);
        }
      }

    setShowDeleteModal(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };

useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Get user stats (active/inactive/admin)
        const statsRes = await axios.get("http://localhost:8000/api/v1/admin/users", {
          withCredentials: true,
        });

        // Set state
        setUserCount(statsRes.data.data);

        setLoading(false);

      } catch (err) {
        setLoading(false);
        if (err.response?.status === 401) {
          console.log("❌ Unauthorized:", err.response.status);
          setUsers(null);
        } else {
          console.error("Unexpected error:", err);
        }
      }
    };

    fetchData();
  }, [updatedUsers]);

 //console.log("User count (from userCount)::",userCount);
   //     console.log("Users list (from users):", users);
  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-xl sm:text-3xl font-bold text-gray-800">User Management</h1>
            <p className="text-gray-600 mt-1">Manage all system users and their permissions</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Users</p>
                <p className="text-2xl font-bold mt-1">
                  {loading? "Loading" :userCount.user}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <FiUser className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-500">Active Users</p>
                <p className="text-2xl font-bold mt-1">
                  {loading? "Loading" :userCount.activeUsers}
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <FiActivity className="w-5 h-5 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-500">Admins</p>
                <p className="text-2xl font-bold mt-1">
                 {loading? "Loading" :userCount.admin}
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <FiShield className="w-5 h-5 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-500">Inactive Users</p>
                <p className="text-2xl font-bold mt-1">
                 {loading? "Loading" :userCount.inactiveUsers}
                </p>
              </div>
              <div className="bg-red-100 p-3 rounded-full">
                <FiActivity className="w-5 h-5 text-red-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-sx font-bold text-gray-500 uppercase tracking-wider">
                    <div className="flex items-center">
                      <FiUser className="mr-2" /> Name
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-sx font-bold text-gray-500 uppercase tracking-wider">
                    <div className="flex items-center">
                      <FiMail className="mr-2" /> Email
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-sx font-bold text-gray-500 uppercase tracking-wider">
                    <div className="flex items-center">
                      <FiShield className="mr-2" /> Role
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-sx font-bold text-gray-500 uppercase tracking-wider">
                    <div className="flex items-center">
                      <FiActivity className="mr-2" /> Status
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-4 text-right text-sx font-bold text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {loading? <td>Loading</td> : userCount.allUsers?.map((user) => (
                  <tr key={user._id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          {user.avatar ? (
                            <img
                              src={user.avatar}
                              alt={user.firstName}
                              className="h-10 w-10 rounded-full object-cover"
                            />
                          ) : (
                            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white flex items-center justify-center font-bold">
                              {user.firstName.charAt(0)}
                            </div>
                          )}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{user.firstName}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center">
                        <FiMail className="mr-2 text-gray-400" />
                        {user.email}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${user.role === 'Admin' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'}`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {/* <span className={`px-3 py-1 rounded-full text-xs font-semibold ${ === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {user.status}
                      </span> */}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <button
                          onClick={() => handleViewProfile(user)}
                          className="text-blue-600 hover:text-blue-900 p-2 rounded-full hover:bg-blue-50 transition-colors"
                          title="View Profile"
                        >
                          <FiEye className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDeleteClick(user._id)}
                          className="text-red-600 hover:text-red-900 p-2 rounded-full hover:bg-red-50 transition-colors"
                          title="Delete User"
                        >
                          <FiTrash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Profile Modal */}
        {showProfile && selectedUser && (
          <UserProfile
            user={selectedUser}
            onClose={() => setShowProfile(false)}
           // onEdit={handleUpdateUser}
          />
        )}
    
        {/* Delete Confirmation Modal */}
        {showDeleteModal && users && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-gray-800">Confirm Deletion</h3>
                <button 
                  onClick={handleCancelDelete}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>
              
              <div className="mb-6">
                {/* <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 h-12 w-12 mr-4">
                    {users.avatar ? (
                      <img
                        src={users.avatar}
                        alt={users.firstName}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                    ) : (
                      <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white flex items-center justify-center font-bold text-xl">
                        {users.firstName.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{users.firstName}</h4>
                    <p className="text-gray-600">{users.email}</p>
                  </div>
                </div> */}

                {/* <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Role</p>
                    <p className={`px-3 py-1 rounded-full text-xs font-semibold inline-block ${users.role === 'Admin' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'}`}>
                      {users.role}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Status</p>
                    <p className={`px-3 py-1 rounded-full text-xs font-semibold inline-block ${userToDelete.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {userToDelete.status}
                    </p>
                  </div>
                </div> */}
              </div>

              <p className="text-gray-600 mb-6">
                Are you sure you want to delete this user? This action cannot be undone.
              </p>
              
              <div className="flex justify-end space-x-3">
                <button
                  onClick={handleConfirmDelete}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                {deleteLoading ? "deleting..." : "delete"}
                </button>

                <button
                  onClick={handleCancelDelete}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;