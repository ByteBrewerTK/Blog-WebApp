import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Blog({post}) {
   
    return (
        <div >
                <NavLink to={`/blog/${post.id}`} className='font-bold mb-2 text-[1.2rem] md:text-[1.3rem] hover:underline underline-offset-4'>{post.title}</NavLink>
                
                <p className='text-[.8rem] md:text-[.9rem] font-light'>
                    By <span className='italic text-black font-normal'>{post.author}</span> on <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`} className='font-bold text-black cursor-pointer underline'>{post.category}</NavLink>
                </p>

                <p className='mb-2 font-light'>Posted On <span>{post.date}</span></p>

                <p className='mb-2 text-[.9rem]'>
                    {post.content}
                </p>

                <div className='mb-4 flex flex-wrap'>
                    {
                        post.tags.map((tag, index) =>{
                            return <NavLink to={`/tags/${tag.replaceAll(' ', '-')}`} key={index} className='mr-2 text-[#3636de] text-[.8rem]'>{`#${tag}`}</NavLink>
                        })
                    }
                </div>
        </div>
    )
}
