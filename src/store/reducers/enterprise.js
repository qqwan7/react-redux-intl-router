/**
 * Created by qqwan on 2018/7/6.
 */
import * as types from '../action/types'
export default function enterprise(state = {}, action) {
    switch (action.type) {
        case types.SET_ENTERPRISE_INFO:
            return state.info = action.info
        default:
            return state
    }
}