/**
 * Created by qqwan on 2018/7/6.
 */
import * as types from '../action/types'
export default function user(state = {}, action) {
    switch (action.type){
        case types.SET_MENU:
            return state.menu = action.menu
        case  types.SET_ROUTERS:
            return state.routers = action.routers
        default:
            return state
    }
}
