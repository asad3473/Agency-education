import { useState } from 'react';
import Sidebar from './layouts/Sidebar';
import Header from './layouts/Header';
import DashboardHome from './pages/DashboardHome';
import Users from './pages/Users';
import Application from './pages/Application';
import { useAuth } from '../../contextApi/contextApi';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { language } = useAuth(); // 'en' or 'ar'

  const renderContent = () => {
    switch (activeTab) {
      case 'users':
        return <Users />;
      case 'application':
        return <Application />;
      case 'dashboard':
      default:
        return <DashboardHome />;
    }
  };

  // Arabic translations
  const translatedTabs = {
    dashboard: language === 'ar' ? 'لوحة التحكم' : 'Dashboard',
    users: language === 'ar' ? 'المستخدمين' : 'Users',
    application: language === 'ar' ? 'التطبيق' : 'Application',
  };

  return (
    <div
      className={`flex h-screen bg-gray-100 ${language === 'ar' ? 'rtl' : 'ltr'}`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Sidebar goes on left in English and right in Arabic */}
      {language === 'en' && (
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          language={language}
          translatedTabs={translatedTabs}
        />
      )}

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          language={language}
        />

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4 md:p-6">
          {renderContent()}
        </main>
      </div>

      {/* Sidebar on right if Arabic */}
      {language === 'ar' && (
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          language={language}
          translatedTabs={translatedTabs}
        />
      )}
    </div>
  );
};

export default Dashboard;
