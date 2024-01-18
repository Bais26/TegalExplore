import React, { Component } from 'react';
import Hero from './Component/Hero';
import Sejarah from './Component/Sejarah';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';

const App = () => {
    return (
      <div className=''>
        <Router>
        <Routes>
          <Route path='/' element={<Hero />}/>
          <Route path='/sejarah' element={<Sejarah />}/>
        </Routes>
        </Router>
      </div>
    );
}

export default App;