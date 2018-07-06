import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/style.css';

import registerServiceWorker from './registerServiceWorker';

import {IntlProvider, addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import zh_CN from './i18n/zh';
import en_US from './i18n/en';
import RouterMap from './router/routerMap'

import { hashHistory } from 'react-router'
import cookie from 'js-cookie'
import { i18n } from 'element-react'
import locale_en from 'element-react/src/locale/lang/en'
import locale_zh from 'element-react/src/locale/lang/zh-CN'

import {Provider} from 'react-redux'
import store from './store/store'

// TODO element-react 还未国际化成功？
i18n.use(locale_en);
i18n.use(locale_zh);

addLocaleData([...en, ...zh]);

let language = 'zh-CN'
if (cookie.get('lang')) {
    language = cookie.get('lang')
} else {
    let lang = navigator.language || navigator.browserLanguage
    let langArray = ['en', 'zh-CN']
    lang = langArray.indexOf(lang) < 0 ? 'en' : lang
    language = lang
    cookie.set('lang', lang)
}

let _locale;
let messages;
if (language === 'zh-CN') {
    _locale = 'zh';
    messages = zh_CN;
} else if (language === 'en') {
    _locale = 'en';
    messages = en_US;
}

ReactDOM.render(
    <IntlProvider
    locale={_locale}
    messages={messages}>
        <Provider store={store}>
        <RouterMap history={hashHistory}></RouterMap>
        </Provider>
    </IntlProvider>, document.getElementById('root'));
registerServiceWorker();
