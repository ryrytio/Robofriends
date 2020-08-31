import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./containers/App";
import "tachyons";
import * as serviceWorker from './serviceWorker';

// Our first Component is called Hello, which contains the contents of Hello.js
ReactDOM.render(
    <App />
    ,
  document.getElementById('root')
);

serviceWorker.unregister();
