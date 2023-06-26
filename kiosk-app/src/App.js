import './styles/App.css';
import {Routes, Route} from 'react-router-dom';
import Main from './pages/Main/Main';
import Icecream from './pages/Icecream';
import Coffee from './pages/Coffee';
import Drink from './pages/Drink';
import Dessert from './pages/Dessert';
import Cake from './pages/Cake';
import SubPage from './pages/SubPage';
import DetailDrink from './pages/DetaillDrink'
import { useState } from 'react';
import {icecream, drink} from './pages/ProductData';
import Cart from './pages/Cart';
import DetailPage from './pages/DetailPage';
import DetailIcecream from './pages/DetailIcecream';
import { AnimatePresence } from 'framer-motion';

function App() {
    const [icecreams] = useState(icecream,drink);
  return (
    <div className="wrap">
        
    <AnimatePresence>
      <Routes>
          <Route path='/' element={<Main/>}/>
        <Route path='subpage' element={<SubPage/>}>
          <Route path='icecream' element={<Icecream/>}/>
          <Route path='coffee' element={<Coffee/>}/>
          <Route path='drink' element={<Drink/>}/>
          <Route path='cake' element={<Cake/>}/>
          <Route path='dessert' element={<Dessert/>}/>
        </Route>
        
        <Route path='detailpage' element={<DetailPage/>}>
          <Route path='detailicecream/:id' element={<DetailIcecream icecreams={icecreams}/>}/>
          <Route path='detaildrink/:id' element={<DetailDrink icecreams={drink}/>}/>
        </Route>

        <Route path='cart' element={<Cart/>}/>

      </Routes>
    </AnimatePresence>

    </div>
  );
}

export default App;
