import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/storeRedux';
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <HashRouter>
                <App />
            </HashRouter>
        </PersistGate>
    </Provider>
    , document.getElementById('root'));