import './style/App.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import List from './components/List'

function App() {
  const [list, setList] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res=> setList(res.data))
  }, [])
  return (
    <div className="App">
      <Header />
      <List list={list}/>
    </div>
  );
}

export default App;
