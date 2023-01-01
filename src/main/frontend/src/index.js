import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import './index.css';

import { Navigation } from './components/js/Navigation';
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Navigation/>
        </BrowserRouter>
        <App></App>
    </React.StrictMode>
);

