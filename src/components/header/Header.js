/**
 * Created by qqwan on 2018/6/27.
 */
import React, {Component} from 'react'
import cookie from 'js-cookie'
import {browserHistory} from 'react-router'
class Header extends Component {
    exit () {
        cookie.remove('name')
        browserHistory.push('/login')
    }
    render () {
        return (
            <header>
                <i className="el-icon-upload2" onClick={this.exit.bind(this)} style={{float:'right',marginRight:'10px',marginTop:'20px'}}></i>
            </header>
        )
    }
}
export default Header