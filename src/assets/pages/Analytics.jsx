
import React, { useState } from "react";
import Layout from "../components/Layout";
import Linechart from "../components/Linechart";
import Demographics from "../components/Demographics";
import { ArrowRight } from "lucide-react";

const Analytics = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div>
            <h1 className="font-manrope text-white font-extrabold text-2xl md:text-3xl pb-3 pt-3">
              OVERVIEW
            </h1>

            {/* Container for Graph + Insights */}
            <div className="flex flex-col md:flex-row gap-3 w-full">
              {/* Graph (Full Width on Mobile) */}
              <div className="border-2 border-gray-700 w-full md:w-3/4 rounded-lg mt-6">
                <Linechart />
              </div>

              {/* Insights (Stacked on Mobile, Side on Large Screens) */}
              <div className="bg-black text-white p-4 rounded-lg border border-gray-700 w-full md:w-72 mt-6">
                <h2 className="text-lg font-semibold">Insights</h2>

                <div>
                  {/* Founders */}
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-400">Founders</p>
                      <p className="text-2xl font-bold">7.4K</p>
                    </div>
                    <p className="text-green-500 text-sm">
                      +000% <span className="text-gray-500">(000)</span>
                    </p>
                  </div>

                  {/* Investors */}
                  <div className="mt-2 flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-400">Investors</p>
                      <p className="text-2xl font-bold">6.09K</p>
                    </div>
                    <p className="text-green-500 text-sm">
                      +000% <span className="text-gray-500">(000)</span>
                    </p>
                  </div>
                </div>

                {/* View More */}
                <div className="border-t border-gray-700 p-4 mt-2 flex items-center text-gray-400 hover:text-white cursor-pointer">
                  <p className="text-sm text-right">View detailed insights</p>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>

            {/* Demographics (Hidden in Mobile) */}
            <div className="border-2 border-gray-700 rounded-lg mt-6 hidden md:block">
              <Demographics />
            </div>
          </div>
        );

      case "demographics":
        return (
          <div className="border-2 border-gray-100 w-full rounded-lg pt-3 mt-6">
            <Demographics />
          </div>
        );

      case "reports":
        return (
          <div className="w-full mt-6 text-center text-white border border-dashed border-gray-400 p-10 rounded-lg">
            Reports section coming soon!
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Layout>
      <div>
        {/* Mobile Tabs */}
        <div className="flex md:hidden justify-between border-b border-gray-700 text-sm font-medium text-center text-gray-400 pb-10">
          {["overview", "demographics", "reports"].map((tab) => (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 text-center py-3 cursor-pointer ${
                activeTab === tab ? "border-b-2 border-white text-white" : ""
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </div>
          ))}
        </div>

        {/* Desktop Tabs */}
        <div className="hidden lg:flex text-sm font-medium text-gray-400 border-b border-gray-700 items-center h-13">
          <div
            onClick={() => setActiveTab("overview")}
            className={`w-32 text-center cursor-pointer flex justify-center items-center h-full ${
              activeTab === "overview" ? "text-white" : ""
            }`}
          >
            Overview
          </div>

          <div
            onClick={() => setActiveTab("demographics")}
            className={`w-32 border-l border-gray-700 text-center cursor-pointer flex justify-center items-center h-full ${
              activeTab === "demographics" ? "text-white" : ""
            }`}
          >
            Demographics
          </div>

          <div className="flex-1 border-l border-gray-700 h-full"></div>

          <div
            onClick={() => setActiveTab("more")}
            className={`w-28 border-l border-gray-700 text-center cursor-pointer h-full flex justify-center items-center ${
              activeTab === "more" ? "text-white" : ""
            }`}
          >
            More
          </div>
        </div>

        {/* Page Content */}
        <div className="pl-4 pr-4 md:pl-15 md:pr-15">{renderContent()}</div>
      </div>
    </Layout>
  );
};

export default Analytics;
