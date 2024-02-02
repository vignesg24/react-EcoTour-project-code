import React,{useEffect, useState} from 'react';
import './ScrollToTop.css';

export default function ScrollToTop() {
    const [isVisible,setIsVisible]=useState(false);
    const toggleVisibility = ()=>{
        if(window.scrollY > 300){
            setIsVisible(true)
        }else{
            setIsVisible(false)
        }
    }

    const scrollToTop = ()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }

    useEffect(()=>{
        window.addEventListener('scroll',toggleVisibility);
    },[])
  return (
    <div className='scroll-to-top'>
    {isVisible && (
        <div onClick={scrollToTop}>
            <i className='fas fa-arrow-circle-up fa-3x'></i>

        </div>
    )}
  
</div>
  )
}
