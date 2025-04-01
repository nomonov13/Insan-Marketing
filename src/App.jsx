import React from 'react'
import Questions from './components/Questions'
import Footer from './components/Footer'
import Xizmatlar from './components/Xizmatlar'
import Portfolio from './components/Portfolio'

const App = () => {
  return (
    <>
      <main>
        <Xizmatlar />
        <Portfolio />
        <Questions />
      </main>
      <Footer />
    </>
  )
}

export default App