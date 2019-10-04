import React from 'react'
import ReactDOM from 'react-dom'

import {Provider} from 'react-redux'
import store from './redux/store'

import Root from './components/root'

import './style.css'

const nodes = (
    <Provider store={store}>
        <Root />
    </Provider>
)

ReactDOM.render(nodes,document.getElementById('root'))