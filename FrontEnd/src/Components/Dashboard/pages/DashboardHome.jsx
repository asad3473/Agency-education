import { FaUsers, FaClipboardList, FaUserClock, FaUserCheck } from "react-icons/fa";
import { useAuth } from '../../../contextApi/contextApi';

const DashboardHome = () => {
  const { language } = useAuth();
  const isArabic = language === "ar";

  // Translations
  const translations = {
    en: {
      dashboardTitle: "Dashboard Overview",
      welcomeText: "Welcome back! Here's what's happening today.",
      metrics: [
        { label: "Total Users", value: "1,234" },
        { label: "Active Applications", value: "567" },
        { label: "Pending Profiles", value: "89" },
        { label: "Completed Profiles", value: "1,023" }
      ],
      recentActivity: "Recent Activity",
      viewAll: "View All",
      activities: [
        {
          title: "New user registered",
          description: "John Doe just created an account",
          time: "2 min ago"
        },
        {
          title: "Application submitted",
          description: "Jane Smith submitted an application",
          time: "15 min ago"
        }
      ]
    },
    ar: {
      dashboardTitle: "نظرة عامة على لوحة التحكم",
      welcomeText: "مرحبًا بعودتك! إليك ما يحدث اليوم.",
      metrics: [
        { label: "إجمالي المستخدمين", value: "١,٢٣٤" },
        { label: "الطلبات النشطة", value: "٥٦٧" },
        { label: "الملفات المعلقة", value: "٨٩" },
        { label: "الملفات المكتملة", value: "١,٠٢٣" }
      ],
      recentActivity: "النشاط الأخير",
      viewAll: "عرض الكل",
      activities: [
        {
          title: "مستخدم جديد مسجل",
          description: "قام جون دو بإنشاء حساب جديد",
          time: "منذ دقيقتين"
        },
        {
          title: "تم تقديم طلب",
          description: "قدمت جين سميث طلبًا جديدًا",
          time: "منذ ١٥ دقيقة"
        }
      ]
    }
  };

  const t = translations[language] || translations.en;

  const metrics = [
    { icon: <FaUsers />, color: "bg-blue-100", iconColor: "text-blue-600" },
    { icon: <FaClipboardList />, color: "bg-green-100", iconColor: "text-green-600" },
    { icon: <FaUserClock />, color: "bg-yellow-100", iconColor: "text-yellow-600" },
    { icon: <FaUserCheck />, color: "bg-purple-100", iconColor: "text-purple-600" },
  ].map((item, idx) => ({
    ...item,
    label: t.metrics[idx].label,
    value: t.metrics[idx].value
  }));

  const activities = t.activities.map((activity, idx) => ({
    ...activity,
    iconBg: idx === 0 ? "bg-indigo-100" : "bg-green-100",
    iconColor: idx === 0 ? "text-indigo-600" : "text-green-600",
    iconPath: (
      <path
        fillRule="evenodd"
        d={idx === 0 ? "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" : "M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2H5a1 1 0 010-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"}
        clipRule="evenodd"
      />
    )
  }));

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen" dir={isArabic ? 'rtl' : 'ltr'}>
      {/* Header with subtle gradient */}
      <div className="mb-6 sm:mb-8 pb-4 border-b border-gray-200">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-tight flex items-center">
          <span className="text-gray-800">
            {t.dashboardTitle}
          </span>
          <span className={`${isArabic ? 'mr-2 sm:mr-3' : 'ml-2 sm:ml-3'} text-blue-500`}>📊</span>
        </h1>
        <p className="text-gray-500 mt-1 sm:mt-2 text-sm sm:text-base">{t.welcomeText}</p>
      </div>

      {/* Metrics grid with responsive columns and spacing */}
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
        {metrics.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex items-center space-x-3 sm:space-x-4 group"
          >
            <div className={`p-3 sm:p-4 rounded-lg ${item.color} ${item.iconColor} text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300`}>
              {item.icon}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-gray-500 text-xs sm:text-sm font-medium truncate">{item.label}</h3>
              <p className="text-xl sm:text-2xl font-bold text-gray-800 mt-0.5 sm:mt-1 truncate">{item.value}</p>
              <div className="h-1 w-full bg-gray-100 mt-1 sm:mt-2">
                <div className={`h-full ${item.iconColor.replace('text', 'bg')} rounded-full`} style={{ width: `${Math.min(100, Math.random() * 100)}%` }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity Section with responsive padding and text */}
      <div className="bg-white border border-gray-200 p-4 sm:p-6 rounded-2xl shadow-sm">
        <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center mb-4 sm:mb-6 gap-2">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 flex items-center">
            <span className="bg-blue-100 text-blue-600 p-1.5 sm:p-2 rounded-lg mr-2 sm:mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </span>
            {t.recentActivity}
          </h2>
          <button className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 font-medium self-start xs:self-auto">{t.viewAll}</button>
        </div>
        
        <div className="space-y-3 sm:space-y-4">
          {activities.map((activity, idx) => (
            <div
              key={idx}
              className="flex items-start p-3 sm:p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <div
                className={`h-8 w-8 sm:h-10 sm:w-10 rounded-lg flex items-center justify-center ${activity.iconBg} ${activity.iconColor} mr-3 sm:mr-4 shadow-inner flex-shrink-0`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20">
                  {activity.iconPath}
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-800 text-sm sm:text-base truncate">{activity.title}</p>
                <p className="text-xs sm:text-sm text-gray-500 truncate">{activity.description}</p>
              </div>
              <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 sm:py-1 rounded-full ml-2 whitespace-nowrap flex-shrink-0">
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;