import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {TweetsComponent} from './tweets'
import * as serviceWorker from './serviceWorker';

const appRoot = document.getElementById('root')
if (appRoot) {
  ReactDOM.render( <App />, appRoot );
}
const tweetsEl = document.getElementById("tweetos")
if (tweetsEl){
  ReactDOM.render( <TweetsComponent />, tweetsEl ); 
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
 