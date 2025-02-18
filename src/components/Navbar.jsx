// import React from 'react'
import { useState } from "react"
import {assets} from "../assets/assets"
import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"
function Navbar() {
  const[visible,setVisible] = useState(false);
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <img src={assets.logo} alt="" className="w-36"/>
        <ul className="hidden sm:flex gap-5 text-sm text-gray-700 ">
            <NavLink to="/" className="flex flex-col  items-center gap-1 text-lg">
              <p>Home</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"/>
            </NavLink>
            <NavLink to="/about" className="flex flex-col  items-center gap-1 text-lg">
              <p>About</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"/>
            </NavLink>
            <NavLink to="/Collection" className="flex flex-col  items-center gap-1 text-lg">
              <p>Collection</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"/>
            </NavLink>
            <NavLink to="/Contact" className="flex flex-col  items-center gap-1 text-lg">
              <p>Contact</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"/>
            </NavLink>
            
        </ul>
        <div className="flex items-center gap-6">
            <img src={assets.search_icon} alt=""  className="w-5 cursor-pointer"/>
            <div className="group relative">
              <img src={assets.profile_icon} alt="" className="w-5 cursor-pointer"/>
              <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                  <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-700 rounded">
                    <p className="cursor-pointer hover:text-black" >My Profile</p>
                    <p className="cursor-pointer hover:text-black">Orders</p>
                    <p className="cursor-pointer hover:text-black">Logout</p>
                  </div>
              </div>

            </div>

            <Link to='/cart' className="relative">
            <img src={assets.cart_icon} alt="" className="w-5 min-w-5 cursor-pointer"/>
            <p className="absolute right-[-5px] w-4 text-center leading-4 bottom-[-4px] bg-black text-white aspect-square rounded-full text-[8px]">0</p>
            </Link>
            <img onClick={()=>setVisible(true)} src={assets.menu_icon} alt="" className="w-5 cursor-pointer sm:hidden" />
        </div>
        {/* sidebar menu */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full':'w-0'}`}>

        </div>
    </div>
  )
}

export default Navbar