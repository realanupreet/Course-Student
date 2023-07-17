import React from 'react';
import './App.css';
import Page18 from './Pages/Page18';
import Page57 from './Pages/Page57';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Page19 from './Pages/Page19';
import Page58 from './Pages/Page58';
import Page59 from './Pages/Page59';
import Page60 from './Pages/Page60';
import Page61 from './Pages/Page61';
import Page20 from './Pages/Page20';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/page57' element={<Page57/>} />
          <Route path='/page58' element={<Page58/>} />
          <Route path='/page59' element={<Page59/>} />
          <Route path='/page60' element={<Page60/>} />
          <Route path='/page61' element={<Page61/>} />
          <Route path='/page19' element={<Page19/>} />
          <Route path='/page20' element={<Page20/>} />
          <Route path='/Page18' element={<Page18 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
