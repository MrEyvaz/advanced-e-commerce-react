import React from 'react'
import FoodyYellowIcon from '../../assets/Icons/FoodyYellowIcon.png'
import FacebookIcon from '../../assets/Icons/facebook.png'
import InstagramIcon from '../../assets/Icons/InstagramIcon.png'
import TwitterIcon from '../../assets/Icons/TwitterIcon.png'

function Footer() {
    return (
        <div className="bg-dark text-white">
            <footer className="py-5" style={{ height: '353px', width: '99%' }}>
                <div className="row ms-5 d-flex justify-content-between">
                    < div className="col-2">
                        <img src={FoodyYellowIcon} alt="FoodyYellowIcon" />
                        <p style={{ color: 'rgba(130, 130, 130, 1)', fontSize: '15px' }}>Lorem ipsum is placeholder text commonly used in the graphic</p>
                        <img src={FacebookIcon} alt="FacebookIcon" style={{ borderRadius: '50%', border: '2px solid #ccc', padding: '3px' }} />
                        <img src={InstagramIcon} alt="InstagramIcon" style={{ borderRadius: '50%', border: '2px solid #ccc', padding: '5px', marginLeft: '20px', marginRight: '20px', backgroundColor: 'rgb(251,147,0)' }} />
                        <img src={TwitterIcon} alt="TwitterIcon" style={{ borderRadius: '50%', border: '2px solid #ccc', padding: '10px' }} />
                    </div>

                    <div className="col-2">
                        <h5>Popular</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Programming</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Books for children</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">About the store</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Business</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">About</a></li>
                        </ul>
                    </div>

                    <div className="col-2">
                        <h5>Cash</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Delivery</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Payment</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">About the store</a></li>
                        </ul>
                    </div>

                    <div className="col-2">
                        <h5>Help</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Contacts</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Purchase returns</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Buyer help</a></li>
                        </ul>
                    </div>
                </div>

                <div className="d-flex justify-content-between py-4 my-4 border-top">
                    <p className='d-flex justify-content-center' style={{ width: '100vw' }}>&copy; All rights reserved © 2003-2022 Foody TERMS OF USE | Privacy Policy</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer