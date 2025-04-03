import React from 'react'
import Layout from '../../components/Layout'
import link from '../../images/link.png'
import person from '../../images/person.png'
import gmail from '../../images/gmail.png'
import twitter from '../../images/twitter.png'



const Profile = () => {
  return (
    <Layout>
      <div>
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
          <li className="me-2">
            <a href="/profile" aria-current="page" className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">Overview</a>
          </li>
          <li className="me-2">
            <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Portfolio</a>
          </li>
          <li className="me-2">
            <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Experience</a>
          </li>
          <li className="me-2">
            <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Media</a>
          </li>

        </ul>

        <div className='p-6'>
          <div className='font-bold text-2xl pb-3'>
            OVERVIEW
          </div>
          <div className='rounded-lg border-2 flex flex-1 w-full bg-black'>
            <div className='w-1/4'>
              <img
                src={person}
                alt='Profile Pic'
                classNameName='rounded-full w-20 h-20 object-cover'
              />
            </div>
            <div className='w-3/4'>
              <div>Mr A</div>
              <div>Co-Founder & CEO @vertx</div>
              <div><button>Enterpreneur</button></div>
              <div className='flex flex-1 gap-2'>
               <img src={link}/>
               <img src={gmail}/>
               <img src={twitter}/>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-1 p-6 w-full gap-3'>
          <div className='font-bold rounded-lg text-lg pb-3 w-1/2 border-2 p-2'>
            Founded companies

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
