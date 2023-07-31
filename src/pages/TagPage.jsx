import React, { useContext } from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import { FaArrowLeft } from 'react-icons/fa';
import Pagination from '../components/Pagination';
import { AppContext } from '../components/AppContext';

export default function TagPage() {

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1).replaceAll('-', ' ');
    const {posts} = useContext(AppContext);

    return (
        <div className='h-screen flex flex-col'>
            <Header/>

            <div className='flex flex-col w-full h-full overflow-x-auto'>
      
                <div className='w-full sm:w-[90%] md:w-[80%] lg:w-[43%] mx-auto text-[1.2rem] md:text-[1.3rem] pt-4 flex px-4' >

                    <button className='mr-2' onClick={() =>{navigation(-1)}}><FaArrowLeft/></button>

                    <h2>Blogs Tagged <span className='font-bold text-[#3636de] underline underline-offset-4'>#{tag}</span></h2>
                </div>

                
                <Blogs/>
            </div>
            
            {
                posts.length ? <Pagination/> : ''
            }
            
        </div>
    )
}
