import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import Blog from '../components/Blog';
import { AppContext } from '../components/AppContext';
import Loader from '../components/Loader';
import { FaArrowLeft } from 'react-icons/fa';

export default function BlogPage() {

    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {loading, setLoading,setPosts} = useContext(AppContext);
    const blogId = location.pathname.split('/').at(-1);
    const newUrl = "https://codehelp-apis.vercel.app/api/";

    const fetchRelatedBlogs = async ()=>{
        setLoading(true);
        const url = `${newUrl}get-blog?blogId=${blogId}`

        try{
            const res = await fetch(url);
            const data  = await res.json();
            console.log(data);
            setPosts(data.relatedBlogs);
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
            
        }
        catch(error){
            console.log(error);
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }
    
    const useUser = (blogId)=>{

        useEffect(()=>{
        
            if(blogId){
                fetchRelatedBlogs();
            }
            
        },[blogId])
    }

    useUser(blogId);


    return (
        <div className='flex flex-col h-screen'>
            <Header/> 
            
            <div className='w-full h-full overflow-y-auto'>
                {
                loading ? <Loader/> 
                        : (<div className='w-full sm:w-[90%] md:w-[80%] lg:w-[43%] flex flex-col mx-auto pt-4 mb-2'>
                    <button className=' text-[1.3rem] mb-2' onClick={()=>{navigation(-1)}}><FaArrowLeft/></button>


                    <div>
                    {
                        
                        blog ? (
                        <div>
                            <Blog post = {blog}/>
                            <h2 className='text-[1.5rem] font-bold my-8'>Related Blogs</h2>
                            <div>
                                {
                                    relatedBlogs.map((relatedBlog)=>{
                                        return <Blog  post = {relatedBlog} key={relatedBlog.id}/>
                                    })
                                }
                            </div>
                        </div>

                        )
                        :
                        <div>No Blog Found</div>
                    }
                </div>
                    
                </div>)
                }
            </div>

        </div>
    )
}
