import { Link } from 'react-router-dom';
import {
  MdDashboard,
  MdPeople,
  MdApps,
  MdMenu,
  MdChevronLeft,
} from 'react-icons/md';
import { useAuth } from '../../../contextApi/contextApi';

const Sidebar = ({ activeTab, setActiveTab, sidebarOpen, setSidebarOpen }) => {
  const { language } = useAuth();
  const isArabic = language === "ar";

  // Translations
  const translations = {
    en: {
      adminPanel: "Admin Panel",
      dashboard: "Dashboard",
      users: "Users",
      application: "Application"
    },
    ar: {
      adminPanel: "لوحة التحكم",
      dashboard: "الرئيسية",
      users: "المستخدمين",
      application: "التطبيقات"
    }
  };

  const t = translations[language] || translations.en;

  return (
    <div 
      className={`bg-[#0A0851] text-white ${sidebarOpen ? 'w-52' : 'w-20'} transition-all duration-300 ease-in-out flex flex-col`}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className={`p-4 flex items-center ${isArabic ? 'flex-row-reverse' : 'flex-row'} justify-between`}>
        {sidebarOpen && <h1 className="text-xl font-bold">{t.adminPanel}</h1>}
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
              className={`flex items-center w-full p-4 ${isArabic ? 'flex-row-reverse' : 'flex-row'} ${activeTab === 'dashboard' ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`}
            >
              <MdDashboard className="h-6 w-6" />
              {sidebarOpen && <span className={isArabic ? 'mr-3' : 'ml-3'}>{t.dashboard}</span>}
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab('users')}
              className={`flex items-center w-full p-4 ${isArabic ? 'flex-row-reverse' : 'flex-row'} ${activeTab === 'users' ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`}
            >
              <MdPeople className="h-6 w-6" />
              {sidebarOpen && <span className={isArabic ? 'mr-3' : 'ml-3'}>{t.users}</span>}
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab('application')}
              className={`flex items-center w-full p-4 ${isArabic ? 'flex-row-reverse' : 'flex-row'} ${activeTab === 'application' ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`}
            >
              <MdApps className="h-6 w-6" />
              {sidebarOpen && <span className={isArabic ? 'mr-3' : 'ml-3'}>{t.application}</span>}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;