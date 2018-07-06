/**
 * Created by qqwan on 2018/7/4.
 */
import React from 'react';
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import cookie from 'js-cookie'

import Home from '../views/Home'
import Login from '../views/login/Login'
import Layout from '../views/Layout'

import store from '../store/store'
import {fethMenuAndRouter} from '../store/action/user'

class RouterMap extends React.Component {
    requireAuth = function(nextState, replace){
        console.log('----router change---' + cookie.get('name'))
        if (!cookie.get('name')) {
            replace({ pathname: '/login' })
        } else {
            store.dispatch(fethMenuAndRouter())
        }
    }
    render() {
        // const requireAuth = (nextState, replace) => {
        //     console.log('----router change---' + localStorage.getItem('name'))
        //     if (localStorage.getItem('name') !== 'qqwan') {
        //         replace({ pathname: '/login' })
        //     }
        // }
        return (
            <Router history={browserHistory}>
                <Route path='/' component={Layout} onEnter={this.requireAuth.bind(this)}>
                    <IndexRoute component={Home} />
                    <Route path='home' component={Home}/>
                    <Route path='home1' component={Home}/>
                </Route>
                <Route path='/login' component={Login}/>
                <Route path='/log' component={Home}/>
            </Router>
        )
    }
}
export default RouterMap