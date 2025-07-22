import { useState, useEffect } from 'react';
import UserProfile from '../components/UserProfile';
import { FiUser, FiMail, FiShield, FiActivity, FiEye, FiTrash2, FiX, FiSearch, FiFilter } from 'react-icons/fi';
import { FaCheck, FaTimesCircle } from 'react-icons/fa';
import axios from 'axios';
import { useAuth } from '../../../contextApi/contextApi';

const Users = () => {
  const { language } = useAuth();
  const isArabic = language === "ar";

  // Translations object
  const translations = {
    en: {
      loading: "Loading...",
      noResults: "No results found",
      title: "User Management",
      subtitle: "Manage all system users and their permissions",
      stats: {
        total: "Total Users",
        active: "Active Users",
        inactive: "Inactive Users",
        admins: "Admins"
      },
      tableHeaders: {
        name: "Name",
        email: "Email",
        role: "Role",
        status: "Status",
        actions: "Actions"
      },
      statuses: {
        active: "Active",
        inactive: "Inactive"
      },
      roles: {
        admin: "Admin",
        user: "User"
      },
      searchPlaceholder: "Search users...",
      filterAll: "All Status",
      deleteModal: {
        title: "Confirm Deletion",
        message: "Are you sure you want to delete this user? This action cannot be undone.",
        cancel: "Cancel",
        delete: "Delete User",
        deleting: "Deleting..."
      },
      viewProfile: "View Profile",
      deleteUser: "Delete User"
    },
    ar: {
      loading: "جاري التحميل...",
      noResults: "لا توجد نتائج",
      title: "إدارة المستخدمين",
      subtitle: "إدارة جميع مستخدمي النظام وصلاحياتهم",
      stats: {
        total: "إجمالي المستخدمين",
        active: "المستخدمون النشطون",
        inactive: "المستخدمون غير النشطين",
        admins: "المشرفون"
      },
      tableHeaders: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        role: "الدور",
        status: "الحالة",
        actions: "الإجراءات"
      },
      statuses: {
        active: "نشط",
        inactive: "غير نشط"
      },
      roles: {
        admin: "مشرف",
        user: "مستخدم"
      },
      searchPlaceholder: "ابحث عن المستخدمين...",
      filterAll: "كل الحالات",
      deleteModal: {
        title: "تأكيد الحذف",
        message: "هل أنت متأكد أنك تريد حذف هذا المستخدم؟ لا يمكن التراجع عن هذا الإجراء.",
        cancel: "إلغاء",
        delete: "حذف المستخدم",
        deleting: "جاري الحذف..."
      },
      viewProfile: "عرض الملف الشخصي",
      deleteUser: "حذف المستخدم"
    }
  };

  // Get translations for current language
  const t = translations[language] || translations.en;

  const [selectedUser, setSelectedUser] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [userDeleteId, setUserDeleteId] = useState(null);
  const [updatedUsers, setUpdatedUsers] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  
  const [userCount, setUserCount] = useState({
    user: 0,
    activeUsers: 0,
    inactiveUsers: 0,
    admin: 0,
    allUsers: []
  });

  const handleViewProfile = (user) => {
    setSelectedUser(user);
    setShowProfile(true);
  };

  const handleDeleteClick = (userId) => {
    setShowDeleteModal(true);
    setUserDeleteId(userId);
  };

  const handleConfirmDelete = async () => {
    try {
      setDeleteLoading(true);
      const deleteRes = await axios.delete(
        "http://localhost:8000/api/v1/admin/delete-user",
        { data: { userDeleteId } },
        { withCredentials: true }
      );
      setUpdatedUsers(deleteRes);
      setDeleteLoading(false);
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
        const statsRes = await axios.get("http://localhost:8000/api/v1/admin/users", {
          withCredentials: true,
        });
        setUserCount(statsRes.data.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        if (err.response?.status === 401) {
          console.log("❌ Unauthorized:", err.response.status);
        } else {
          console.error("Unexpected error:", err);
        }
      }
    };
    fetchData();
  }, [updatedUsers]);

  const statusBadge = (status) => {
    const base = 'px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 w-fit';
    const styles = {
      active: 'bg-green-100 text-green-800',
      inactive: 'bg-red-100 text-red-800'
    };
    const icons = {
      active: <FaCheck size={10} />,
      inactive: <FaTimesCircle size={10} />
    };
    return (
      <span className={`${base} ${styles[status]}`}>
        {icons[status]}
        {t.statuses[status]}
      </span>
    );
  };

  const roleBadge = (role) => {
    const base = 'px-3 py-1 rounded-full text-xs font-semibold';
    const styles = {
      admin: 'bg-purple-100 text-purple-800',
      user: 'bg-blue-100 text-blue-800'
    };
    return (
      <span className={`${base} ${styles[role]}`}>
        {t.roles[role]}
      </span>
    );
  };

  const filteredUsers = userCount.allUsers?.filter(user => {
    const matchesSearch =
      user.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || 
      (statusFilter === 'Active' ? user.active : !user.active);
    return matchesSearch && matchesStatus;
  });

  return (
    <div 
      className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 ${isArabic ? "text-right" : "text-left"}`}>
          <div>
            <h1 className="text-xl sm:text-3xl font-bold text-gray-800">{t.title}</h1>
            <p className="text-gray-600 mt-1">{t.subtitle}</p>
          </div>
          
          {/* Filters */}
          <div className={`flex flex-col sm:flex-row gap-3 w-full md:w-auto ${isArabic ? "sm:flex-row-reverse" : ""}`}>
            <div className="relative flex-1">
              <div className={`absolute inset-y-0 ${isArabic ? "right-0 pr-3" : "left-0 pl-3"} flex items-center pointer-events-none`}>
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                className={`${isArabic ? "pr-10 pl-4" : "pl-10 pr-4"} py-2 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <div className={`absolute inset-y-0 ${isArabic ? "right-0 pr-3" : "left-0 pl-3"} flex items-center pointer-events-none`}>
                <FiFilter className="text-gray-400" />
              </div>
              <select
                className={`appearance-none ${isArabic ? "pr-10 pl-8" : "pl-10 pr-8"} py-2 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-blue-500`}
                value={statusFilter}
                onChange={e => setStatusFilter(e.target.value)}
              >
                <option value="All">{t.filterAll}</option>
                <option value="Active">{t.statuses.active}</option>
                <option value="Inactive">{t.statuses.inactive}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { 
              title: t.stats.total, 
              value: userCount.user, 
              border: "border-blue-500", 
              bg: "bg-blue-100", 
              icon: <FiUser className="w-6 h-6 text-blue-600" />
            },
            { 
              title: t.stats.active, 
              value: userCount.activeUsers, 
              border: "border-green-500", 
              bg: "bg-green-100", 
              icon: <FiActivity className="w-6 h-6 text-green-600" />
            },
            { 
              title: t.stats.admins, 
              value: userCount.admin, 
              border: "border-purple-500", 
              bg: "bg-purple-100", 
              icon: <FiShield className="w-6 h-6 text-purple-600" />
            },
            { 
              title: t.stats.inactive, 
              value: userCount.inactiveUsers, 
              border: "border-red-500", 
              bg: "bg-red-100", 
              icon: <FiActivity className="w-6 h-6 text-red-600" />
            }
          ].map((stat, index) => (
            <div 
              key={index} 
              className={`bg-white p-6 rounded-xl shadow-sm border-l-4 ${stat.border}`}
            >
              <div className={`flex justify-between items-center ${isArabic ? "flex-row-reverse" : ""}`}>
                <div className={isArabic ? "text-right" : "text-left"}>
                  <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                  <p className="text-2xl font-bold mt-1">
                    {loading ? t.loading : stat.value}
                  </p>
                </div>
                <div className={`${stat.bg} p-3 rounded-full`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {[
                    { key: 'name', icon: <FiUser /> },
                    { key: 'email', icon: <FiMail /> },
                    { key: 'role', icon: <FiShield /> },
                    { key: 'status', icon: <FiActivity /> },
                    { key: 'actions', icon: null }
                  ].map((header) => (
                    <th 
                      key={header.key}
                      scope="col" 
                      className="px-6 py-3 text-left text-sx font-bold text-gray-500 uppercase tracking-wider"
                    >
                      <div className={`flex items-center ${isArabic ? "flex-row-reverse" : ""} ${header.key === 'actions' ? "justify-end" : ""}`}>
                        {header.icon && (
                          <span className={isArabic ? "ml-2" : "mr-2"}>
                            {header.icon}
                          </span>
                        )}
                        {t.tableHeaders[header.key]}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {loading ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-4 text-center">
                      {t.loading}
                    </td>
                  </tr>
                ) : filteredUsers?.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                      {t.noResults}
                    </td>
                  </tr>
                ) : (
                  filteredUsers?.map((user) => (
                    <tr key={user._id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className={`flex items-center ${isArabic ? "flex-row-reverse" : ""}`}>
                          <div className="flex-shrink-0 h-10 w-10">
                            {user.avatar ? (
                              <img
                                src={user.avatar}
                                alt={user.firstName}
                                className="h-10 w-10 rounded-full object-cover"
                              />
                            ) : (
                              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white flex items-center justify-center font-bold">
                                {user.firstName?.charAt(0)}
                              </div>
                            )}
                          </div>
                          <div className={isArabic ? "mr-4" : "ml-4"}>
                            <div className="text-sm font-medium text-gray-900">{user.firstName}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className={`flex items-center ${isArabic ? "flex-row-reverse" : ""}`}>
                          <FiMail className={isArabic ? "ml-2 text-gray-400" : "mr-2 text-gray-400"} />
                          {user.email}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {roleBadge(user.role?.toLowerCase())}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {statusBadge(user.active ? 'active' : 'inactive')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className={`flex ${isArabic ? "justify-start" : "justify-end"} space-x-2`}>
                          <button
                            onClick={() => handleViewProfile(user)}
                            className="text-blue-600 hover:text-blue-900 p-2 rounded-full hover:bg-blue-50 transition-colors"
                            title={t.viewProfile}
                          >
                            <FiEye className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleDeleteClick(user._id)}
                            className="text-red-600 hover:text-red-900 p-2 rounded-full hover:bg-red-50 transition-colors"
                            title={t.deleteUser}
                          >
                            <FiTrash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Profile Modal */}
        {showProfile && selectedUser && (
          <UserProfile
            user={selectedUser}
            onClose={() => setShowProfile(false)}
            isArabic={isArabic}
            translations={t}
          />
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6" dir={isArabic ? "rtl" : "ltr"}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-gray-800">{t.deleteModal.title}</h3>
                <button
                  onClick={handleCancelDelete}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              <div className="mb-6">
                <p className="text-gray-600">
                  {t.deleteModal.message}
                </p>
              </div>

              <div className={`flex ${isArabic ? "flex-row-reverse" : ""} justify-end space-x-3`}>
                <button
                  onClick={handleCancelDelete}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  {t.deleteModal.cancel}
                </button>
                <button
                  onClick={handleConfirmDelete}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  disabled={deleteLoading}
                >
                  {deleteLoading ? t.deleteModal.deleting : t.deleteModal.delete}
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