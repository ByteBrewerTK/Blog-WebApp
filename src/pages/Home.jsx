import React from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'


export default function Home() {

  return (
    <div className='flex flex-col h-screen'>
      <Header/>

        
        <div className='overflow-y-auto w-full h-full'>
          <Blogs/>
        </div>

        <Pagination/>
        
    </div>
  )
}
