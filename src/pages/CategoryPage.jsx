import React, { useContext } from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import {FaArrowLeft} from 'react-icons/fa'
import { AppContext } from '../components/AppContext';

export default function CategoryPage() {

    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1).replaceAll('-', ' ');
    const {posts} = useContext(AppContext);

    return (
        <div className='flex flex-col h-screen'>
            <Header/>
        <div className='w-full h-full overflow-y-auto'>
            <div className='w-full sm:w-[90%] md:w-[80%] lg:w-[43%] mx-auto mb-2 text-[1.2rem] md:text-[1.3rem] pt-4 flex'>
                <button className='mr-2' onClick={() =>{navigation(-1)}}><FaArrowLeft/></button>
                <h2>Blogs On <span className='font-bold'>{category}</span></h2>
            </div>

            <Blogs/>
        </div>

            
        {
            posts.length ? <Pagination/> : ''
        }
            
        </div>
    )
}
