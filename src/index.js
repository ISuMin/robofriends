import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchRobots, requestRobots } from './reducers';
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk';
import App from './containers/App/App';
import './index.css';

import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({searchRobots, requestRobots})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

ReactDOM.render( <Provider store={store}><App /></Provider> , document.getElementById('root') );

serviceWorker.unregister();