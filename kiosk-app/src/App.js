import './styles/App.css';
import {Routes, Route} from 'react-router-dom';
import NotFound404 from './pages/NotFound404';
import Main from './pages/Main';
import Icecream from './pages/Icecream';
import Coffee from './pages/Coffee';
import Drink from './pages/Drink';
import Dessert from './pages/Dessert';
import Cake from './pages/Cake';
import SubPage from './pages/SubPage';
import icecreams from './pages/dataset/IcecreamData';
import CartPage from './pages/CartPage';
import DetailPage from './pages/DetailPage';
import DetailDrink from './pages/DetaillDrink'
import DetailIcecream from './pages/DetailIcecream';
import DetailCoffee from './pages/DetailCoffee';
import DetailCake from './pages/DetailCake';
import DetailDessert from './pages/DetailDessert';
import coffees from './pages/dataset/CoffeeData';
import drink from './pages/dataset/DrinkData';
import cakes from './pages/dataset/CakeData';
import desserts from './pages/dataset/DessertData';
import { AnimatePresence } from 'framer-motion';


function App() {
  return (
    <div className="wrap">
        
    <AnimatePresence wait>
      <Routes>
        {/* 접근경로오류 */}
        <Route path="*" element={<NotFound404 />}/> 
          
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
          <Route path='detaildrink/:id' element={<DetailDrink drink={drink}/>}/>
          <Route path='detailcoffee/:id' element={<DetailCoffee coffees={coffees}/>}/>
          <Route path='detailcake/:id' element={<DetailCake cakes={cakes}/>}/>
          <Route path='detaildessert/:id' element={<DetailDessert desserts={desserts}/>}/>
        </Route>

        <Route path='cart' element={<CartPage/>}/>

      </Routes>
    </AnimatePresence>

    </div>
  );
}

export default App;
