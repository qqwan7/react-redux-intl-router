/**
 * Created by qqwan on 2018/7/6.
 */
import {combineReducers} from 'redux'
import user from './user'
import enterprise from './enterprise'

export default combineReducers({
    user,
    enterprise
})