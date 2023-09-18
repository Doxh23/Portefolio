import React from 'react'
import data from "../assets/data.json"

export const About = () => {
  return (
    <div className='About fade boxShadowSection'>
    <div className="me">
      <img src="./assets/test.png" alt="me"/>
      <p className="aboutMe"></p>
    </div>
    <div className="skills">
      <h2>Skills</h2>
      <div className='hardskill'>

      
    <div className="backend">
      <ul>
      {
          data.skills.backend.map( backend =>{
            return <li key={backend}>  {backend}</li>
          })
        }
      </ul>
    </div>
    <hr />
    <div className="frontEnd">
      <ul>
        {
          data.skills.frontEnd.map( frontend =>{
            return <li key={frontend}>  {frontend}</li>
          })
        }
      </ul>
    </div>
    </div>
    </div>
    <div className='hobbies'></div>
    <div className="randomFact"></div>


    </div>
  )
}
