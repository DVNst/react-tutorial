import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import Lesson from './02_components/Lesson.jsx';
import * as serviceWorker from './serviceWorker';

React.createElement('div', null, 'Simple div with text');
React.createElement('input', { className: 'just-class'});

ReactDOM.render(<Lesson />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
