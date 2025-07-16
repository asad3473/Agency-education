import { useState } from 'react';
import Sidebar from './layouts/Sidebar';
import Header from './layouts/Header';
import DashboardHome from './pages/DashboardHome';
import Users from './pages/Users';
import Application from './pages/Application';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen} 
        />
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4 md:p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;