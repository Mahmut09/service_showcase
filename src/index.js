import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/global.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    
);

reportWebVitals();
