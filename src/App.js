import './style/App.css'
import axios from 'axios';
import { Routes, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import List from './components/List'

function App() {
  //init of component
  const [list, setList] = useState([])
  const [categories, setCategories] = useState([])
  
  //get all products
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setList(res.data))
  }, [])
  //get all categories
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/categories')
      .then(res => setCategories(res.data))
  }, [])

  //functions
  function routeToPath(path) {
    axios.get(`/${path}`)
  }
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Categories categories={categories} />}/>
        <Route path="/products" element={<List list={list} />} />
      </Routes>
    </div>
  );
}

export default App;
