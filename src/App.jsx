import Header from './components/Header'
import Hero from './components/Hero'
import React from 'react'
import Agency from './Components/Agency'
import Numbers from './Components/Numbers'
import Customers from './components/Customers';
import Questions from './components/Questions'
import Footer from './components/Footer'
import Xizmatlar from './components/Xizmatlar'
import Portfolio from './components/Portfolio'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Agency />
        <Numbers />
        <Xizmatlar />
        <Portfolio />
        <Customers />
        <Questions />
      </main>
      <Footer />
    </>
  )
}

export default App