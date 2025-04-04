
import React, { useState } from 'react';
import Layout from '../../components/Layout';
import link from '../../images/link.png';
import person from '../../images/person.png';
import gmail from '../../images/gmail.png';
import twitter from '../../images/twitter.png';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="text-white pl-4 pr-4 md:pl-20 md:pr-20 pt-6">
            <div className="font-manrope font-extrabold text-[28px] pb-10">OVERVIEW</div>
            <div className="p-10 rounded-lg border-2 flex flex-col sm:flex-row bg-black">
              <div className="sm:w-1/4 mb-4 sm:mb-0">
                <img src={person} alt="Profile" className="rounded-full w-20 h-20" />
              </div>
              <div className="sm:w-3/4 text-left">
                <div className="text-[24px] font-bold">Mr A</div>
                <div className="text-[12px] font-medium">Co-Founder & CEO @vertx</div>
                <div className="text-[8px] mt-1"><span className="bg-white text-black px-1">Entrepreneur</span></div>
                <div className="flex gap-3 mt-4">
                  <img src={link} />
                  <img src={gmail} />
                  <img src={twitter} />
                </div>
              </div>
            </div>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <div className="w-full sm:w-1/2 border-2 rounded-lg p-4 text-lg font-bold bg-black">Founded companies</div>
              <div className="w-full sm:w-1/2 border-2 rounded-lg p-4 text-lg font-bold bg-black">Experience</div>
            </div>
          </div>
        );
      case 'portfolio':
      case 'experience':
      case 'media':
        return (
          <div className="text-white text-center py-10">Content for {activeTab} coming soon!</div>
        );
      default:
        return null;
    }
  };

  const tabs = ['overview', 'portfolio', 'experience', 'media'];

  return (
    <Layout>
      {/* Mobile View Tabs */}
      <div className="flex md:hidden justify-between border-b border-gray-700 text-sm font-medium text-center text-gray-400">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 text-center py-3 cursor-pointer ${activeTab === tab ? 'border-b-2 border-white text-white' : ''}`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </div>
        ))}
      </div>

      {/* Desktop View Tabs */}
      {/* <div className="hidden md:flex text-sm font-medium text-gray-400 border-b border-gray-700 items-center h-13">
        {tabs.map((tab, index) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`w-27 ${index !== 0 ? 'border-l border-gray-700' : ''} text-center cursor-pointer flex justify-center items-center h-full ${activeTab === tab ? 'text-white' : ''}`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </div>
        ))}
      </div> */}

      <div className="hidden md:flex text-sm font-medium text-gray-400 border-b border-gray-700 items-center h-13">
        {/* Main Tabs */}
        {['overview', 'portfolio', 'experience', 'media'].map((tab, index) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`w-26 ${index !== 0 ? 'border-l border-gray-700' : ''} text-center cursor-pointer flex justify-center items-center h-full ${activeTab === tab ? 'text-white' : ''
              }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </div>
        ))}

        {/* Spacer to push 'More' to the right */}
        <div className="flex-1 border-l border-gray-700 h-full" />

        {/* 'More' Tab */}
        <div
          onClick={() => setActiveTab('more')}
          className={`w-28 hidden lg:flex border-l border-gray-700 text-center cursor-pointer justify-center items-center h-full ${activeTab === 'more' ? 'text-white' : ''
            }`}
        >
          More
        </div>
      </div>


      {renderContent()}
    </Layout>
  );
};

export default Profile;
