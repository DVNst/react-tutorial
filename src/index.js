import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import Lesson2 from './02_components/Lesson.jsx';
//import Lesson3 from './03_state/Lesson.jsx';
import Lesson4 from './04_props/Lesson.jsx';
import * as serviceWorker from './serviceWorker';

React.createElement('div', null, 'Simple div with text');
React.createElement('input', { className: 'just-class'});

ReactDOM.render(<Lesson4 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
