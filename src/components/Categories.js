export default function Categories(props) {
    const {categories} = props

    return(
       <ul>
           {categories.map(category=>
            <li className="item">
                {category}
            </li>)}
       </ul>
    )
}