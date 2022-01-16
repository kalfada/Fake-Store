import '../style/CartItem.css'

export default function CartItem(props) {
    const { item } = props
    return (
        <div className='cart-item'>
            <div className='cart-img' style={{ backgroundImage: `url(${item.image})` }}></div>
            <span className='cart-title'>{item.title}</span>
            <div className='cart-quantity'>{item.quantity}</div>
            <div className='cart-price'>{item.price * item.quantity}$</div>
        </div>
    )
}