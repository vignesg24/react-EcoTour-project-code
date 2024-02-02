import React from 'react'
import Background from '../components/Background/Background'
import Trips from '../components/Trips/Trips'
import Animal from '../components/Animal/Animal'
import TravelExp from '../components/TravelExp/TravelExp'
import TreeBg from '../components/TreeBg/TreeBg'
import Profile from '../components/Profile/Profile'

export default function Home() {
  return (
    <>
    <Background />
    <Trips/>
    <Animal/>
    <TravelExp/>
    <TreeBg />
    <Profile />
    </>
  )
}
