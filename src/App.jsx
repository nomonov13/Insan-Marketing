import Header from './components/Header'
import Hero from './components/Hero'
import React from 'react'
import Agency from './Components/Agency'
import Numbers from './Components/Numbers'

import Customers from './components/Customers';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Agency />
        <Numbers />
        <Customers />
      </main>

    </>
  )
}

export default App