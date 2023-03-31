import React from 'react'
import { Container } from 'react-bootstrap';
import {Col, Row} from 'react-bootstrap';
import { MdDelete } from "react-icons/md";
import { json } from 'react-router';


function Cart(){
    const CartItems = JSON.parse(localStorage.getItem("cart-items"))

    const PRODUCT_KEY = "cart-items"
    const removeItemHandler =(id)=>{
        let cartItem = CartItems.map(cartItem=> cartItem.id)
        const index = cartItem.findIndex(item => item === id)
       CartItems.splice(index, 1)
       localStorage.setItem("cart-items",JSON.stringify(CartItems))
        console.log(index);
        window.location.reload()

    }
  return (
    <div>
        <Container>
            <h2 className='py-5'>Your Cart Items</h2>
        {CartItems && CartItems.map((CartItems, index)=>(
                <Row key={index}>
                    <Col xs="12" lg="12">
                        <hr/>
                        <Row className='py-3'>
                            <Col xs="3" lg="3">
                                <img src={CartItems.img} height="90" width={115}></img>
                            </Col>
                            <Col xs="3" lg="2">
                                <h4>{CartItems.productName}</h4>
                            </Col>
                            <Col xs="3" lg="3">
                                <h4>Price: {CartItems.price}</h4>
                            </Col>
                            <Col xs="3" lg="1">
                            <MdDelete style={{color:"red", fontSize: '30px'}} onClick={() =>removeItemHandler(CartItems.id)}></MdDelete>
                            </Col>
                        </Row>
                    </Col>
                </Row>
        )) }
        </Container>
    </div>
  )
}

export default Cart;