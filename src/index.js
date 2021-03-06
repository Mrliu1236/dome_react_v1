import 'core-js/stable'
import 'regenerator-runtime/runtime'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider as MobxProvider } from 'mobx-react'

import App from './App'
import * as serviceWorker from './serviceWorker'

import rootStore from './store'

ReactDOM.render(
  <MobxProvider {...rootStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MobxProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
