import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { totaldata } from './Totaldata'
import Filtereddatas from './Filtereddatas'

// export const navData=[{
//     id:"1",
//     title:"ALL",
//     path:"/all"
// },
// {
//     id:"2",
//     title:"AI",
//     path:"/ai"
// },
// {
//     id:"3",
//     title:"React.js",
//     path:"/react.js"
// },
// {
//     id:"4",
//     title:"Node.js",
//     path:"/node.js"
// },
// {
//     id:"5",
//     title:"Javascript",
//     path:"/javascript"
// },
// {
//     id:"6",
//     title:"Express",
//     path:"/express"
// },
// {
//     id:"7",
//     title:"Block Chain",
//     path:"/blockchain"
// },

// {
//     id:"8",
//     title:"Flutter",
//     path:"/flutter"
// },
// {
//     id:"8",
//     title:"Contat Us",
//     path:"/contactus"
// },

// ]
const Navbar = () => {
    const [activeButton,setActiveButton]=useState(null)
    const nav=useNavigate()
    const handleClick=(id,title)=>{
        setActiveButton(id)
        // nav(path)
        nav(`/blog/${title}`)
        console.log("first",id)
    }
  return (
    
        <>
        <nav className='container mt-5 '>
        <div className='container '>
        <div className=' row justify-content-evenly '>
            {totaldata.map(item =>(
                <div className='col-auto md-2  'key={item.id}>
                    <p className={`nav-item ${activeButton === item.id ? "blueColor" : ""}`}
                     onClick={()=>handleClick(item.id,item.title)} role="button"
                     >
                        <p className='nav-title-font px-4 border rounded rounded-1 text-center ms-1 me-1 nav-button' > {item.title}</p>
                    </p>
                </div>
            ))}
        </div>
        </div>
        </nav>
        
        <div className='d-flex justify-content-center me-2 pt-1 my-0 '>
        <a className='me-3 nav-first-circle'><FontAwesomeIcon icon={faCircle} size="xs" /></a> 
        <a className='me-3 nav-circle'><FontAwesomeIcon icon={faCircle} size="xs"/></a> 
        <a className='me-3 nav-circle'><FontAwesomeIcon icon={faCircle} size="xs"/></a> 
        <a className='me-3 nav-circle '><FontAwesomeIcon icon={faCircle} size="xs"/></a> 
       </div>
     
       </>
  )
  
}

export default Navbar





