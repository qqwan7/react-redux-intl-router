/**
 * Created by qqwan on 2018/6/27.
 */
import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import {Form, Input, Button, Message} from 'element-react'
import Footer from '../../components/footer/Footer'
import {injectIntl,FormattedMessage} from 'react-intl';
import { login } from '../../api/user'
import cookie from 'js-cookie'
import 'element-theme-default';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            loginForm: {
                account: '',
                password: ''
            },
            loginFormRules: {
                account: [{required: true, message: this.props.intl.formatMessage({id: 'validate_username_not_empty'}),  trigger: 'blur'}],//message: this.props.intl.formatMessage({id: 'validate_username_not_empty'}),
                password: [{required: true, message: this.props.intl.formatMessage({id: 'validate_password_not_empty'}), trigger: 'blur'}]
            }
        }
    }

    // 点击登录按钮
    signInForm() {
        this.refs.loginForm.validate((valid) => {
            if (valid) {
                this.setState({
                    loading: true
                })
                let para = {
                    username: this.state.loginForm.account,
                    password: this.state.loginForm.password
                }
                login(para).then(res => {
                    this.setState({
                        loading: false
                    })
                    console.log('=========' + res)
                    cookie.set('name', 'admin', {expires: 60 * (1 / 1440)})
                    browserHistory.push({path: 'home'})
                }).catch((res) => {
                    console.log('====error=====' + res)
                    Message.error(res.msg)
                    this.setState({
                        loading: false
                    })
                })
            } else {
                return false
            }
        })
    }
    onChange(key, value) {
        this.setState({
            loginForm: Object.assign({}, this.state.loginForm, { [key]: value })
        });
    }
    onKeydown(e) {
        if (e.keyCode === 13) {
            this.signInForm()
        }
    }

    render() {
        return (
            <div className="login-content">
                <div className="top-logo">
                    <span className="bg-pic bg-logo"></span>
                    <span className="logo-title">
                        <FormattedMessage
                            id="common_agent_admin"
                            defaultMessage=""/></span>
                </div>
                <div className="login-box" onKeyDown={this.onKeydown.bind(this)}>
                    <div className="gwn-logo"></div>
                    <div className="login-logo">
                        <FormattedMessage
                            id="common_agent_admin"
                            defaultMessage=""/>
                    </div>
                    <Form model={this.state.loginForm} rules={this.state.loginFormRules} ref="loginForm"
                          className="loginForm">
                        <Form.Item prop="account">
                            <Input type="text" placeholder={this.props.intl.formatMessage({id: 'login_account'})}
                                   value={this.state.loginForm.account} onChange={this.onChange.bind(this, 'account')}
                                   ></Input>
                        </Form.Item>
                        <Form.Item prop="password">
                            <Input type="password" placeholder={this.props.intl.formatMessage({id: 'login_password'})}
                                   value={this.state.loginForm.password} onChange={this.onChange.bind(this, 'password')}></Input>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" onClick={this.signInForm.bind(this)} loading={this.state.loading}>
                                <FormattedMessage
                                    id="login_sign_in"
                                    defaultMessage=""/></Button>
                        </Form.Item>
                    </Form>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default injectIntl(Login)