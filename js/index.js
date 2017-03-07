require('babel-polyfill');
import React from 'react'
import ReactDOM from 'react-dom'

import Board from './components/Board'

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<Board boardTitle={"Title of Board"}/>, document.getElementById('app') )
);
