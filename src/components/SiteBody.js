import { Routes, Route } from "react-router-dom"
import Categories from './Categories';
import List from './List'
import Cart from './Cart'
import '../style/SiteBody.css'

export default function SiteBody() {
    return (
        <div className="site-body">
        <Cart />
        <Routes>
            <Route path="/" element={<Categories />} />
            <Route path="/products/:category" element={<List />} />
        </Routes>
        </div>
    )
}