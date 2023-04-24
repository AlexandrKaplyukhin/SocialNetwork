import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
* {
    margin:0;
    padding:0;
}

body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

code{
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Global />
            <App />
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
