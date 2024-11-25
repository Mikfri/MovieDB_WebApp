//--- STORE/index.js
import React from 'react';
import { store } from './store'; // dette står ikke i step7!
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'    // step 16
import { createRoot } from 'react-dom/client';
import App from './App';

const el = document.getElementById('root');
const root = createRoot(el);

root.render(
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
   </BrowserRouter>);