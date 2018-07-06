/**
 * Created by qqwan on 2018/7/6.
 */
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
let store = createStore(reducers,applyMiddleware(thunk))
export default store