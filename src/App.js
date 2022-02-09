import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound/NotFound';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';
import AddItem from './components/AddItem/AddItem';

function App() { 
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={ <ItemListContainer/>}/>
          <Route path='/category/:id' element={ <ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/addItems' element={<AddItem/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
