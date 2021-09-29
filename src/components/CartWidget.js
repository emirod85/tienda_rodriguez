import React, {useState} from 'react';
import { HiOutlineShoppingCart } from "react-icons/hi";

const CartWidget = () => {
    const [cantidadCarrito, setCantidad] = useState(0)

    return (
        <a>
            <HiOutlineShoppingCart />
            
            <div>
                {cantidadCarrito}
            </div>
        </a>

     
        
    )
}

export default CartWidget