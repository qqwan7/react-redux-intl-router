/**
 * Created by qqwan on 2018/6/27.
 */
import React, {Component} from 'react'
import {Menu} from 'element-react'
import {Link} from 'react-router'

class Sidebar extends Component {
    onOpen() {

    }
    onClose() {

    }
    render () {
        return (
            <div className="sidebar-content">
                <div className="logo">
                    <span className="bg-pic bg-logo"></span>
                    <span className="logo-title">Agent Admin</span>
                </div>
                <Menu defaultActive="/home" onOpen={this.onOpen.bind(this)} onClose={this.onClose.bind(this)} theme="dark">
                    <Link to='/home'><Menu.Item index="/home" key="/home">Home</Menu.Item></Link>
                    <Link to='/home1'><Menu.Item index="/home1" key="/home1">Home1</Menu.Item></Link>
                </Menu>
            </div>
        )
    }
}
export default Sidebar