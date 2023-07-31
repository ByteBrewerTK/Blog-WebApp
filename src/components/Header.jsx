import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <NavLink to={'/'} className='sticky top-0 w-full bg-[#fff] text-center font-bold text-[1.6rem] border shadow-md z-10' >
      <h1>BrainScript Blogs</h1>
    </NavLink>
  )
}
