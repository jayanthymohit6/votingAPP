import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from '../src/store/index.js'
import Result from '../src/components/Result.js'
import 'bootstrap/dist/css/bootstrap.min.css';


function render() {
    ReactDOM.render(<div className="container">
        <App store={store} />
        <hr />
        <Result store={store} />
    </div>, document.getElementById('root'));
}
store.subscribe(render)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
render();
serviceWorker.unregister();

