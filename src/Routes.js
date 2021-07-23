

import { Route } from 'react-router-dom'

import About from './About'
import Features from './Features'

function Routes() {
  return (
    <>
      <Route path='/about' component={About} />
      <Route path='/features' component={Features} />
    </>
  )
}

export default Routes