import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainListPage from './components/list-page/MainListPage';
import DetailsPage from './components/details-page/DetailsPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainListPage />} />
        <Route path='/moviedetails' element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);


