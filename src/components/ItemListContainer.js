import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { Row, Col } from "react-bootstrap";
import productsData from "./data/productsData.json";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ match }) => {
  const [productList, setProductList] = useState(0);
  const params = useParams();
console.log(params)
  useEffect(() => {
    const promiseData = new Promise((resolve, reject) => {
      setTimeout(function () {
        if (params.category) {
          resolve(
            productsData.filter(
              (productos) => productos.category === params.category
            )
          );
        } else {
          resolve(productsData);
        }
      }, 2000);
    });

    promiseData.then((response) => {
      setProductList(response);
    });
  }, []);

  return (
    <>
      <Row md="auto" className="item-list-container">
        <Col className="flex row">
          <ItemList items={productList} />
        </Col>
      </Row>
    </>
  );
};

export default ItemListContainer;
