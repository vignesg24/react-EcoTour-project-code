import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import FooterComponent from '../components/Footer/FooterCom'

export default function LayoutPage() {
  return (
    <>
    <Header/>
    
    <Outlet/>

    <FooterComponent/>

      
    </>
  )
}
