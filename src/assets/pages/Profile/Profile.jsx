


import React, { useState } from "react";
import Layout from "../../components/Layout";
import link from "../../images/link.png";
import person from "../../images/person.png";
import gmail from "../../images/gmail.png";
import twitter from "../../images/twitter.png";
import logo1 from "../../images/logo1.png";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const experiences = [
    { id: 1, name: "Company 1" },
    { id: 2, name: "Company 2" },
    { id: 3, name: "Company 3" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          // <div className="text-white bg-black min-h-screen px-4 sm:px-6 md:px-10 pt-5 max-w-screen-xl mx-auto ">
          <div className="text-white px-4 md:px-15 pt-3">

            <h1 className="font-manrope font-extrabold text-2xl md:text-3xl pb-5 ">
              OVERVIEW
            </h1>


            <div className="p-6 rounded-lg border border-gray-700 flex flex-col sm:flex-row items-center bg-gray-900 w-full">
              <img
                src={person}
                alt="Profile"
                className="rounded-full w-20 h-20"
              />
              <div className="sm:ml-6 text-center sm:text-left">
                <h2 className="text-xl font-bold">Mr A</h2>
                <p className="text-sm font-medium">Co-Founder & CEO @vertx</p>
                <span className="text-xs bg-white text-black px-2 py-1 rounded-md mt-1 inline-block">
                  Entrepreneur
                </span>
                <div className="flex justify-center sm:justify-start gap-3 mt-4">
                  <img src={link} alt="Link" className="w-5" />
                  <img src={gmail} alt="Gmail" className="w-5" />
                  <img src={twitter} alt="Twitter" className="w-5" />
                </div>
              </div>
            </div>


            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
              {/* Founded Companies */}
              <div className="bg-gray-900 text-white p-6 rounded-lg border border-gray-700 h-full">
                <h2 className="text-lg md:text-xl font-semibold">Founded Companies</h2>
                <p className="text-4xl md:text-5xl font-bold mt-2">02</p>

                <div className="mt-4 space-y-4">
                  <div className="flex items-center gap-4">
                    <img src={logo1} alt="Company Logo" className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="font-semibold flex items-center">
                        Vertx
                        <span className="ml-2 text-xs bg-green-600 text-white px-2 py-1 rounded">CEO</span>
                      </p>
                      <p className="text-xs md:text-sm text-gray-400">
                        Founded in 2025 in <span className="font-semibold">Fintech.</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <img src={logo1} alt="Company Logo" className="w-10 h-10 rounded-lg bg-gray-400" />
                    <div>
                      <p className="font-semibold flex items-center">
                        Company
                        <span className="ml-2 text-xs bg-blue-600 text-white px-2 py-1 rounded">PROPRIETOR</span>
                      </p>
                      <p className="text-xs md:text-sm text-gray-400">
                        Details/Information like acquired / exit / M&A.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="border border-yellow-500 text-yellow-500 px-3 py-1 text-xs rounded">
                    View Profile
                  </button>
                </div>
              </div>

             
              <div className= "hidden md:block bg-gray-900 text-white p-6 rounded-lg border border-gray-700 h-full">
                <h2 className="text-lg md:text-xl font-semibold">Experience</h2>
                <p className="text-4xl md:text-5xl font-bold mt-2">03</p>

                {experiences.map((exp) => (
                  <div key={exp.id} className="mt-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gray-400"></div>
                      <p className="font-semibold">{exp.name}</p>
                    </div>
                    <button className="text-gray-400 text-sm hover:text-white transition">
                      View Profile
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        );
      case "portfolio":
      case "experience":
      case "media":
        return (
          <div className="text-white text-center py-10">
            Content for {activeTab} coming soon!
          </div>
        );
      default:
        return null;
    }
  };

  const tabs = ["overview", "portfolio", "experience", "media"];

  return (
    <Layout>

      <div className="flex md:hidden justify-between border-b border-gray-700 text-sm font-medium text-center text-gray-400">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 text-center py-3 cursor-pointer ${activeTab === tab ? "border-b-2 border-white text-white" : ""
              }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}

          </div>


        ))}
      </div>


      <div className="hidden md:flex text-sm font-medium text-gray-400 border-b border-gray-700 items-center h-12">

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

        <div className="flex-1 border-l border-gray-700 h-full" />

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

