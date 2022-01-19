import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {

  const addItem = ( count ) => {
    alert(`Added ${count} ${count > 1 ? 'items' : 'item'} to the cart`)
  }
  
  return (
    <>
      <NavBar/>
      <ItemListContainer onAdd={addItem}/>
      <ItemDetailContainer onAdd={addItem}/>
    </>
  );
}

export default App;
