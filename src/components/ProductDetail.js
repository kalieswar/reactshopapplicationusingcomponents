import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const ProductDetail = () => {
    const [product, setProduct] = useState();
    const { id } = useParams();
    const STORAGE_KEY = "cart-items"


    const [items, setItems] = useState(() => {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
    })

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    }, [items])
    const addtoCart =(id,productName,price,img, quantity="1")=>{
        const existingitem = items.find(item => item.id === id)
        if(existingitem){
            existingitem.quantity += parseInt(quantity)
            setItems([...items])
        }else{
        setItems([...items, {id, productName,price,img,quantity: parseInt(quantity)}])
        }
        window.location.reload();
    }

    useEffect(() => {
        axios.get(`http://localhost:3001/products/${id}`).then(res => {
            setProduct(res.data)
        })
    }, [id])
    return (

        <div className='container'>
            {product ? (<Row>
                <Col lg="6" className='py-5'>
                    <img src={product.img} alt={product.productName} className="d-block w-100 imgss" height={400} width={400}></img>
                </Col>
                <Col lg="6" className='py-5'>
                    <h3 className='mt-3'>{product.productName}</h3>
                    <hr />
                    <h4 className='mt-4'>Product ID: #{product.id}</h4>
                    <hr />
                    <h2 className='my-5'>Price {product.price}</h2>
                    <Button className='btn-add px-5' onClick={() => addtoCart(product.id, product.productName, product.price, product.img, product.quantity)}>Add to Cart</Button>
                    <Button className='btn-add px-5 ms-3'>Buy now</Button>
                </Col>
            </Row>) : (null)}
        </div>
    )
}

export default ProductDetail