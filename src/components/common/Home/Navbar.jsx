import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
    return (
        <div className="h3 navbar text-white bg-dark text-light">
            <Link to="/" className="nav-item">
                Home
            </Link>
            <Link to="/orders" className="h3 text-white nav-item">
                Orders
            </Link>
            
        </div>
    )
}
