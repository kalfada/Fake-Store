import '../style/Item.css'
import { useContext } from 'react'
import { CartContext } from '../App'

export default function Item(props) {
    const { item } = props
    const { cartList, setCartList } = useContext(CartContext)

    function addToCart() {

        const index = cartList.findIndex(i => i.id == item.id)
        if (index == -1) {
            item.quantity = 1
            setCartList([...cartList, item])
        } else {
            cartList[index].quantity += 1
            setCartList([...cartList])
        }
        console.log(cartList);
    }

    return (
        <div className='item'>
            <div className='img' style={{ backgroundImage: `url(${item.image})` }}></div>
            <span className='title'>{item.title}</span>
            <div className='price'>{item.price}$</div>
            <button className='add_button' onClick={addToCart}>Add to Cart</button>
        </div>
    )
}