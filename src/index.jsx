import React from 'react';
import { createRoot } from 'react-dom/client'; // Uppdatera importen här
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import './app.css';
import Home from './views/Home.jsx';
import FyraB from './views/4B.jsx';
import SexB from './views/6B.jsx';
import Spanish from './views/Spanish.jsx';

const root = document.getElementById('root');

const rootElement = createRoot(root);

rootElement.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/4b' element={<FyraB />} />
        <Route path='/6b' element={<SexB />} />
        <Route path='/Spanish' element={<Spanish />} />
        {/* <Route path='*' element={<PageNotFound />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

