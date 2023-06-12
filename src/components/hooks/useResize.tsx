import React from 'react'
import { useState, useRef, useEffect } from 'react'


const useResize = (bound:string, widthLimit:number, heightLimit:number) => {
    const [flag, setFlag] = useState(false);

    const handleResize = () => {

      if (bound == 'Lower') {
        if (heightLimit > window.innerHeight) return setFlag(true) 
        if (widthLimit > window.innerWidth) return setFlag(true)
      }

      if (bound == 'Upper') {
        if (heightLimit < window.innerHeight) return setFlag(true)
        if (widthLimit < window.innerWidth) return setFlag(true)
      }

      return setFlag(false)
    }  

    useEffect(
      () => {
        window.addEventListener('resize', handleResize)
      },[]);
  
    return flag;
  }

export default useResize;