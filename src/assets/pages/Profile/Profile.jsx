import React from 'react'
import Layout from '../../components/Layout'



const Profile = () => {
  return (
    <Layout>
      <div>
        <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
          <li class="me-2">
            <a href="/profile" aria-current="page" class="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">Overview</a>
          </li>
          <li class="me-2">
            <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Portfolio</a>
          </li>
          <li class="me-2">
            <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Experience</a>
          </li>
          <li class="me-2">
            <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Media</a>
          </li>

        </ul>

        <div className='p-6'>
          <div className='font-bold text-2xl pb-3'>
            OVERVIEW
          </div>
          <div className='rounded-lg border-2 flex flex-1'>
            <div>
              <img
                src='https://via.placeholder.com/200'
                alt='Profile Pic'
                className='rounded-full w-20 h-20 object-cover'
              />
            </div>
            <div>
              <div>Name: John Doe</div>
              <div>Email: john.doe@example.com</div>
              <div>Location: New York, NY</div>
              <div>Bio: I'm a software engineer working remotely.</div>
            </div>
          </div>
        </div>
        <div className='flex flex-1 p-6 w-full gap-3'>
          <div className='font-bold rounded-lg text-lg pb-3 w-1/2 border-2 p-2'>
            Portfolio

          </div>
          <div className='font-bold rounded-lg text-lg pb-3 w-1/2 border-2 p-2' >
            Experience
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Profile
