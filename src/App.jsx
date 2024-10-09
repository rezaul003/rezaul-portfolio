import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/NavBar/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWorks from './MyWorks/MyWorks'
import Contact from './Components/Contacts/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <MyWorks></MyWorks>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
