import React from 'react'
import { Header } from './header/Header'
import { Footer } from './footer/Footer'
import { HeroBanner } from '../components/herbanner/HeroBanner'
import SideBar from '../components/sidebar/SideBar'

export const Home = () => {
  return (
    <div>
    <Header/>
    <SideBar/>
    <HeroBanner/>
    <Footer/>
    </div>
  )
}
