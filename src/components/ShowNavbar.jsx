import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function ShowNavbar({children}) {
    const location = useLocation()
    const [showNavbar , setShowNavbar] = useState(true)

    useEffect(()=>{
      if(location.pathname === '/login' || location.pathname === "/search"){
        setShowNavbar(false)
      }else{
        setShowNavbar(true)
      }
    },[location])
  return (
    <div>
    {showNavbar && children}
    </div>
  )
}
