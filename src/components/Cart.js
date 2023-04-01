import React, { useState, useEffect, Fragment } from 'react'
import { Container } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';
import { MdDelete } from "react-icons/md";

function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("cart-items")) || [];
        setCartItems(items);
    }, []);

    const removeItemHandler = (id) => {
        const updatedItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedItems);
        localStorage.setItem("cart-items", JSON.stringify(updatedItems));
    }

    const increaseItemQuantity = (id) => {
        const updatedItems = cartItems.map(item => {
            if (item.id === id) {
                const quantity = parseInt(item.quantity) || 0
                item.quantity = quantity + 1
            }
            return item
        })
        setCartItems(updatedItems);
        localStorage.setItem("cart-items", JSON.stringify(updatedItems));
    }

    const decreaseItemQuantity = (id) => {
        const updatedItems = cartItems.map(item => {
            if (item.id === id) {
                const quantity = parseInt(item.quantity)
                item.quantity = quantity - 1
            }
            return item
        }).filter(item => item.quantity > 0);
        setCartItems(updatedItems);
        localStorage.setItem("cart-items", JSON.stringify(updatedItems));
    }

    return (
        <div>
            <Container>
                <Fragment>
                    {cartItems.length === 0 ? <h2 className='py-5'>Your Cart is empty</h2> :
                    <Fragment>
                        <h2>You cart:{cartItems.length} items</h2>

                    <Row >
                        <Col xs="12" lg="8">
                            <hr />
                            {cartItems && cartItems.map((item, index) => (
                                <Row className='py-3' key={index}>
                                    <Col xs="3" lg="3">
                                        <img src={item.img} alt={item.productName} height="90" width={115}></img>
                                    </Col>
                                    <Col xs="3" lg="2">
                                        <h4>{item.productName}</h4>
                                    </Col>
                                    <Col xs="3" lg="3">
                                        <h4>Price: {item.price}</h4>
                                    </Col>
                                    <Col xs="2" lg="3">
                                        <span className='btn btn-danger' onClick={() => decreaseItemQuantity(item.id)}>-</span>
                                        <input type='number' className='form-control count d-inline' value={item.quantity} readOnly />
                                        <span className='btn btn-primary' onClick={() => increaseItemQuantity(item.id)}>+</span>
                                    </Col>
                                    <Col xs="1" lg="1">
                                        <MdDelete style={{ color: "red", fontSize: '30px' }} onClick={() => removeItemHandler(item.id)}></MdDelete>
                                    </Col>
                                </Row>))}
                        </Col>
                        <Col xs={12} lg={3} className='my-4'>
                            <div className='border-order'>
                                <h2 className='p-3'>Order Summary</h2>
                                <hr />
                                <h3 className='p-4'>Subtotal: <span>{cartItems.reduce((acc,item)=>(acc+item.quantity),0)}Units</span></h3>
                                <h3 className='p-4'>Est. Total Price:<span>${cartItems.reduce((acc,item)=>(acc+item.quantity*item.price),0)}</span></h3>
                                <hr />
                                <button className='btn btn-primary'>Check Out</button>
                            </div>
                        </Col>
                    </Row>
                    </Fragment>}
                </Fragment>
            </Container>
        </div>
    )
}

export default Cart;