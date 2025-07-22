import { useState } from 'react';
import { FaTimes, FaTrashAlt, FaEye, FaCheck, FaClock, FaTimesCircle, FaSearch, FaFilter } from 'react-icons/fa';
import { useAuth } from '../../../contextApi/contextApi';
import { FiUser } from 'react-icons/fi';

const Applications = () => {
  const { language } = useAuth();
  const isArabic = language === "ar";

  // Translations
  const text = {
    en: {
      title: "Application Management",
      subtitle: "Review and manage student applications",
      stats: {
        total: "Total Applications",
        approved: "Approved",
        pending: "Pending"
      },
      tableHeaders: {
        id: "ID",
        applicant: "Applicant",
        university: "University",
        program: "Program",
        status: "Status",
        date: "Date",
        actions: "Actions"
      },
      modal: {
        detailsTitle: "Application Details",
        personalInfo: "Personal Information",
        documents: "Documents",
        editStatus: "Edit Status",
        saveChanges: "Save Changes",
        notProvided: "Not provided",
        viewDocument: "View Document"
      },
      deleteModal: {
        title: "Confirm Deletion",
        message: "Are you sure you want to delete this application? This action cannot be undone.",
        cancel: "Cancel",
        delete: "Delete Application"
      },
      searchPlaceholder: "Search applications...",
      filterAll: "All Status",
      statuses: {
        pending: "Pending",
        approved: "Approved",
        rejected: "Rejected"
      }
    },
    ar: {
      title: "إدارة الطلبات",
      subtitle: "مراجعة وإدارة طلبات الطلاب",
      stats: {
        total: "إجمالي الطلبات",
        approved: "المقبولة",
        pending: "المعلقة"
      },
      tableHeaders: {
        id: "الرقم",
        applicant: "المتقدم",
        university: "الجامعة",
        program: "البرنامج",
        status: "الحالة",
        date: "التاريخ",
        actions: "الإجراءات"
      },
      modal: {
        detailsTitle: "تفاصيل الطلب",
        personalInfo: "المعلومات الشخصية",
        documents: "المستندات",
        editStatus: "تعديل الحالة",
        saveChanges: "حفظ التغييرات",
        notProvided: "غير متوفر",
        viewDocument: "عرض المستند"
      },
      deleteModal: {
        title: "تأكيد الحذف",
        message: "هل أنت متأكد أنك تريد حذف هذا الطلب؟ لا يمكن التراجع عن هذا الإجراء.",
        cancel: "إلغاء",
        delete: "حذف الطلب"
      },
      searchPlaceholder: "ابحث في الطلبات...",
      filterAll: "كل الحالات",
      statuses: {
        pending: "معلق",
        approved: "مقبول",
        rejected: "مرفوض"
      }
    }
  };

  const t = text[language] || text.en;

  // Sample data - replace with your actual data
  const [applications, setApplications] = useState([
    {
      id: 1,
      cnic: '12345-1234567-1',
      name: isArabic ? 'علي خان' : 'Ali Khan',
      university: isArabic ? 'جامعة البنجاب' : 'Punjab University',
      program: isArabic ? 'بكالوريوس علوم الحاسوب' : 'BSCS',
      date: '2025-07-10',
      status: 'Pending',
      fullForm: {
        firstName: isArabic ? 'علي' : 'Ali',
        lastName: isArabic ? 'خان' : 'Khan',
        fatherName: isArabic ? 'أسلم خان' : 'Aslam Khan',
        motherName: isArabic ? 'فاطمة خان' : 'Fatima Khan',
        email: 'ali@example.com',
        cnic: '12345-1234567-1',
        gender: isArabic ? 'ذكر' : 'Male',
        maritalStatus: isArabic ? 'أعزب' : 'Single',
        dob: '2000-01-01',
        nationality: isArabic ? 'باكستاني' : 'Pakistani',
        phoneNumber: '03001234567',
        birthPlace: isArabic ? 'لاهور' : 'Lahore',
        program: isArabic ? 'بكالوريوس علوم الحاسوب' : 'BS Computer Science',
        university: isArabic ? 'جامعة البنجاب' : 'Punjab University',
        course: isArabic ? 'علوم الحاسوب' : 'Computer Science',
        documents: {
          photo: 'https://example.com/photo.jpg',
          passportCopy: 'https://example.com/passport.jpg',
          secondaryCertificate: 'https://example.com/certificate.jpg',
          englishCompetence: 'https://example.com/english.jpg',
          bsDegreeCertificate: 'https://example.com/bs-degree.jpg',
          bsTranscript: 'https://example.com/bs-transcript.jpg',
          msCertificate: 'https://example.com/ms-certificate.jpg',
          msTranscript: 'https://example.com/ms-transcript.jpg',
          phdResearchProposal: 'https://example.com/phd-proposal.jpg',
          cv: 'https://example.com/cv.pdf'
        }
      },
    },
    {
      id: 2,
      cnic: '67890-1234567-2',
      name: isArabic ? 'سارة أحمد' : 'Sara Ahmed',
      university: isArabic ? 'جامعة فاست' : 'FAST NUCES',
      program: isArabic ? 'بكالوريوس إدارة الأعمال' : 'BBA',
      date: '2025-07-12',
      status: 'Approved',
      fullForm: {
        firstName: isArabic ? 'سارة' : 'Sara',
        lastName: isArabic ? 'أحمد' : 'Ahmed',
        fatherName: isArabic ? 'أحمد رضا' : 'Ahmed Raza',
        motherName: isArabic ? 'عائشة رضا' : 'Ayesha Raza',
        email: 'sara@example.com',
        cnic: '67890-1234567-2',
        gender: isArabic ? 'أنثى' : 'Female',
        maritalStatus: isArabic ? 'أعزب' : 'Single',
        dob: '1999-05-10',
        nationality: isArabic ? 'باكستاني' : 'Pakistani',
        phoneNumber: '03111234567',
        birthPlace: isArabic ? 'كراتشي' : 'Karachi',
        program: isArabic ? 'بكالوريوس إدارة الأعمال' : 'BBA',
        university: isArabic ? 'جامعة فاست' : 'FAST NUCES',
        course: isArabic ? 'إدارة الأعمال' : 'Business Administration',
        documents: {
          photo: 'https://example.com/photo.jpg',
          passportCopy: 'https://example.com/passport.jpg',
          secondaryCertificate: 'https://example.com/certificate.jpg',
          englishCompetence: 'https://example.com/english.jpg',
          bsDegreeCertificate: 'https://example.com/bs-degree.jpg',
          bsTranscript: 'https://example.com/bs-transcript.jpg',
          msCertificate: 'https://example.com/ms-certificate.jpg',
          msTranscript: 'https://example.com/ms-transcript.jpg',
          phdResearchProposal: 'https://example.com/phd-proposal.jpg',
          cv: 'https://example.com/cv.pdf'
        }
      },
    },
  ]);

  const [selectedApp, setSelectedApp] = useState(null);
  const [appToDelete, setAppToDelete] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [isEditing, setIsEditing] = useState(false);
  const [editedStatus, setEditedStatus] = useState('');

  const handleDeleteClick = (app) => {
    setAppToDelete(app);
  };

  const handleConfirmDelete = () => {
    setApplications(applications.filter(a => a.id !== appToDelete.id));
    setAppToDelete(null);
  };

  const handleCancelDelete = () => {
    setAppToDelete(null);
  };

  const handleSaveStatus = () => {
    setApplications(prev =>
      prev.map(app =>
        app.id === selectedApp.id ? { ...app, status: editedStatus } : app
      )
    );
    setSelectedApp(prev => (prev ? { ...prev, status: editedStatus } : prev));
    setIsEditing(false);
  };

  const statusBadge = status => {
    const base = 'px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 w-fit';
    const styles = {
      Approved: 'bg-green-100 text-green-800',
      Pending: 'bg-yellow-100 text-yellow-800',
      Rejected: 'bg-red-100 text-red-800',
    };
    const icons = {
      Approved: <FaCheck size={10} />,
      Pending: <FaClock size={10} />,
      Rejected: <FaTimesCircle size={10} />,
    };
    return (
      <span className={`${base} ${styles[status]}`}>
        {icons[status]}
        {t.statuses[status.toLowerCase()]}
      </span>
    );
  };

  const filteredApplications = applications.filter(app => {
    const matchesSearch =
      app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.cnic.includes(searchTerm) ||
      app.university.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.program.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const isImageUrl = url => url && /^https?:\/\//.test(url) && /\.(jpg|jpeg|png|gif)$/i.test(url);

  return (
    <div 
      className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 ${isArabic ? "text-right" : "text-left"}`}>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{t.title}</h1>
            <p className="text-gray-600">{t.subtitle}</p>
          </div>
          
          {/* Filters */}
          <div className={`flex flex-col sm:flex-row gap-3 w-full md:w-auto ${isArabic ? "sm:flex-row-reverse" : ""}`}>
            <div className="relative flex-1">
              <div className={`absolute inset-y-0 ${isArabic ? "right-0 pr-3" : "left-0 pl-3"} flex items-center pointer-events-none`}>
                <FaSearch className="text-gray-400" />
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
                <FaFilter className="text-gray-400" />
              </div>
              <select
                className={`appearance-none ${isArabic ? "pr-10 pl-8" : "pl-10 pr-8"} py-2 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-blue-500`}
                value={statusFilter}
                onChange={e => setStatusFilter(e.target.value)}
              >
                <option value="All">{t.filterAll}</option>
                <option value="Pending">{t.statuses.pending}</option>
                <option value="Approved">{t.statuses.approved}</option>
                <option value="Rejected">{t.statuses.rejected}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { 
              title: t.stats.total, 
              value: applications.length, 
              border: "border-blue-500", 
              bg: "bg-blue-100", 
              icon: (
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              ) 
            },
            { 
              title: t.stats.approved, 
              value: applications.filter(a => a.status === 'Approved').length, 
              border: "border-green-500", 
              bg: "bg-green-100", 
              icon: <FaCheck className="w-6 h-6 text-green-600" />
            },
            { 
              title: t.stats.pending, 
              value: applications.filter(a => a.status === 'Pending').length, 
              border: "border-yellow-500", 
              bg: "bg-yellow-100", 
              icon: <FaClock className="w-6 h-6 text-yellow-600" />
            }
          ].map((stat, index) => (
            <div 
              key={index} 
              className={`bg-white p-6 rounded-xl shadow-md border-t-4 ${stat.border} hover:shadow-lg transition-shadow`}
            >
              <div className={`flex justify-between items-start ${isArabic ? "flex-row-reverse" : ""}`}>
                <div className={isArabic ? "text-right" : "text-left"}>
                  <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                  <p className="text-3xl font-bold mt-1">{stat.value}</p>
                </div>
                <div className={`${stat.bg} p-3 rounded-full`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {[
                    { key: 'id', icon: null },
                    { key: 'applicant', icon: <FiUser /> },
                    { key: 'university', icon: null },
                    { key: 'program', icon: null },
                    { key: 'status', icon: <FaClock /> },
                    { key: 'date', icon: null },
                    { key: 'actions', icon: null }
                  ].map((header) => (
                    <th 
                      key={header.key}
                      scope="col" 
                      className="px-6 py-3 text-left text-sx font-seimbold text-gray-500 uppercase tracking-wider"
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
                {filteredApplications.map(app => (
                  <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{app.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`flex items-center ${isArabic ? "flex-row-reverse" : ""}`}>
                        <div className="flex-shrink-0 h-10 w-10">
                          {isImageUrl(app.fullForm.documents.photo) ? (
                            <img
                              src={app.fullForm.documents.photo}
                              alt={app.name}
                              className="h-10 w-10 rounded-full object-cover"
                              onError={e => (e.target.style.display = 'none')}
                            />
                          ) : (
                            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                              <span className="text-xs text-gray-500">{t.modal.notProvided}</span>
                            </div>
                          )}
                        </div>
                        <div className={isArabic ? "mr-4" : "ml-4"}>
                          <div className="text-sm font-medium text-gray-900">{app.name}</div>
                          <div className="text-sm text-gray-500">{app.cnic}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.university}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.program}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {statusBadge(app.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className={`flex ${isArabic ? "justify-start" : "justify-end"} space-x-2`}>
                        <button
                          onClick={() => {
                            setSelectedApp(app);
                            setEditedStatus(app.status);
                            setIsEditing(false);
                          }}
                          className="text-blue-600 hover:text-blue-900 p-1 rounded-full hover:bg-blue-50"
                          title={isArabic ? "عرض التفاصيل" : "View Details"}
                        >
                          <FaEye className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleDeleteClick(app)}
                          className="text-red-600 hover:text-red-900 p-1 rounded-full hover:bg-red-50"
                          title={isArabic ? "حذف" : "Delete"}
                        >
                          <FaTrashAlt className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Application Details Modal */}
        {selectedApp && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col" dir={isArabic ? "rtl" : "ltr"}>
              <div className="flex justify-between items-center border-b p-4 bg-gray-50">
                <h2 className="text-xl font-bold text-gray-800">{t.modal.detailsTitle}</h2>
                <button
                  onClick={() => {
                    setSelectedApp(null);
                    setIsEditing(false);
                  }}
                  className="text-gray-500 hover:text-red-600 p-1 rounded-full hover:bg-gray-100"
                >
                  <FaTimes size={20} />
                </button>
              </div>
              
              <div className="overflow-y-auto p-6">
                {/* Status editing */}
                <div className={`flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-lg ${isArabic ? "flex-row-reverse" : ""}`}>
                  <div>
                    <span className="font-medium">{t.tableHeaders.status}:</span>{' '}
                    {isEditing ? (
                      <select
                        value={editedStatus}
                        onChange={e => setEditedStatus(e.target.value)}
                        className={`${isArabic ? "mr-2" : "ml-2"} border px-3 py-1 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                      >
                        <option value="Pending">{t.statuses.pending}</option>
                        <option value="Approved">{t.statuses.approved}</option>
                        <option value="Rejected">{t.statuses.rejected}</option>
                      </select>
                    ) : (
                      <span className={isArabic ? "mr-2" : "ml-2"}>{statusBadge(selectedApp.status)}</span>
                    )}
                  </div>
                  <div className={`flex gap-2 ${isArabic ? "flex-row-reverse" : ""}`}>
                    {!isEditing ? (
                      <button
                        onClick={() => setIsEditing(true)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded-md transition-colors"
                      >
                        {t.modal.editStatus}
                      </button>
                    ) : (
                      <button
                        onClick={handleSaveStatus}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded-md transition-colors"
                      >
                        {t.modal.saveChanges}
                      </button>
                    )}
                  </div>
                </div>

                {/* Basic Info */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">{t.modal.personalInfo}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(selectedApp.fullForm).map(([key, value]) => {
                      if (key === 'documents') return null;
                      return (
                        <div key={key} className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-sm font-medium text-gray-500 capitalize">
                            {key.replace(/([A-Z])/g, ' $1')}
                          </div>
                          <div className="mt-1 text-gray-900">
                            {value || <span className="text-gray-400">{t.modal.notProvided}</span>}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Documents */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">{t.modal.documents}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.entries(selectedApp.fullForm.documents).map(([key, url]) => (
                      <div key={key} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                        <div className="p-3 bg-gray-50 border-b">
                          <div className="font-medium text-sm capitalize">
                            {key.replace(/([A-Z])/g, ' $1')}
                          </div>
                        </div>
                        <div className="p-3">
                          {isImageUrl(url) ? (
                            <img
                              src={url}
                              alt={key}
                              className="w-full h-40 object-contain rounded-md bg-gray-100"
                              onError={e => (e.target.style.display = 'none')}
                            />
                          ) : (
                            <a
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline"
                            >
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                              {t.modal.viewDocument}
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {appToDelete && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden" dir={isArabic ? "rtl" : "ltr"}>
              <div className="flex justify-between items-center border-b p-4 bg-gray-50">
                <h2 className="text-xl font-bold text-gray-800">{t.deleteModal.title}</h2>
                <button
                  onClick={handleCancelDelete}
                  className="text-gray-500 hover:text-red-600 p-1 rounded-full hover:bg-gray-100"
                >
                  <FaTimes size={20} />
                </button>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <div className={`flex items-center mb-4 ${isArabic ? "flex-row-reverse" : ""}`}>
                    <div className={`flex-shrink-0 h-12 w-12 ${isArabic ? "ml-4" : "mr-4"}`}>
                      {isImageUrl(appToDelete.fullForm.documents.photo) ? (
                        <img
                          src={appToDelete.fullForm.documents.photo}
                          alt={appToDelete.name}
                          className="h-12 w-12 rounded-full object-cover"
                          onError={e => (e.target.style.display = 'none')}
                        />
                      ) : (
                        <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-xs text-gray-500">{t.modal.notProvided}</span>
                        </div>
                      )}
                    </div>
                    <div className={isArabic ? "text-right" : "text-left"}>
                      <h3 className="text-lg font-semibold text-gray-900">{appToDelete.name}</h3>
                      <p className="text-gray-600">{appToDelete.cnic}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className={isArabic ? "text-right" : "text-left"}>
                      <p className="text-sm text-gray-500">{t.tableHeaders.university}</p>
                      <p className="font-medium">{appToDelete.university}</p>
                    </div>
                    <div className={isArabic ? "text-right" : "text-left"}>
                      <p className="text-sm text-gray-500">{t.tableHeaders.program}</p>
                      <p className="font-medium">{appToDelete.program}</p>
                    </div>
                    <div className={isArabic ? "text-right" : "text-left"}>
                      <p className="text-sm text-gray-500">{t.tableHeaders.status}</p>
                      <p>{statusBadge(appToDelete.status)}</p>
                    </div>
                    <div className={isArabic ? "text-right" : "text-left"}>
                      <p className="text-sm text-gray-500">{t.tableHeaders.date}</p>
                      <p className="font-medium">{appToDelete.date}</p>
                    </div>
                  </div>
                </div>

                <p className="text-red-600 font-medium mb-6">
                  {t.deleteModal.message}
                </p>

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
                  >
                    {t.deleteModal.delete}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Applications;