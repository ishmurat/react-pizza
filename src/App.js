import React from 'react';
//import axios from 'axios';


import { Header } from './components';
import { Home, Cart } from './pages';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path='/cart' element={<Cart />} exact />
          </Routes>

      </div>
    </div>
  );

}

export default App;

// class App extends React.Component {
//   componentDidMount() {
//     axios.get('http://localhost:3000/db.json').then(({ data }) => {
//       console.log(data.pizzas);
//     });
//   };
//   render() {
//     return (
//       <div className="wrapper">
//         <Header />
//         <div className="content">
//           <Routes>
//             <Route path="/" element={<Home items={[]} />} exact />
//             <Route path='/cart' element={<Cart />} exact />
//           </Routes>
//         </div>
//       </div>
//     )
//   }
// }
// export default connect(
//   (state) => {
//     return {
//       items: state.pizzas.items,
//       filters: state.filters,
//     };
//   },
//   (dispatch) => {
//     return {
//       setPizzas: (items) => dispatch(setPizzas(items)),
//     };
//   },
// )(App);
