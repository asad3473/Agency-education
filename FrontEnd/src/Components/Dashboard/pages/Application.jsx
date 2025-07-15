import { useState } from 'react';
import { FaTimes, FaTrashAlt, FaEye, FaCheck, FaClock, FaTimesCircle, FaSearch, FaFilter } from 'react-icons/fa';

const Applications = () => {
  const [applications, setApplications] = useState([
    {
      id: 1,
      cnic: '12345-1234567-1',
      name: 'Ali Khan',
      university: 'Punjab University',
      program: 'BSCS',
      date: '2025-07-10',
      status: 'Pending',
      fullForm: {
        firstName: 'Ali',
        lastName: 'Khan',
        fatherName: 'Aslam Khan',
        motherName: 'Fatima Khan',
        email: 'ali@example.com',
        cnic: '12345-1234567-1',
        gender: 'Male',
        maritalStatus: 'Single',
        dob: '2000-01-01',
        nationality: 'Pakistani',
        phoneNumber: '03001234567',
        birthPlace: 'Lahore',
        program: 'BS Computer Science',
        university: 'Punjab University',
        course: 'Computer Science',
        documents: {
          photo: 'https://images.unsplash.com/photo-1742198832597-e43588e8ad28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8',
          passportCopy: 'https://images.unsplash.com/photo-1612365922929-eb3b5b4bddb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFzc3BvcnRDb3B5fGVufDB8fDB8fHww',
          secondaryCertificate: 'https://media.istockphoto.com/id/93177402/photo/happy-graduates.webp?a=1&b=1&s=612x612&w=0&k=20&c=ErVUPCbAXZwJ9ZKtxFNBaPn9RIorjf652wRHg5y8zFI=',
          englishCompetence: 'https://media.istockphoto.com/id/2158398318/photo/confident-student-smiling-at-friend.webp?a=1&b=1&s=612x612&w=0&k=20&c=_9LKy1I4qjbqlxGwTTv3-lGFd59wJvGKMnkigjIXwRY=',
          bsDegreeCertificate: 'https://media.istockphoto.com/id/1067505660/photo/certificate.webp?a=1&b=1&s=612x612&w=0&k=20&c=FkvEmUb0C24pDP-TGC4UmXzm1KfZuqDyKF2mMyuQ9iI=',
          bsTranscript: 'https://media.istockphoto.com/id/1021460044/photo/orf.webp?a=1&b=1&s=612x612&w=0&k=20&c=MVUsktzlisQpS2Sp_S8FsWGaN2RbMIIkmf1sQSZwmkc=',
          msCertificate: 'https://media.istockphoto.com/id/1055048530/photo/label-seal-of-made-in-mississippi.webp?a=1&b=1&s=612x612&w=0&k=20&c=C7qUql6X0Btc_LWlJZQA-p701Fc5rGShHPMLh0-QZbo=',
          msTranscript: 'https://media.istockphoto.com/id/1763174626/photo/screenwriter-holds-folder-of-documents-labeled-script.webp?a=1&b=1&s=612x612&w=0&k=20&c=Tz2deOOHVKd-TjIGd-q4u1g3qVMV0Ip3mEhUEavu_hc=',
          phdResearchProposal: 'https://media.istockphoto.com/id/184902657/photo/optical-glass-with-words-pr.webp?a=1&b=1&s=612x612&w=0&k=20&c=kp8mJImTyZwKUqHWNNgTkIZu7gYt9R-JH6F7ycQrRp4=',
          cv: 'https://images.unsplash.com/photo-1698047681432-006d2449c631?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3Z8ZW58MHx8MHx8fDA%3D'
        }
      },
    },
    {
      id: 2,
      cnic: '67890-1234567-2',
      name: 'Sara Ahmed',
      university: 'FAST NUCES',
      program: 'BBA',
      date: '2025-07-12',
      status: 'Approved',
      fullForm: {
        firstName: 'Sara',
        lastName: 'Ahmed',
        fatherName: 'Ahmed Raza',
        motherName: 'Ayesha Raza',
        email: 'sara@example.com',
        cnic: '67890-1234567-2',
        gender: 'Female',
        maritalStatus: 'Single',
        dob: '1999-05-10',
        nationality: 'Pakistani',
        phoneNumber: '03111234567',
        birthPlace: 'Karachi',
        program: 'BBA',
        university: 'FAST NUCES',
        course: 'Business Administration',
        documents: {
          photo: 'https://images.unsplash.com/photo-1742198832597-e43588e8ad28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8',
          passportCopy: 'https://images.unsplash.com/photo-1612365922929-eb3b5b4bddb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFzc3BvcnRDb3B5fGVufDB8fDB8fHww',
          secondaryCertificate: 'https://media.istockphoto.com/id/93177402/photo/happy-graduates.webp?a=1&b=1&s=612x612&w=0&k=20&c=ErVUPCbAXZwJ9ZKtxFNBaPn9RIorjf652wRHg5y8zFI=',
          englishCompetence: 'https://media.istockphoto.com/id/2158398318/photo/confident-student-smiling-at-friend.webp?a=1&b=1&s=612x612&w=0&k=20&c=_9LKy1I4qjbqlxGwTTv3-lGFd59wJvGKMnkigjIXwRY=',
          bsDegreeCertificate: 'https://media.istockphoto.com/id/1067505660/photo/certificate.webp?a=1&b=1&s=612x612&w=0&k=20&c=FkvEmUb0C24pDP-TGC4UmXzm1KfZuqDyKF2mMyuQ9iI=',
          bsTranscript: 'https://media.istockphoto.com/id/1021460044/photo/orf.webp?a=1&b=1&s=612x612&w=0&k=20&c=MVUsktzlisQpS2Sp_S8FsWGaN2RbMIIkmf1sQSZwmkc=',
          msCertificate: 'https://media.istockphoto.com/id/1055048530/photo/label-seal-of-made-in-mississippi.webp?a=1&b=1&s=612x612&w=0&k=20&c=C7qUql6X0Btc_LWlJZQA-p701Fc5rGShHPMLh0-QZbo=',
          msTranscript: 'https://media.istockphoto.com/id/1763174626/photo/screenwriter-holds-folder-of-documents-labeled-script.webp?a=1&b=1&s=612x612&w=0&k=20&c=Tz2deOOHVKd-TjIGd-q4u1g3qVMV0Ip3mEhUEavu_hc=',
          phdResearchProposal: 'https://media.istockphoto.com/id/184902657/photo/optical-glass-with-words-pr.webp?a=1&b=1&s=612x612&w=0&k=20&c=kp8mJImTyZwKUqHWNNgTkIZu7gYt9R-JH6F7ycQrRp4=',
          cv: 'https://images.unsplash.com/photo-1698047681432-006d2449c631?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3Z8ZW58MHx8MHx8fDA%3D'
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
        {status}
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

  const isImageUrl = url => url && /^https?:\/\//.test(url);

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Application Management</h1>
            <p className="text-gray-600">Review and manage student applications</p>
          </div>
          
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search applications..."
                className="pl-10 pr-4 py-2 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaFilter className="text-gray-400" />
              </div>
              <select
                className="appearance-none pl-10 pr-8 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-blue-500"               value={statusFilter}
                onChange={e => setStatusFilter(e.target.value)}
              >
                <option value="All">All Status</option>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Applications</p>
                <p className="text-3xl font-bold mt-1">{applications.length}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-500 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Approved</p>
                <p className="text-3xl font-bold mt-1">
                  {applications.filter(a => a.status === 'Approved').length}
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <FaCheck className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-yellow-500 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Pending</p>
                <p className="text-3xl font-bold mt-1">
                  {applications.filter(a => a.status === 'Pending').length}
                </p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <FaClock className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-sx font-seimbold text-gray-500 uppercase tracking-wider">ID</th>
                  <th scope="col" className="px-6 py-3 text-left text-sx font-seimbold text-gray-500 uppercase tracking-wider">Applicant</th>
                  <th scope="col" className="px-6 py-3 text-left text-sx font-seimbold text-gray-500 uppercase tracking-wider">University</th>
                  <th scope="col" className="px-6 py-3 text-left text-sx font-seimbold text-gray-500 uppercase tracking-wider">Program</th>
                  <th scope="col" className="px-6 py-3 text-left text-sx font-seimbold text-gray-500 uppercase tracking-wider">Status</th>
                  <th scope="col" className="px-6 py-3 text-left text-sx font-seimbold text-gray-500 uppercase tracking-wider">Date</th>
                  <th scope="col" className="px-6 py-3 text-right text-sx font-seimbold text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredApplications.map(app => (
                  <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{app.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
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
                              <span className="text-xs text-gray-500">No Photo</span>
                            </div>
                          )}
                        </div>
                        <div className="ml-4">
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
                      <div className="flex justify-end space-x-2">
                        <button
                          onClick={() => {
                            setSelectedApp(app);
                            setEditedStatus(app.status);
                            setIsEditing(false);
                          }}
                          className="text-blue-600 hover:text-blue-900 p-1 rounded-full hover:bg-blue-50"
                          title="View Details"
                        >
                          <FaEye className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleDeleteClick(app)}
                          className="text-red-600 hover:text-red-900 p-1 rounded-full hover:bg-red-50"
                          title="Delete"
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
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
              <div className="flex justify-between items-center border-b p-4 bg-gray-50">
                <h2 className="text-xl font-bold text-gray-800">Application Details</h2>
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
                <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-medium">Status:</span>{' '}
                    {isEditing ? (
                      <select
                        value={editedStatus}
                        onChange={e => setEditedStatus(e.target.value)}
                        className="ml-2 border px-3 py-1 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Approved">Approved</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                    ) : (
                      <span className="ml-2">{statusBadge(selectedApp.status)}</span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {!isEditing ? (
                      <button
                        onClick={() => setIsEditing(true)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded-md transition-colors"
                      >
                        Edit Status
                      </button>
                    ) : (
                      <button
                        onClick={handleSaveStatus}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded-md transition-colors"
                      >
                        Save Changes
                      </button>
                    )}
                  </div>
                </div>

                {/* Basic Info */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(selectedApp.fullForm).map(([key, value]) => {
                      if (key === 'documents') return null;
                      return (
                        <div key={key} className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-sm font-medium text-gray-500 capitalize">
                            {key.replace(/([A-Z])/g, ' $1')}
                          </div>
                          <div className="mt-1 text-gray-900">
                            {value || <span className="text-gray-400">Not provided</span>}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Documents */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">Documents</h3>
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
                              View Document
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
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden">
              <div className="flex justify-between items-center border-b p-4 bg-gray-50">
                <h2 className="text-xl font-bold text-gray-800">Confirm Deletion</h2>
                <button
                  onClick={handleCancelDelete}
                  className="text-gray-500 hover:text-red-600 p-1 rounded-full hover:bg-gray-100"
                >
                  <FaTimes size={20} />
                </button>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 h-12 w-12 mr-4">
                      {isImageUrl(appToDelete.fullForm.documents.photo) ? (
                        <img
                          src={appToDelete.fullForm.documents.photo}
                          alt={appToDelete.name}
                          className="h-12 w-12 rounded-full object-cover"
                          onError={e => (e.target.style.display = 'none')}
                        />
                      ) : (
                        <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-xs text-gray-500">No Photo</span>
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{appToDelete.name}</h3>
                      <p className="text-gray-600">{appToDelete.cnic}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">University</p>
                      <p className="font-medium">{appToDelete.university}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Program</p>
                      <p className="font-medium">{appToDelete.program}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Status</p>
                      <p>{statusBadge(appToDelete.status)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Application Date</p>
                      <p className="font-medium">{appToDelete.date}</p>
                    </div>
                  </div>
                </div>

                <p className="text-red-600 font-medium mb-6">
                  Are you sure you want to delete this application? This action cannot be undone.
                </p>

                <div className="flex justify-end space-x-3">
                  <button
                    onClick={handleCancelDelete}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleConfirmDelete}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Delete Application
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