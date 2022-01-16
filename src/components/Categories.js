import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export default function Categories(props) {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories')
          .then(res => setCategories(res.data))
      }, [])

    return(
       <ul>
           {categories.map(category=>
            <Link to={`/products/${category}`} key={category}>
            <li className="item">
                {category}
            </li>
            </Link>)}
       </ul>
    )
}