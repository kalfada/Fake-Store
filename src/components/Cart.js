import { useContext } from 'react'
import CartItem from './CartItem'
import '../style/Cart.css'
import { CartContext } from '../App'

export default function Cart() {
    const {cartList, setCartList} = useContext(CartContext)    
    return(
        <div className='cart'>
            <div className='cart-title'>Cart</div>
            <div className='cart-products'>
                {cartList.map(product=> 
                    <CartItem item={product} key={`cart-${product.id}`}/>)}
            </div>
            <button>checkout</button>
        </div>
    )

}