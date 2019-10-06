import {createStore, combineReducers, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import posts from './reducers/posts'
import comments from './reducers/comments'


const reducer = combineReducers({
    posts,
    comments
})
/* const logger = (store) => (next) => (action) => {
    console.log('Middle>> ',action)
    next(action)
} */
const store = createStore(reducer,applyMiddleware(ReduxThunk))

export default store