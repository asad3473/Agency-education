import React, { useState } from "react";
import { FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail, MdOutlineSupportAgent } from "react-icons/md";
import { IoPerson, IoTime } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const formItemVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-16 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Get in <span className="text-blue-600">Touch</span>
          </h1>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            We'd love to hear from you! Whether you have questions about our services or just want to say hello, our team is ready to help.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-lg p-8 h-full"
          >
            <motion.div 
              className="flex flex-col items-center text-center mb-8"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
            >
              <motion.div 
                className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <MdOutlineSupportAgent className="text-blue-600 text-4xl" />
              </motion.div>
              <h2 className="text-2xl font-bold text-gray-800">Contact Information</h2>
              <p className="text-gray-500 mt-2">Fill out the form or reach us directly</p>
            </motion.div>

            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="flex items-start">
                <motion.div 
                  className="bg-blue-100 p-3 rounded-lg mr-4"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaPhone className="text-blue-600 text-xl" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-gray-700">Phone</h3>
                  <p className="text-gray-600">+90 808 080 08088</p>
                  <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9am-5pm</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start">
                <motion.div 
                  className="bg-blue-100 p-3 rounded-lg mr-4"
                  whileHover={{ scale: 1.1 }}
                >
                  <MdEmail className="text-blue-600 text-xl" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-gray-700">Email</h3>
                  <p className="text-gray-600">info@AgencyEducation.com</p>
                  <p className="text-sm text-gray-500 mt-1">Response within 24 hours</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start">
                <motion.div 
                  className="bg-blue-100 p-3 rounded-lg mr-4"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaMapMarkerAlt className="text-blue-600 text-xl" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-gray-700">Office</h3>
                  <p className="text-gray-600">123 Education Street</p>
                  <p className="text-gray-600">Bahawalpur, Pakistan</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start">
                <motion.div 
                  className="bg-blue-100 p-3 rounded-lg mr-4"
                  whileHover={{ scale: 1.1 }}
                >
                  <IoTime className="text-blue-600 text-xl" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-gray-700">Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9am - 5pm</p>
                  <p className="text-gray-600">Saturday: 10am - 2pm</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-2"
          >
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 h-full"
              whileHover={{ y: -5 }}
            >
              <motion.h2 
                className="text-2xl font-bold text-gray-800 mb-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                Send Us a Message
              </motion.h2>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    variants={formItemVariants}
                    custom={0}
                  >
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <IoPerson className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="John"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    variants={formItemVariants}
                    custom={1}
                  >
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <IoPerson className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  variants={formItemVariants}
                  custom={2}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MdEmail className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={formItemVariants}
                  custom={3}
                >
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaPhone className="text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={formItemVariants}
                  custom={4}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="How can we help you?"
                  ></textarea>
                </motion.div>

                <motion.div
                  variants={formItemVariants}
                  custom={5}
                >
                  <motion.button
                    type="submit"
                    className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white inset-0 bg-gradient-to-r from-blue-900/90 via-orange-400/100 to-blue-900/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300 cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaPaperPlane className="mr-2" />
                    Send Message
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div 
          className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="h-96 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111256.59449676682!2d71.60760926905601!3d29.37706456688667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b90c46c611ad5%3A0xfcdf0da8e103f862!2sBahawalpur%2C%20Pakistan!5e0!3m2!1sen!2s!4v1751369887948!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            ></iframe>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">Our Location</h3>
            <p className="text-gray-600 mt-2">123 Education Street, Bahawalpur, Pakistan</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactUs;