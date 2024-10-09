import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/NavBar/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWorks from './MyWorks/MyWorks'
import Contact from './Components/Contacts/Contact'

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <MyWorks></MyWorks>
      <Contact></Contact>
    </div>
  )
}

export default App
