import { signOut } from 'firebase/auth';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase';
import { ToastContainer,toast } from 'react-toastify';

const NavBar = () => {
    const navigate=useNavigate()
    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate("/", { replace: true })
        } catch (error) {
            console.error("Logout Error:", error);
            toast.error("Failed to log out");
        }
    };
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light raleway-text">
                <div className="container">
                    <Link className="navbar-brand" to="/">Lettera</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/portfolio">Portfolio</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/careers">Careers</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/why-choose-us">Why Choose Us</Link></li>
                            <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                            <ToastContainer />
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar