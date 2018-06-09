import { compose, applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
// compose增强store
export const finalCreateStore = (middleware) => (
  compose(applyMiddleware(middleware, thunkMiddleware))(createStore))


