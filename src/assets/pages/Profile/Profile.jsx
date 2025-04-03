import React from 'react'
import Layout from '../../components/Layout'
import link from '../../images/link.png'
import person from '../../images/person.png'
import gmail from '../../images/gmail.png'
import twitter from '../../images/twitter.png'



const Profile = () => {
  return (
    <Layout>
      <div className='md:ml-64'>
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

        <div className='text-white pl-20 pr-20'>
          <div className='font-manrope font-extrabold text-[28px] leading-none tracking-[-0.04em] pb-10'
          >
            OVERVIEW
          </div>
          <div className='p-10 rounded-lg border-2 flex flex-col sm:flex-row flex-1  w-full bg-[#000]'>
            <div className='w-full sm:w-1/4 flex justify-left sm:justify-left'>
              <img
                src={person}
                alt='Profile Pic'
                classNameName='rounded-full w-20 h-20 object-cover'
              />
            </div>
            <div className='w-full sm:w-3/4 text-left sm:text-left'>
              <div className='font-manrope font-bold text-[24px] leading-none tracking-normal pb-2
'>Mr A</div>
              <div className='font-manrope font-medium text-[12px] leading-none tracking-normal pb-3'>Co-Founder & CEO @vertx</div>
              <div className='font-jetbrains font-medium text-[8px] leading-none tracking-normal pb-5
'><span className='bg-white text-black'>Enterpreneur</span></div>
              <div className='flex justify-left gap-3'>
                <img src={link} />
                <img src={gmail} />
                <img src={twitter} />
              </div>
            </div>
          </div>
          <div className='mt-5 flex flex-col sm:flex-row flex-1 w-full gap-3 text-white'>
            <div className='font-bold rounded-lg text-lg pb-3 w-full sm:w-1/2 border-2 p-2 bg-[#000]'>
              Founded companies

            </div>
            <div className='font-bold rounded-lg text-lg pb-3 w-full sm:w-1/2 border-2 p-2 bg-[#000]' >
              Experience
            </div>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default Profile
