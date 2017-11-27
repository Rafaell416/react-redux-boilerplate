import createHistory from 'history/createBrowserHistory'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../Reducers'

export const history = createHistory()
const middleware = routerMiddleware(history)

export function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(middleware, logger)
    )
}
