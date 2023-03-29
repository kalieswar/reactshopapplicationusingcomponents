import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import products from '../Product';

function Product() {
  return (
<Container fluid className='py-4 gx-2'>
    <h1 className='text-center'>Our Shop Products</h1>
<Row className='mx-5 pt-3'>

        {products.map((product) => (
                <Col lg="4" sm="12" md="6">
 <Card style={{ width: '15rem' }}>
 <Card.Img variant="top" src={product.img} className='p-5 imgs'/>
 <Card.Body>
   <Card.Title className='text-center'>{product.productName}</Card.Title>
   <Card.Text className='text-center'>
     Price {product.price}
   </Card.Text>
   <Button variant="primary" className='padbtn'>Buy Now</Button>
 </Card.Body>
</Card>
  </Col>
        ))}

  </Row>

</Container>
  );
}

export default Product;