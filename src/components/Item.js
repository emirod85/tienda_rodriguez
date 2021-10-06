import React from 'react'
import {Card, Badge} from "react-bootstrap"
import ItemDetailContainer from "./ItemDetailContainer"

const Item = (props) => {
const {title, pictureUrl, stock} = props.props;

    return (
        <div className="col-sm-6 col-md-3">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={pictureUrl} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                <Badge bg="success">Stock: {stock}</Badge>
                            </Card.Text>
                            <ItemDetailContainer props={props.props}/>
                    </Card.Body>
            </Card>
        </div>
    );
}

export default Item
