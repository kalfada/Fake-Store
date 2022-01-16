import './style/App.css'
import Header from './components/Header';
import SiteBody from './components/SiteBody';
import { createContext, useState } from 'react';

export const CartContext = createContext()

function App() {
  const [cartList, setCartList] = useState([])
  
  return (
    <div className="App">
      <Header />
      <CartContext.Provider value={{cartList, setCartList}}>
        <SiteBody />
      </CartContext.Provider>
    </div>
  );
}

export default App;
