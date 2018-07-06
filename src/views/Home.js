/**
 * Created by qqwan on 2018/6/27.
 */
import React, { Component } from 'react';
import store from '../store/store'
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            info : ''
        }
    }
    getRouters(){
        this.setState({
            info: JSON.stringify(store.getState())
        })
    }
   render() {
       return (
           <div>
               <button onClick={this.getRouters.bind(this)}>GET INFO</button>
               {this.state.info}
           </div>
       )
   }
}
export default Home