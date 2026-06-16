import React from 'react';
import { Link } from 'react-router-dom';

const Navbar =() => {
    return(
        //Navbar
        <div>
            <nav className="bg-gray-800 text-white p-4">
                <ul className="flex flex-wrap justify-around">
                    <li className="p-2"><Link to="/" className="hover:text-red-500">Home</Link></li>
                    <li className="p-2"><Link to="/about" className="hover:text-red-500">About</Link></li>
                    <li className="p-2"><Link to="/contact" className="hover:text-red-500">Contact</Link></li>
                    <li className="p-2"><Link to="/services" className="hover:text-red-500">Services</Link></li>
                </ul>
            </nav>
        </div>
    )
};
export default Navbar;