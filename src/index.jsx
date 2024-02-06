import React from 'react';
import { createRoot } from 'react-dom/client'; // Uppdatera importen här
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import './app.css';
import Home from './views/Home.jsx';
import Quiz46 from './views/Quiz46.jsx';
import Quiz47 from './views/Quiz47.jsx';

const root = document.getElementById('root');

const rootElement = createRoot(root);

rootElement.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quiz46' element={<Quiz46 />} />
        <Route path='/quiz47' element={<Quiz47 />} />
        {/* <Route path='*' element={<PageNotFound />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

