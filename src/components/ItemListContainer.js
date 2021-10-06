import React from 'react';
import {useState, useEffect} from "react";
import ItemList from "./ItemList"
import {Row, Col} from "react-bootstrap"
import productsData from "./data/productsData.json"

const ItemListContainer = () => {
const [productList, setProductList] = useState(0)

useEffect(()=>{ 

    const promiseData = new Promise((resolve, reject)=>{
        setTimeout(
            function(){resolve(productsData)}, 2000
        );
    });

    promiseData.then((response)=>{
        setProductList(response)
        })
    },[]);

    return (
        <>
            <Row md="auto" className="item-list-container">
                <Col className="flex row">
                    <ItemList items={productList} />
                </Col>
            </Row>   
        </>
    )
}

export default ItemListContainer
