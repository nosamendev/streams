import React from 'react';
import ReactDOM from 'react-dom';

<<<<<<< HEAD
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';


import App from './components/App';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware())
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));
=======

import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));
>>>>>>> f54e23e0d6ba0471f33cae92b5ff706238fc6309


