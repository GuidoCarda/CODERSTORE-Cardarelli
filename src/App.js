import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound/NotFound';

function App() {

  const addItem = ( count ) => {
    alert(`Added ${count} ${count > 1 ? 'items' : 'item'} to the cart`)
  }
  
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={ <ItemListContainer onAdd={addItem}/>}/>
        <Route path='/category/:id' element={ <ItemListContainer onAdd={addItem}/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer onAdd={addItem}/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
