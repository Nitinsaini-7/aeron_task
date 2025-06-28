import React, { useState, useEffect } from 'react';
import { Shield, Users, Award, Clock, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('mission');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '50K+', label: 'Happy Clients', icon: Users },
    { number: '25+', label: 'Years Experience', icon: Clock },
    { number: '99.8%', label: 'Claim Success Rate', icon: Award },
    { number: '24/7', label: 'Customer Support', icon: Shield }
  ];

  const teamMembers = [
    
    {
      name: 'Michael Chen',
      position: 'Chief Claims Officer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Expert in risk assessment'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Head of Customer Relations',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      bio: 'Dedicated to client satisfaction'
    },
    {
      name: 'David Thompson',
      position: 'Senior Underwriter',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: '20+ years underwriting experience'
    }
  ];

  const values = [
    {
      title: 'Trust & Transparency',
      description: 'We believe in honest communication and transparent processes in all our dealings.',
      icon: Shield
    },
    {
      title: 'Customer First',
      description: 'Our clients are at the heart of everything we do, driving our commitment to excellence.',
      icon: Users
    },
    {
      title: 'Innovation',
      description: 'We continuously evolve our services to meet the changing needs of our customers.',
      icon: Award
    }
  ];

  const tabContent = {
    mission: {
      title: 'Our Mission',
      content: 'To provide comprehensive, reliable insurance solutions that protect what matters most to our clients. We strive to be the trusted partner you can count on during life\'s uncertainties, offering peace of mind through innovative coverage options and exceptional service.'
    },
    vision: {
      title: 'Our Vision',
      content: 'To be the leading insurance provider recognized for our commitment to customer satisfaction, innovative solutions, and community impact. We envision a future where insurance is simple, accessible, and tailored to individual needs.'
    },
    history: {
      title: 'Our History',
      content: 'Founded in 1998, our company began as a small local agency with a big vision. Over 25 years, we\'ve grown from serving hundreds to protecting thousands of families and businesses. Our journey has been marked by continuous innovation, strategic partnerships, and unwavering dedication to our clients.'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      

      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Protecting your future with trusted coverage and exceptional service for over 25 years.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className={`text-center group transition-all duration-500 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mission, Vision, History Tabs */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Who We Are</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn more about our journey, values, and commitment to excellence
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-gradient-to-b from-blue-600 to-indigo-700">
                <div className="p-8">
                  {Object.keys(tabContent).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`w-full text-left p-4 rounded-lg mb-4 transition-all duration-300 flex items-center group ${
                        activeTab === tab
                          ? 'bg-white text-blue-600 shadow-lg scale-105'
                          : 'text-white hover:bg-blue-500'
                      }`}
                    >
                      <span className="font-semibold capitalize">{tab}</span>
                      <ChevronRight className={`ml-auto w-5 h-5 transition-transform duration-300 ${
                        activeTab === tab ? 'rotate-90' : 'group-hover:translate-x-1'
                      }`} />
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="md:w-2/3 p-8 md:p-12">
                <div className="transition-all duration-500 ease-in-out">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    {tabContent[activeTab].title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {tabContent[activeTab].content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;