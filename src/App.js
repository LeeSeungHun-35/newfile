import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './page/Home';
import Header from './header/Header';
import Footer from './footer/Footer';
import Fir from './page/Fir';
import Sec from './page/Sec'; 

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/fir' element={<Fir />} />
        <Route path='/sec' element={<Sec />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;