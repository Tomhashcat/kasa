import React from 'react';

import ReactDOM from 'react-dom/client';
import '../src/sass/layout/_header.scss';

import "../src/sass/base/_base.scss";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";

import ErrorPage from "./error-page";

const containerElement = document.getElementById('root');

const router = createBrowserRouter([
    {
        path: "",
        element: <Root />,
        errorElement: <ErrorPage />,
    },
]);

const root = ReactDOM.createRoot(containerElement);
root.render(
    <React.StrictMode>
        <RouterProvider router={router}>
            
            <Root />
        </RouterProvider>
    </React.StrictMode>
);

<script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

