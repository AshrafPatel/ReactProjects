import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from "./card"
import * as serviceWorker from './serviceWorker';
import "tachyons";
import robots from "./robots";

ReactDOM.render(<div>
                    <Card robotObj={robots[0]}/>
                    <Card robotObj={robots[1]}/>
                    <Card robotObj={robots[2]}/>
                    <Card robotObj={robots[3]}/>
                </div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
