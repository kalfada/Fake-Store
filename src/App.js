import './style/App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Categories from './components/Categories';
import List from './components/List'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/products/:category" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
