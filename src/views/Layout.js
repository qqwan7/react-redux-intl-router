/**
 * Created by qqwan on 2018/6/27.
 */
import React, {Component} from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
class Layout extends Component {
    render(){
        return (
            <div className="view-content">
                <Sidebar/>
                <Header/>
                <div className="main-content">
                    <div className="wrapper">
                        {this.props.children}
                    </div>
                    <Footer/>
                </div>
            </div>
        )
    }
}
export default Layout