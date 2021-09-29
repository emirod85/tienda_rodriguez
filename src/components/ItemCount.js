import React, {useState} from 'react'
import CartWidget from './CartWidget'

const ItemCount = () => {
    const [count, setCount] = useState(0)
    const [stock, setStock] = useState(20)

    const incrementar = () => {
        if (count < stock) {setCount(count + 1)}
    }
    
    const decrementar = () => {
        if (count >= 1) {setCount(count - 1)}
    }

    const agregarCarrito = ()=> {
        setStock(stock - count)
        
    }

    return (
        <div className="ms-5">
            <h3>Stock: {stock}</h3>
            <h1>{count}</h1>
            <div className="button-wrapper">
                <button onClick={decrementar}>-</button>
                <button onClick={incrementar}>+</button>
                <button onClick={agregarCarrito}>Agregar al carrito</button>

            </div>
        </div>
    )
}

export default ItemCount

