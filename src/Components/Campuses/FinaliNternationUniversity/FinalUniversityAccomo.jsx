import React from 'react';
import { FaWifi, FaTv, FaUtensils, FaBed, FaChair, FaBook, FaPhone } from 'react-icons/fa';
import { GiHomeGarage, GiKitchenScale } from 'react-icons/gi';

const FinalUniversityAccomo = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[#0A0851] mb-2">On-Campus Living</h1>
        <p className="text-lg text-gray-600">Comfortable housing designed for student success</p>
      </div>

      {/* Overview */}
      <div className="bg-blue-50 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-[#0A0851] mb-3">17 Modern Dormitory Buildings</h2>
        <p className="text-gray-700">
          Our specially designed dormitories provide a quiet, comfortable environment with all the amenities you need to focus on your studies.
        </p>
      </div>

      {/* Amenities */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-[#0A0851] mb-4">All Rooms Include:</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="flex items-center">
            <FaWifi className="text-blue-500 mr-2" />
            <span>Free WiFi</span>
          </div>
          <div className="flex items-center">
            <FaTv className="text-blue-500 mr-2" />
            <span>LCD TV</span>
          </div>
          <div className="flex items-center">
            <FaChair className="text-blue-500 mr-2" />
            <span>Study Desk</span>
          </div>
          <div className="flex items-center">
            <FaBed className="text-blue-500 mr-2" />
            <span>Comfortable Bed</span>
          </div>
          <div className="flex items-center">
            <GiHomeGarage className="text-blue-500 mr-2" />
            <span>Mini-Fridge</span>
          </div>
          <div className="flex items-center">
            <FaPhone className="text-blue-500 mr-2" />
            <span>Phone Connection</span>
          </div>
        </div>
      </div>

      {/* Dorm Types */}
      <div className="space-y-6 mb-8">
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h3 className="text-lg font-bold text-[#0A0851] mb-2 flex items-center">
            <GiHomeGarage className="text-blue-500 mr-2" />
            Studio Dormitories
          </h3>
          <p className="text-gray-700 mb-2">
            Choose from single, double, or 4-bedroom units with modern design. The Soli dormitory features ultra-modern architecture.
          </p>
          <p className="text-sm text-blue-600">
            Packages include accommodation + 1-year cafeteria membership
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h3 className="text-lg font-bold text-[#0A0851] mb-2 flex items-center">
            <GiKitchenScale className="text-blue-500 mr-2" />
            Apartment Dormitories
          </h3>
          <p className="text-gray-700">
            2-3 bedroom apartments with shared living room and fully equipped kitchen - perfect for students who want to cook.
          </p>
        </div>
      </div>

      {/* Loyalty Program */}
      <div className="bg-[#0A0851] text-white p-6 rounded-xl">
        <h2 className="text-xl font-bold mb-3">Loyalty Discount Program</h2>
        <p className="mb-4">Save more the longer you stay with us:</p>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>2nd Year:</span>
            <span className="font-bold">15% discount</span>
          </div>
          <div className="flex justify-between">
            <span>3rd Year:</span>
            <span className="font-bold">20% discount</span>
          </div>
          <div className="flex justify-between">
            <span>4th Year:</span>
            <span className="font-bold">25% discount</span>
          </div>
          <div className="flex justify-between">
            <span>5th Year:</span>
            <span className="font-bold">30% discount</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalUniversityAccomo;
