import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = ({route}) => {
  console.log(route)
  return (
    <>
    <div className='navBar'>
      
    <ul>
       {route.map(route => (
        <li key={route.name}><Link to={route.path} >{route.name}</Link></li>

       ))}
    </ul>
   
    </div>
    </>
  )
}
