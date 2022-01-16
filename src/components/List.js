import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../style/List.css'
import Item from './Item'

export default function List(props) {
    const {category} = useParams()
    const [list, setList] = useState([])

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/category/${category}`)
            .then(res => setList(res.data))
    }, [])


    return (
        <ul>
            {list.map(item =>
                <Item item={item} key={item.id} />)}
        </ul>
    )
}