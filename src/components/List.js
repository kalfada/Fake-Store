import '../style/List.css'
import Item from './Item'

export default function List(props) {
    const {list} = props
    return(
        <ul>
            {list.map(item =>
            <Item item={item} key={item.id} />)}
        </ul>
    )
}