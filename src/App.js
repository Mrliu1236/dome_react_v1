import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import loadable from '@loadable/component'

const Home = loadable(() => import('@/pages/Home'))

function App() {
  return (
    <>
      <Switch>
        <RouteWithProps exact path="/" component={Home} />

        <Redirect to="/" />
      </Switch>
    </>
  )
}

/**
 * @description 接收RouterProps
 * @param {React.ComponentClass} component
 */
function RouteWithProps({ component, ...rest }) {
  const WrapperComponent = component
  return <Route {...rest} render={props => <WrapperComponent {...props} />} />
}

export default App
