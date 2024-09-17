import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodIcon from '../../assets/Foods-images/Foody..png'
import Language from '../../assets/Icons/Language.png'
import MRIcon from '../../assets/Icons/MRIcon.png'
import ShoppingIcon from '../../assets/Icons/ShoppingIcon.png'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid" style={{ padding: '10px' }}>
                    <Link class="navbar-brand" to="#">
                        <img src={FoodIcon} alt="Bootstrap" />
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Restaurants</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-disabled="true">How it works</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                        <Link class="navbar-brand" to="#">
                            <img src={Language} alt="Bootstrap" />
                        </Link>
                        <Link class="navbar-brand" to="/basket">
                            <img src={ShoppingIcon} alt="Bootstrap" />
                        </Link>
                        <Link class="navbar-brand" to="#">
                            <img src={MRIcon} alt="Bootstrap" />
                        </Link>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar