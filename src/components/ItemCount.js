import React, {useState, useEffect} from 'react'
import {InputGroup, Button, FormControl} from "react-bootstrap"


const ItemCount = (props) => {
const {stock, initial, onAdd} = props.props;

    const [count, setCount] = useState(initial)
    const [actualStock, setActualStock] = useState(stock)

    const incrementar = () => {
        if (count < stock) {setCount(count + 1)}
    }
    
    const decrementar = () => {
        if (count >= 1) {setCount(count - 1)}
    }

    const agregarCarrito = ()=> {
        setActualStock(stock - count)
        
    }

    return (
        <div className="ms-5">
            <h3>Cantidad disponible: {actualStock}</h3>
            <InputGroup className="mb-3 form-calculator-minmax">
                <Button variant="outline-scondary" onClick={decrementar}>
                    -
                </Button>
                <FormControl aria-label="Example" ariadescribedby="basic-addon1" value={count} readOnly/>
                <Button variant="outline-scondary" onClick={incrementar}>
                    +
                </Button>

            </InputGroup>
            <Button variant="primary" onClick={agregarCarrito}>Agregar al carrito</Button>
            
            {/* <h1>{count}</h1>
            <div className="button-wrapper">
                <button onClick={decrementar}>-</button>
                <button onClick={incrementar}>+</button>
                <button onClick={agregarCarrito}>Agregar al carrito</button>

            </div> */}
        </div>
    )
}

export default ItemCount

