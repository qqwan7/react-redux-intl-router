/**
 * Created by qqwan on 2018/6/27.
 */
import React, {Component} from 'react'
import Language from '../language/Language'

class Footer extends Component{

    render () {
        return (
            <footer className="footer">
                Copyright &copy; 2018 qqwan, Inc. All rights reserved.
                <div className="language-box ml40">
                    <Language/>
                </div>
            </footer>
        )
    }
}
export default Footer