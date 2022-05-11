import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';
import Collection from './components/Collection';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <Header />

        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
