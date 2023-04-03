import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

function Product() {
  const [products, setProducts] = useState();
  const STORAGE_KEY = "cart-items"


  const [items, setItems] = useState(()=> {
     return JSON.parse(localStorage.getItem(STORAGE_KEY) ) || []
  })

  useEffect(()=>{
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  },[items] )
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
    axios.get(`http://localhost:3001/products`).then(res => {
      setProducts(res.data);
    })
  },[])
  const navigate =useNavigate();

  const handleClick = (id) =>{
    navigate(`/product/${id}`)
  } 

  return (
    <Container fluid className='py-4 gx-2'>
      <h1 className='text-center'>Our Shop Products</h1>
      <Row className='mx-5 pt-3'>

        {products && products.map((product) => (
          <Col lg="4" sm="12" md="6">
            <Card style={{ width: '15rem' }} key={product} >
              <Card.Img variant="top" src={product.img} onClick={()=>handleClick(product.id)} className='p-5 imgs' />
              <Card.Body>
                <Card.Title className='text-center'>{product.productName}</Card.Title>
                <Card.Text className='text-center'>
                  Price {product.price}
                </Card.Text>
                <Button variant="primary" className='padbtn'>Buy Now</Button>
                <Button variant="primary" className='padbtn mt-2' onClick={()=>addtoCart(product.id, product.productName,product.price, product.img, product.quantity)}>Add cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}

      </Row>

    </Container>
  );
}

export default Product;