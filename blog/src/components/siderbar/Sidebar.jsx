import React, { useEffect, useState } from 'react'
import "./sidebar.css"
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Sidebar() {

  const [cats,setCats]=useState([]);

  useEffect(()=>{
    const getCats= async ()=>
    {
      const res=await axios.get('/categories')
      setCats(res.data)
    }
    getCats()
  })

  return (
    <div className='sidebar'>
        <div className='sidebarItems'>
          <span className="sidebarTitle">About Me</span>
          <img src="https://i.pinimg.com/236x/72/8c/28/728c2887a50101beb741670e8f987be7.jpg" alt=''/>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In iure asperiores rerum. 
            Illum officiis fugiat vel quidem recusandae. 
            </p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">Categories</span>
          <ul className="sidebarList">
            {cats.map((c)=>(
              <Link className='link' to={`/?cat=${c.name}`}>
              <li className="sidebarListItem">{c.name}</li>
              </Link>

            ))}
            
          </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-square-facebook"></i>
        <i className="sidebarIcon fa-brands fa-square-twitter"></i>
        <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
        <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
 
        </div>
    </div>
  )
}
