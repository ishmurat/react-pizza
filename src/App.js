import React from "react";

import { Header } from './components';
import { Home, Cart } from './pages';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path='/cart' element={<Cart />} exact />
            {/* <Home /> */}
          </Routes>



        </div>
      </div>
    </div>
  );
}

export default App;
