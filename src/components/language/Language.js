/**
 * Created by qqwan on 2018/7/5.
 */
import React, {Component} from 'react'
import {Select} from 'element-react'
import cookie from 'js-cookie'

class Language extends Component {
    constructor(props) {
        super(props)
        this.state = {
            locale: cookie.get('lang'),
            options: [{
                value: 'en',
                label: 'English'
            }, {
                value: 'zh-CN',
                label: '简体中文'
            }]
        }
    }
    switchlanguage (lang) {
        cookie.set('lang', lang)
        window.location.reload()
    }
    componentDidUpdate() {

    }
    render() {
        return (
            <Select value={this.state.locale} onChange={this.switchlanguage.bind(this)}>
                {
                    this.state.options.map(option => {
                        return <Select.Option key={option.value} label={option.label} value={option.value}/>
                    })
                }
            </Select>
        )
    }
}

export default Language