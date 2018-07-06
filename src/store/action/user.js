/**
 * Created by qqwan on 2018/7/6.
 */
import * as types from './types'
import {getRouters} from '../../api/user'

export function setMenu(menu) {
    return {
        type: types.SET_MENU,
        menu: menu
    }
}
export function setRouters(routers) {
    return {
        type: types.SET_ROUTERS,
        routers: routers
    }
}
// 即使不使用 middleware，你也可以 dispatch action：
// 但是怎样处理异步 action 呢，
// 比如 API 调用，或者是路由跳转？

// 来看一下 thunk。
// Thunk 就是一个返回函数的函数。
// 下面就是一个 thunk。
export function fethMenuAndRouter() {
    // 控制反转！
    // 返回一个接收 `dispatch` 的函数。
    // Thunk middleware 知道如何把异步的 thunk action 转为普通 action。
    return function (dispatch) {
        return getRouters().then(
            response => {
                if (response.retCode === 0 && response.data && response.data.routers) {
                    let tempRouters = response.data.routers
                    dispatch(setRouters(tempRouters))
                }
            },
            error => {
                console.log('--------error-----')
            }
        )
    }
}