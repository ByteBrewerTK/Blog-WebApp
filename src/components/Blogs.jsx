import React, { useContext } from 'react'
import { AppContext } from './AppContext'
import Loader from './Loader';
import Blog from './Blog';

export default function Blogs() {

    const {posts, loading} = useContext(AppContext);
    
    return (
        <div className='w-full h-full pt-4 '>
            <div className='h-full w-full sm:w-[90%] md:w-[80%] lg:w-[43%] mx-auto px-4' >
            
            {
                loading ? <Loader/> : (
                    !posts.length ? <div className='w-full h-full flex justify-center items-center text-[1.2rem]'>No Posts Found</div>
                    :
                    (posts.map(post =>(<Blog post = {post} key = {post.id}/>)))
                )
            }
        </div>
        </div>
    )
}
