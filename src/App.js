import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Lazy from '@/components/Lazy'

const Home = Lazy(() => import('@/pages/Home'))

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />

        <Redirect to="/" />
      </Switch>
    </>
  )
}

export default App
