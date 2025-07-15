import { Link } from 'react-router-dom';
import {
  MdDashboard,
  MdPeople,
  MdApps,
  MdMenu,
  MdChevronLeft,
} from 'react-icons/md';

const Sidebar = ({ activeTab, setActiveTab, sidebarOpen, setSidebarOpen }) => {
  return (
    <div className={`bg-[#0A0851] text-white ${sidebarOpen ? 'w-52' : 'w-20'} transition-all duration-300 ease-in-out flex flex-col`}>
      <div className="p-4 flex items-center justify-between">
        {sidebarOpen && <h1 className="text-xl font-bold">Admin Panel</h1>}
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg hover:bg-indigo-900"
        >
          {sidebarOpen ? (
            <MdChevronLeft className="h-6 w-6" />
          ) : (
            <MdMenu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      <nav className="flex-1 mt-6">
        <ul>
          <li>
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center w-full p-4 ${activeTab === 'dashboard' ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`}
            >
              <MdDashboard className="h-6 w-6" />
              {sidebarOpen && <span className="ml-3">Dashboard</span>}
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab('users')}
              className={`flex items-center w-full p-4 ${activeTab === 'users' ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`}
            >
              <MdPeople className="h-6 w-6" />
              {sidebarOpen && <span className="ml-3">Users</span>}
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab('application')}
              className={`flex items-center w-full p-4 ${activeTab === 'application' ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`}
            >
              <MdApps className="h-6 w-6" />
              {sidebarOpen && <span className="ml-3">Application</span>}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
