import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import configurestore from './store/Store/store';
import registerServiceWorker from './registerServiceWorker';
const store=configurestore();
ReactDOM.render(( <Provider store={store}><App /></Provider>), document.getElementById('root'));
registerServiceWorker();
