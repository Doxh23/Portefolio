import React , {useEffect, useRef, useState}from 'react'
import {Link, useParams,useNavigate} from 'react-router-dom'
import data from '../assets/data.json'
import left from '../assets/leftArrow.svg'
import right from '../assets/rightArrow.svg'
export const Work = () => {
  const [id,setid] = useState(0)
  const ref = useRef(null)
console.log(data.works[id])
// ref.current.style.background = `../assets${data.works[id].img}`
 useEffect(() => {
  console.log(ref.current.style)
  ref.current.style.background = `url(../assets/${data.works[id].img})`
  ref.current.style.backgroundRepeat = "no-repeat"
  ref.current.style.backgroundSize = "100% 100%"


 }, [id,ref])
 function handleChange(nbr) {

  
  console.log(data.works[id])
  if(data.works[id+ nbr] === undefined){
    setid( nbr >  0 ? 0 : data.works.length -1)
  }else{
    setid(id + nbr)
  }

  ref.current.style.background = `../assets${data.works[id].img}`
 }
  console.log(id)
  return (
    <>
    <div className='fade works'>
    <div className='listWorks'>
     {
      data.works.map((work,i) => {
        
        return <img src={`../assets/${work.img}`} className='miniWork' key={i} onMouseEnter={() => setid(i)}  /> 
      })
     }
    </div>
       <div className="work" ref={ref} style={  { backgroundRepeat:"no-repeat",backgroundSize: "100% 100%"}}>

    
      
    <div className='leftArrow' >
      
    <div onClick={() => handleChange(-1)} ><img src={left} alt="left"  className='arrow'/></div>
    </div>

    <div className='rightArrow'>
    <div onClick={() => handleChange(1)} > <img src={right} alt="right"  className='arrow'/></div>

    </div>

    </div>


    </div>
    </>
  )
}
