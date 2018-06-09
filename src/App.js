import React, { Component } from 'react'
import {Provider} from 'react-redux'
import createHistory from 'history/createBrowserHistory'

import  {ConnectedRouter,routerMiddleware} from 'react-router-redux'
import {finalCreateStore} from './store/configureStore'
import reducer from './store/reducers'
import Routers from './routers/index'

const history = createHistory()

const middleware = routerMiddleware(history)
const store = finalCreateStore(middleware)(reducer)


class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Routers/>
          </ConnectedRouter>
        </Provider>
    )
  }
}

export default App
