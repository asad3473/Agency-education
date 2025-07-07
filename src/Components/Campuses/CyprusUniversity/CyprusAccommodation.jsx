import React from 'react';
import { FaWifi, FaTv, FaUtensils, FaBed, FaChair, FaPhone, FaStar, FaShieldAlt } from 'react-icons/fa';
import { GiHomeGarage, GiKitchenScale, GiBookshelf, GiLaurelsTrophy } from 'react-icons/gi';
import { IoIosPeople, IoMdFitness } from 'react-icons/io';
import { MdCleaningServices, MdSecurity } from 'react-icons/md';

const CyprusAccommodation = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Header */}
      <div className="text-center mb-16 relative">
        <h1 className="text-5xl font-extrabold text-[#0A0851] mb-4 relative">
          <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#0A0851] to-blue-500">
            Campus Living
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
          Premium student accommodation designed for <span className="font-semibold text-[#0A0851]">comfort</span>, <span className="font-semibold text-[#0A0851]">community</span>, and <span className="font-semibold text-[#0A0851]">academic success</span>
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-[#0A0851] mx-auto rounded-full mb-8"></div>
      </div>

      {/* Feature Highlight */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 mb-16 relative overflow-hidden border border-blue-200 shadow-sm ">
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-200 rounded-full opacity-20"></div>
        <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-blue-200 rounded-full opacity-20"></div>
        <div className="relative z-10">
          <div className="flex items-center mb-4">
            <div className="bg-[#0A0851] p-2 rounded-lg mr-4">
              <GiLaurelsTrophy className="text-white text-2xl" />
            </div>
            <h2 className="text-2xl sm:text-3xl  font-bold text-[#0A0851]">17 Modern Dormitory Buildings</h2>
          </div>
          <p className="text-lg text-gray-700 mb-6 max-w-3xl">
            Experience university life in our award-winning residences featuring cutting-edge design, premium amenities, and vibrant student communities. Each building offers study lounges, recreational spaces, and 24/7 support services.
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-xs">
              <MdSecurity className="text-blue-500 mr-2" />
              <span className="text-sm font-medium">24/7 Security</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-xs">
              <MdCleaningServices className="text-blue-500 mr-2" />
              <span className="text-sm font-medium">Weekly Cleaning</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-xs">
              <IoMdFitness className="text-blue-500 mr-2" />
              <span className="text-sm font-medium">Fitness Access</span>
            </div>
          </div>
        </div>
      </div>

      {/* Amenities Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0A0851] mb-3">Premium Amenities</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Everything you need for comfortable living and academic success</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <FaWifi className="text-3xl" />, text: "High-Speed WiFi", bg: "from-blue-100 to-blue-50" },
            { icon: <FaTv className="text-3xl" />, text: "Smart TV", bg: "from-purple-100 to-purple-50" },
            { icon: <FaChair className="text-3xl" />, text: "Ergonomic Furniture", bg: "from-green-100 to-green-50" },
            { icon: <FaBed className="text-3xl" />, text: "Premium Bedding", bg: "from-amber-100 to-amber-50" },
            { icon: <GiHomeGarage className="text-3xl" />, text: "Mini-Fridge", bg: "from-cyan-100 to-cyan-50" },
            { icon: <FaPhone className="text-3xl" />, text: "Direct Phone Line", bg: "from-indigo-100 to-indigo-50" },
            { icon: <FaUtensils className="text-3xl" />, text: "Meal Plans", bg: "from-red-100 to-red-50" },
            { icon: <IoIosPeople className="text-3xl" />, text: "Social Events", bg: "from-emerald-100 to-emerald-50" }
          ].map((item, index) => (
            <div key={index} className={`bg-gradient-to-br ${item.bg} p-6 rounded-2xl shadow-xs text-center transition-all hover:shadow-md hover:-translate-y-1`}>
              <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center bg-white shadow-sm`}>
                <div className="text-blue-500">{item.icon}</div>
              </div>
              <h3 className="font-semibold text-[#0A0851]">{item.text}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Accommodation Options */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0A0851] mb-3">Living Options</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Choose the perfect space for your university journey</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Studio Option */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <div className="bg-[#0A0851] p-6 text-white">
              <div className="flex items-center">
                <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                  <GiHomeGarage className="text-2xl text-yellow-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">Studio Dormitories</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-6">
                Modern single, double, or 4-bedroom units with private bathrooms and premium furnishings. The Soli dormitory features soundproof walls and designer interiors.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <FaStar className="text-yellow-400 mr-3" />
                  <span>Private bathroom in each unit</span>
                </div>
                <div className="flex items-center">
                  <FaStar className="text-yellow-400 mr-3" />
                  <span>Weekly professional cleaning</span>
                </div>
                <div className="flex items-center">
                  <FaStar className="text-yellow-400 mr-3" />
                  <span>24/7 academic support</span>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-600 font-medium text-center">
                  <GiHomeGarage className="inline mr-2" />
                  Includes accommodation + 1-year cafeteria membership
                </p>
              </div>
            </div>
          </div>
          
          {/* Apartment Option */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-6 text-white">
              <div className="flex items-center">
                <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                  <GiKitchenScale className="text-2xl text-yellow-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">Apartment Dormitories</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-6">
                2-3 bedroom apartments with shared living room, balcony, and fully equipped kitchen - perfect for students who value independence and community living.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <FaStar className="text-yellow-400 mr-3" />
                  <span>Full kitchen with appliances</span>
                </div>
                <div className="flex items-center">
                  <FaStar className="text-yellow-400 mr-3" />
                  <span>Spacious common areas</span>
                </div>
                <div className="flex items-center">
                  <FaStar className="text-yellow-400 mr-3" />
                  <span>Private balcony/terrace</span>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-600 font-medium text-center">
                  <GiKitchenScale className="inline mr-2" />
                  Optional meal plans available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Loyalty Program */}
      <div className="bg-gradient-to-br from-[#0A0851] to-blue-800 rounded-2xl p-10 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-10">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 0C44.8 0 0 44.8 0 100C0 155.2 44.8 200 100 200C155.2 200 200 155.2 200 100C200 44.8 155.2 0 100 0ZM100 180C56 180 20 144 20 100C20 56 56 20 100 20C144 20 180 56 180 100C180 144 144 180 100 180Z" fill="white"/>
          </svg>
        </div>
        <div className="relative z-10">
          <div className="flex items-center mb-6">
            <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
              <GiLaurelsTrophy className="text-2xl text-yellow-300" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Loyalty Rewards Program</h2>
          </div>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl">
            We value your continued stay with us. Enjoy increasing benefits the longer you're part of our campus community.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { years: "2nd Year", discount: "15% OFF", perks: ["Priority room selection", "Free laundry package"] },
              { years: "3rd Year", discount: "20% OFF", perks: ["Personal storage unit", "Premium WiFi upgrade"] },
              { years: "4th Year", discount: "25% OFF", perks: ["Monthly cleaning service", "Guest passes"] },
              { years: "5th Year+", discount: "30% OFF", perks: ["VIP graduation package", "Alumni benefits"] }
            ].map((tier, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm border border-white border-opacity-20">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl text-blue-900 font-bold">{tier.years}</h3>
                  <span className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                    {tier.discount}
                  </span>
                </div>
                <ul className="space-y-2">
                  {tier.perks.map((perk, i) => (
                    <li key={i} className="flex items-center">
                      <FaShieldAlt className="text-blue-500 mr-3 text-sm" />
                      <span className="text-blue-500">{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center text-blue-200 text-sm">
            * Discounts apply to consecutive years of residence. All benefits are cumulative.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyprusAccommodation;