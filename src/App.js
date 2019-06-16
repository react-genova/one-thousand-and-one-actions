import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
    return (
        <Provider store={store}>
            <span>HOLA</span>
        </Provider>
    );
}

export default App;
