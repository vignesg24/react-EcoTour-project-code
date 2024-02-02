import React, {useEffect} from 'react'
import './Header.css';
import logo from '../Header/logo.jpg';
import { Link } from 'react-router-dom';

export default function Header() {
    useEffect(()=>{
        let btn=document.querySelector('#menu');
        let menu=document.querySelector('.header-menu');
        btn.addEventListener('click',()=>{
          menu.classList.add('active');
        });
        let close = document.getElementById('btn');
        close.addEventListener('click',()=>{
          menu.classList.remove('active')
        });
        menu.addEventListener("click", (e) => {
          menu.classList.toggle('active'); 
        })
      },[])

  return (
    <>
        <div className="headercomponent">
      <div className="header-menu" id="headerMenu">
        <p id="btn"><i class="fa-solid fa-xmark"></i></p>
        <ul>
        <li><Link to='/home' style={{textDecoration:'none'}}>Home Page</Link></li>
          <li><Link to='/destination' style={{textDecoration:'none'}}>Destination Page</Link></li>
          <li><Link to='/privatetour' style={{textDecoration:'none'}}>Private Tours Page</Link></li>
          <li><Link to='/singletour' style={{textDecoration:'none'}}>Single Tour Page</Link></li>
          <li><Link to='/tourlist' style={{textDecoration:'none'}}>Tours List Page</Link></li>
        </ul>
      </div>
      <div className="header-logo">
        <div className="logo" id="menu"><span><i class="fa-solid fa-bars"></i></span></div>
        <div className="logo-pic"><img src={logo} alt="" /></div>
        <div className="phone"><p> <span><i class="fa-solid fa-phone"></i></span> GET IN TOUCH</p></div>
      </div>
      
    </div>

    </>
  )
}
