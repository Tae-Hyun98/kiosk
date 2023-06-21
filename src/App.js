import './styles/App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Main from './pages/Main/Main';
import Icecream from './pages/Icecream';
import Coffee from './pages/Coffee';
import Drink from './pages/Drink';
import Dessert from './pages/Dessert';


function App() {
  return (
    <div className="wrap">
      <Routes>

        <Route path='/' element={<Main/>}/>/
        <Route path='icecream' element={<Icecream/>}/>
        <Route path='coffee' element={<Coffee/>}/>
        <Route path='drink' element={<Drink/>}/>
        <Route path='dessert' element={<Dessert/>}/>
      </Routes>
    </div>
  );
}

export default App;
