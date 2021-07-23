import React from 'react'
import Routes from './Routes'
import { MemoryRouter } from 'react-router-dom'
import { Header } from './Components/Header'

const App = () => (
  <MemoryRouter>
    <>
      <Header />
      <hr />
      <Routes />
    </>
  </MemoryRouter>
)

export default App