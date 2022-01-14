import '../style/Item.css'

export default function Item(props) {
    const {item} = props
    return(
        <div className='item'>
            <div className='img' style={{ backgroundImage: `url(${item.image})`}}></div>
            <span className='title'>{item.title}</span>
            <div className='price'>{item.price}$</div>
            <button className='add_button'>Add to Cart</button>
        </div>
    )
}