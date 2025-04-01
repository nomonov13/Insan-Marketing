import Header from './components/Header'
import Hero from './components/Hero'
import React from 'react'
import Agency from './Components/Agency'
import Numbers from './Components/Numbers'


const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Agency />
        <Numbers />
      </main>

    </>
  )
}

export default App