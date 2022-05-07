import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store, persistor} from "./redux/store"
import {PersistGate} from "redux-persist/integration/react";
import App from "./views/App/App";
import '../src/firebase'
import {GlobalStyle} from "./components/Styled-components/General";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <GlobalStyle/>
                <App/>
            </PersistGate>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

