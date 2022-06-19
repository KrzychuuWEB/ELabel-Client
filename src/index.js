import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import {ThemeProvider} from "@mui/material";
import {muiThemeProvider} from "./utils/muiThemeProvider";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={muiThemeProvider}>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);