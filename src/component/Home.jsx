import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <>
    <Helmet> <title>Adrien Péters / Home</title></Helmet>
   <div className='fade home'>
    <div className='presentation'>
    <h2>Welcome to my portfolio</h2>
<hr />
      <div>
        <div>My name is <span className='name'> Adrien Péters</span></div>
        <div> I'm a developer .net/Angular</div>
      </div>
        <Link to="/Work">My work</Link>
      </div>
   </div>
    </>
  )
}
