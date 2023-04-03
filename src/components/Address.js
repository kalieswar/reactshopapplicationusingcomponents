import React, { useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { useNavigate } from 'react-router'

const Address = () => {
    const navigate = useNavigate()
    const [shippingInfo, setShippingInfo]=useState({
        address:"",
        city:"",
        phone:"",
        postalCode:"",
        country:"",
        state:"",
    })

    const submitHandler = (e)=>{
        e.preventDefault();
        localStorage.setItem("shipping-info",JSON.stringify(shippingInfo))
        if(!shippingInfo.address||
            !shippingInfo.city||
            !shippingInfo.state||
            !shippingInfo.country||
            !shippingInfo.postalCode||
            !shippingInfo.phone){
                alert("Pls fill all the details")
            }else navigate("/orderdetails")
    }

    const handleChange = (e)=>{
        const{name,value}=e.target;
        setShippingInfo(prevState=>({...prevState,[name]:value}))
    }

  return (
    <Container>
        <Row>
            <Col xs={10} lg={5} className='paddingg'>
                <form onSubmit={submitHandler} className='shadow-lg p-4'>
                    <h1>Shipping Info</h1> 
                    <div className='form-group'>
                        <label>Address</label>
                        <input type='text' className='form-control' name='address' value={shippingInfo.address} onChange={handleChange}/>
                    </div>
                    <div className='form-group'>
                        <label>City</label>
                        <input type='text' className='form-control' name='city' value={shippingInfo.city} onChange={handleChange}/>
                    </div>
                    <div className='form-group'>
                        <label>Phone No</label>
                        <input
                            type='phone'
                            className='form-control'
                            name='phone'
                            value={shippingInfo.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Postal Code</label>
                        <input
                            type='number'
                            className='form-control'
                            name='postalCode'
                            value={shippingInfo.postalCode}
                            onChange={handleChange} 
                        />
                    </div>
                    <div className='form-group'>
                        <label>Country</label>
                        <input
                            type='text'
                            className='form-control'
                            name='country'
                            value={shippingInfo.country}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label>State</label>
                        <input
                            type='text'
                            className='form-control'
                            name='state'
                            value={shippingInfo.state}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='d-grid gap-2 mt-3'>
                    <button className='btn btn-primary'
                    type='submit'
                    >
                        Continue
                    </button>
                    </div>
                </form>
            </Col>
        </Row>
    </Container>
  )
}

export default Address