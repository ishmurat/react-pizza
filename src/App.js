import React from 'react';
import axios from 'axios';

import { Header } from './components';
import { Home, Cart } from './pages';
import { Route, Routes } from 'react-router-dom';


function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    // без axios
    // fetch('http://localhost:3000/db.json') 
    //   .then((resp) => resp.json())
    //   .then((json) => {
    //     setPizzas(json.pizzas);
    //   });
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setPizzas(data.pizzas);
    });
  }, []);

  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home items={pizzas} />} exact />
            <Route path='/cart' element={<Cart />} exact />
          </Routes>



        </div>
      </div>
    </div>
  );
}

export default App;
