import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/NavBar/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWorks from './MyWorks/MyWorks'

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <MyWorks></MyWorks>
    </div>
  )
}

export default App
