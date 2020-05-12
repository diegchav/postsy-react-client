import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

const middlewares = []

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

const rootReducer = (state = {}, action: any) => {
    switch (action.type) {
        default:
            return state
    }
}

export default createStore(rootReducer, applyMiddleware(...middlewares))