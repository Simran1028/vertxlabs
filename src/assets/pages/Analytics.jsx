// import React from 'react'
// import Layout from '../components/Layout'
// import Linechart from '../components/Linechart'
// import { Demographics } from '../components/Demographics'

// const Analytics = () => {

//   return (
//     <Layout>
//       <div >
//         <div >
//           <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
//             <li className="me-2">
//               <a href="#" aria-current="page" className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">Overview</a>
//             </li>
//             <li className="me-2">
//               <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Demographics</a>
//             </li>

//           </ul>
//         </div>
//         <div className='pl-20 pr-20'>
//           <div className='flex flex-1 gap-3 w-full '>
//             <div className='border-2 border-gray-100 w-3/4 rounded-lg mt-6 '> <Linechart /></div>
//             <div className='w-1/4 rounded-lg border-2  mt-6'>Hello</div>
//           </div>
//           <div className='border-2 border-gray-100 w-full rounded-lg pt-3 mt-6 '><Demographics /></div>
//         </div>
//       </div>
//     </Layout>
//   )
// }

// export default Analytics
import React, { useState } from 'react';
import Layout from '../components/Layout';
import Linechart from '../components/Linechart';
import { Demographics } from '../components/Demographics';

const Analytics = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="flex flex-1 gap-3 w-full">
            <div className="border-2 border-gray-100 w-3/4 rounded-lg mt-6">
              <Linechart />
            </div>
            <div className="w-1/4 rounded-lg border-2 mt-6">Hello</div>
          </div>
        );
      case 'demographics':
        return (
          <div className="border-2 border-gray-100 w-full rounded-lg pt-3 mt-6">
            <Demographics />
          </div>
        );
      case 'reports':
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
       
        <div className="flex md:hidden justify-between border-b border-gray-700 dark:border-gray-700 text-sm font-medium text-center text-gray-400">
          {['overview', 'demographics', 'reports'].map((tab) => (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 text-center py-3 cursor-pointer ${activeTab === tab ? 'border-b-2 border-white text-white' : ''
                }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </div>
          ))}
        </div>
        <div className="hidden md:flex text-sm font-medium text-gray-400 border-b border-gray-700 dark:border-gray-700 items-center h-13">
          <div
            onClick={() => setActiveTab('overview')}
            className={`w-32  border-l border-gray-700 text-center cursor-pointer flex justify-center items-center h-full ${activeTab === 'overview' ? 'text-white' : ''
              }`}
          >
            Overview
          </div>

          <div
            onClick={() => setActiveTab('demographics')}
            className={`w-32  border-l border-gray-700 text-center cursor-pointer flex justify-center items-center h-full ${activeTab === 'demographics' ? 'text-white' : ''
              }`}
          >
            Demographics
          </div>

   
          <div className="flex-1 border-l border-gray-700 h-full" ></div>

          <div
            onClick={() => setActiveTab('more')}
            className={`w-32  border-l border-gray-700 text-center cursor-pointer h-full flex justify-center items-center ${activeTab === 'more' ? 'text-white' : ''
              }`}
          >
            More
          </div>
        </div>




     
        <div className="pl-4 pr-4 md:pl-20 md:pr-20">
          {renderContent()}
        </div>
      </div>
    </Layout>
  );
};

export default Analytics;
