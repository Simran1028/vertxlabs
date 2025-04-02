import React from 'react'
import Layout from '../components/Layout'
import Linechart from '../components/Linechart'
import { Demographics } from '../components/Demographics'

const Analytics = () => {
  return (
    <Layout>

      <div>
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
          <li className="me-2">
            <a href="#" aria-current="page" className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">Overview</a>
          </li>
          <li className="me-2">
            <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Demographics</a>
          </li>

        </ul>
      </div>
      <div className='flex flex-1 gap-3 w-full '> 
        <div className='border-2 w-3/4 rounded-lg pt-3 mt-6 p-2'>  <Linechart /></div>
        <div className='w-1/4 rounded-lg border-2 pt-3 mt-6 p-2'>Hello</div>
      </div>
      <div className='border-2 w-full rounded-lg pt-3 mt-6 p-2'><Demographics /></div>
    </Layout>
  )
}

export default Analytics
