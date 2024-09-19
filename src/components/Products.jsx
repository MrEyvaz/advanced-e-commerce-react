import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { GlobalContext } from './GlobalContext/GlobalContext';
import Navbar from './NavBar/NavBar';
import SideBar from './SideBar/SideBar'
import Footer from './Footer/Footer'

function Products() {
    const { Foods, addToCart } = useContext(GlobalContext);

    const navigate = useNavigate()

    const handleAddToCart = (product) => {
        addToCart(product)
        navigate('/basket')
    }

    return (
        <div>
            <Navbar />
            <div style={{ display: 'flex' }}>
                <SideBar />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 310px)', justifyContent: 'center', marginTop: '40px', marginLeft: '68px', width: '86%', marginTop: '30px' }}>
                    {Foods.map((product, index) => (
                        <Card key={product.id} style={{ width: '15rem', marginBottom: '40px' }}>
                            <Card.Img variant="top" src={product.img} style={{ width: '100%', height: '150px', objectFit: 'contain' }} />
                            <Card.Body>
                                <Card.Title>{product.text}</Card.Title>
                                <Card.Text>
                                    {product.title}
                                </Card.Text>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <Card.Text style={{ marginTop: '12px' }}>
                                        {product.price}$
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => handleAddToCart(product)}>
                                        Add to Cart
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Products;