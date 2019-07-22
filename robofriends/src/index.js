import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from "react-redux";
import {searchRobots} from "./reducers"
import {createStore} from "redux";
import './index.css';
import * as serviceWorker from './serviceWorker';
import "tachyons";
import App from "./containers/app"

const store = createStore(searchRobots)             //rootReducer

ReactDOM.render(<Provider store={store}><App/></Provider>, 
                document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
