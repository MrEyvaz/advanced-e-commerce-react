import React, { useContext, useState } from 'react';
import { GlobalContext } from './GlobalContext/GlobalContext';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navbar from './NavBar/NavBar';
import { useNavigate } from 'react-router-dom';

function Basket() {
    const { cart, removeFromCart } = useContext(GlobalContext);

    const [quantity, setQuantity] = useState(1)

    const handleDecrement = (product) => {
        if (quantity > 1) {
            setQuantity(prevCount => prevCount - 1)
            product.price =- product.price
        }
    }

    const handleIncrement = (product) => {
        setQuantity(prevCount => prevCount + 1)
        product.price =+ product.price
    }

    return (
        <div>
            {(!cart || cart.length === 0) ? (
                <>
                    <Navbar />
                    <p>Your cart is empty.</p>
                </>
            ) : (
                <div>
                    <Navbar />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 340px)', justifyContent: 'center', marginTop: '40px', marginLeft: '68px' }}>
                        {cart.map((product) => (
                            <Card key={product.id} style={{ width: '18rem', marginBottom: '20px' }}>
                                <Card.Img variant="top" src={product.img} style={{ width: '100%', height: '150px', objectFit: 'contain' }} />
                                <Card.Body>
                                    <Card.Title>{product.text}</Card.Title>
                                    <div className='d-flex justify-content-between align-items-center' style={{ marginTop: '20px' }}>
                                        <div>
                                            <Card.Text style={{ fontSize: '19px' }}>
                                                {product.price}
                                            </Card.Text>
                                        </div>

                                        <div className='d-flex justify-content-around align-items-center' style={{ border: '1px solid', width: '100px', borderRadius: '5px', padding: '4px', fontSize: '18px' }}>
                                            <span onClick={handleDecrement}>-</span>
                                            <span>{quantity}</span>
                                            <span onClick={handleIncrement}>+</span>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Button variant="primary" style={{ marginTop: '30px' }}>Check out</Button>
                                        <Button variant="danger" style={{ marginTop: '30px' }} onClick={() => removeFromCart(product.id)}>Remove</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
            )
            }
        </div >
    );
}

export default Basket;
