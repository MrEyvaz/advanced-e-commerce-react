import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from './GlobalContext/GlobalContext';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navbar from './NavBar/NavBar';

function Basket() {
    const { cart, removeFromCart } = useContext(GlobalContext);

    const [quantity, setQuantity] = useState({});

    useEffect(() => {
        const initialQuantity = {};
        cart.forEach(product => {
            initialQuantity[product.id] = 1;
        });
        setQuantity(initialQuantity);
    }, [cart]);

    const calculateTotalPrice = (price, id) => {
        const productQuantity = quantity[id] || 1;
        return price * productQuantity;
    }

    const handleDecrement = (id) => {
        setQuantity(prevCount => ({
            ...prevCount,
            [id]: Math.max((prevCount[id] || 1) - 1, 1)
        }));
    }

    const handleIncrement = (id) => {
        setQuantity(prevCount => ({
            ...prevCount,
            [id]: (prevCount[id] || 1) + 1
        }));
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
                                                {calculateTotalPrice(product.price, product.id)}$
                                            </Card.Text>
                                        </div>

                                        <div className='d-flex justify-content-around align-items-center' style={{ border: '1px solid', width: '100px', borderRadius: '5px', padding: '4px', fontSize: '18px' }}>
                                            <span onClick={() => handleDecrement(product.id)}>-</span>
                                            <span>{quantity[product.id]}</span>
                                            <span onClick={() => handleIncrement(product.id)}>+</span>
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
            )}
        </div>
    );
}

export default Basket;
