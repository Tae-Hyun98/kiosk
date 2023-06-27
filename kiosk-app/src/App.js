import './styles/App.css';
import {Routes, Route} from 'react-router-dom';
import Main from './pages/Main';
import Icecream from './components/subcomponents/Icecream';
import Coffee from './components/subcomponents/Coffee';
import Drink from './components/subcomponents/Drink';
import Dessert from './components/subcomponents/Dessert';
import Cake from './components/subcomponents/Cake';
import SubPage from './pages/SubPage';
import icecreams from './pages/IcecreamData';
import Cart from './pages/Cart';
import DetailPage from './pages/DetailPage';
import DetailDrink from './pages/DetaillDrink'
import DetailIcecream from './pages/DetailIcecream';
import DetailCoffee from './pages/DetailCoffee';
import DetailCake from './pages/DetailCake';
import DetailDessert from './pages/DetailDessert';
import coffees from './pages/CoffeeData';
import drink from './pages/DrinkData';
import cakes from './pages/CakeData';
import desserts from './pages/DessertData';
import { AnimatePresence } from 'framer-motion';


function App() {
  return (
    <div className="wrap">
        
    <AnimatePresence wait>
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
          <Route path='detaildrink/:id' element={<DetailDrink drink={drink}/>}/>
          <Route path='detailcoffee/:id' element={<DetailCoffee coffees={coffees}/>}/>
          <Route path='detailcake/:id' element={<DetailCake cakes={cakes}/>}/>
          <Route path='detaildessert/:id' element={<DetailDessert desserts={desserts}/>}/>
        </Route>

        <Route path='cart' element={<Cart/>}/>

      </Routes>
    </AnimatePresence>

    </div>
  );
}

export default App;
