import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contextApi/contextApi';

export default function OurUniversity() {
  const location = useLocation();
  const { language } = useAuth();
  const isUniversitiesPage = location.pathname === '/universities';

  const uni = [
    {
      title: "Cyprus International University",
      description: language === "ar"
        ? "تحتل المرتبة 30 عالميًا والثانية في شمال قبرص حسب تصنيفات التايمز للجامعات العالمية 2021..."
        : "Ranked 30th globally and 2nd in Northern Cyprus by the Times World University Rankings 2021...",
      btn: language === "ar" ? "اقرأ المزيد" : "Read more",
      img: "/Homeimages/ouruni/cyprus.png",
      link: "/universities/Cyprus-International-University"
    },
    {
      title: "Near East University",
      description: language === "ar"
        ? "واحدة من أفضل الجامعات في قبرص وتركيا..."
        : "One of the top-ranked universities in Cyprus and Turkey...",
      btn: language === "ar" ? "اقرأ المزيد" : "Read more",
      img: "/Homeimages/ouruni/nearuni.png",
      link: "/universities/Near-East-University"
    },
    {
      title: "Eastern Mediterranean University",
      description: language === "ar"
        ? "تعد من بين أفضل 5٪ من الجامعات في جميع أنحاء العالم..."
        : "Ranked among the top 5% of universities worldwide...",
      btn: language === "ar" ? "اقرأ المزيد" : "Read more",
      img: "/Homeimages/ouruni/virtual.png",
      link: '/universities/Eastern-Mediterranean-University'
    },
    {
      title: "Kyrenia University",
      description: language === "ar"
        ? "تقدم جامعة كيرينيا برامج متميزة..."
        : "Kyrenia University offers outstanding programs...",
      btn: language === "ar" ? "اقرأ المزيد" : "Read more",
      img: "/Homeimages/ouruni/kyrenia.png",
      link: '/universities/Kyrenia-University'
    },
    {
      title: "Final International University",
      description: language === "ar"
        ? "تشتهر جامعة فينال الدولية بمناهجها الحديثة..."
        : "Final International University is known for its modern curriculum...",
      btn: language === "ar" ? "اقرأ المزيد" : "Read more",
      img: "/Homeimages/ouruni/final.png",
      link: '/universities/Final-International-University'
    },
    {
      title: "Bahcesehir Cyprus University",
      description: language === "ar"
        ? "جامعة بهتشة شهير قبرص هي مؤسسة مرتبطة عالميًا..."
        : "Bahcesehir Cyprus University is a globally connected institution...",
      btn: language === "ar" ? "اقرأ المزيد" : "Read more",
      img: "/Homeimages/ouruni/bau.png",
      link: '/universities/Bahcesehir-Cyprus-University'
    },
  ];

  const displayedUniversities = isUniversitiesPage ? uni : uni.slice(0, 3);

    return (
        <div className='w-full py-10'>
            <h1 className='sm:text-2xl text-color font-semibold text-center mt-4 mb-2'>Choose your University</h1>
            <p className='text-xl sm:text-3xl font-bold text-center'>One of the Best Universities in the Middle East</p>
  return (
    <div className='w-full'>
      <h1 className='sm:text-2xl text-color font-semibold text-center mt-4 mb-2'>
        {language === 'ar' ? 'اختر جامعتك' : 'Choose your University'}
      </h1>
      <p className='text-xl sm:text-3xl font-bold text-center'>
        {language === 'ar' ? 'واحدة من أفضل الجامعات في الشرق الأوسط' : 'One of the Best Universities in the Middle East'}
      </p>

            <div className='grid gap-2 grid-cols-1 sm:gap-10 sm:grid-cols-2 md:grid-cols-3 w-full sm:w-10/15 mt-4 sm:mt-8 mx-auto mb-5'>
                {
                    displayedUniversities.map((val, ind) => (
                        <div
                            className='group relative shadow-md hover:shadow-amber-50 transition-all duration-50 transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-[#0A0851] flex flex-col h-full hover:border hover:border-gray-400'
                            key={ind}
                        >
                            <div
                                className='absolute transition-all ease-in delay-100 text-white text-center right-0 h-14 w-14 group-hover:bg-[#F5891B] bg-[#0A0851]'
                                style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 75%, 76% 59%, 51% 44%, 33% 54%, 0% 75%)' }}
                            >
                                <span>{ind + 1}</span>
                            </div>
                            <div className='p-3 flex flex-col h-full'>
                                <img src={val.img} className='w-full h-50' alt={val.title} />
                                <hr />
                                <div className='flex flex-col items-center h-full text-center mt-3'>
                                    <p className='text-color mb-4'>{val.description}</p>
                                    <button className='mt-auto w-fit px-10 py-2 rounded-md bg-[#0A0851] text-white transition-all delay-100 duration-300 hover:text-white  cursor-pointer hover:bg-[#F5891B]'>
                                        <Link to={val.link}>{val.btn}</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
      <div className='grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full sm:w-10/12 mt-4 sm:mt-8 mx-auto mb-5'>
        {
          displayedUniversities.map((val, ind) => (
            <div
              className='group relative shadow-md hover:shadow-amber-50 transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-[#0A0851] flex flex-col h-full'
              key={ind}
            >
              <div
                className='absolute transition-all ease-in delay-100 text-white text-center right-0 h-14 w-14 group-hover:bg-[#F5891B] bg-[#0A0851]'
                style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 75%, 76% 59%, 51% 44%, 33% 54%, 0% 75%)' }}
              >
                <span>{ind + 1}</span>
              </div>
              <div className='p-3 flex flex-col h-full'>
                <img src={val.img} className='w-full h-50' alt={val.title} />
                <hr />
                <div className='flex flex-col items-center h-full text-center mt-3'>
                  <p className='text-color mb-4'>{val.description}</p>
                  <button className='mt-auto w-fit px-10 py-2 rounded-md bg-[#0A0851] text-white transition-all delay-100 duration-300 hover:text-white cursor-pointer hover:bg-[#F5891B]'>
                    <Link to={val.link}>{val.btn}</Link>
                  </button>
                </div>
              </div>
            </div>
          ))
        }
      </div>

            {
                !isUniversitiesPage && (
                    <div className='mt-10 flex justify-center items-center mb-3'>
                        <button
                            className=' px-10 py-2 rounded-md bg-[#0A0851] text-white transition-all delay-100 duration-300 hover:text-white  cursor-pointer hover:bg-[#F5891B]'
                        >
                            <Link to='/universities'>View all universities</Link>
                        </button>
                    </div>
                )
            }
        </div>
    );
      {
        !isUniversitiesPage && (
          <div className='mt-4 flex justify-center items-center mb-3'>
            <button className='px-10 py-2 rounded-md bg-[#0A0851] text-white transition-all delay-100 duration-300 hover:text-white cursor-pointer hover:bg-[#F5891B]'>
              <Link to='/universities'>
                {language === 'ar' ? 'عرض جميع الجامعات' : 'View all universities'}
              </Link>
            </button>
          </div>
        )
      }
    </div>
  );
}
