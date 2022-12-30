import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter }	from "react-router-dom";

import { Navigation } from './components/js/Navigation';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Navigation/>
        </BrowserRouter>
    </React.StrictMode>
);

