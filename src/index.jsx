import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Root from "./routes/root";



const containerElement = document.getElementById('root');
const root = ReactDOM.createRoot(containerElement);

root.render(
    <React.StrictMode>
        <BrowserRouter>

            
            <Root />
        </BrowserRouter>
    </React.StrictMode>
);





