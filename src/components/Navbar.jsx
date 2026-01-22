import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div className="navbar bg-base-300 shadow-sm justify-between">
            <h1 className="btn btn-ghost text-xl text-accent">Travel Europe</h1>
            <nav className="mr-4 flex gap-4">
                <Link className="hover:text-accent" to="/">
                    Home
                </Link>
                <Link className="hover:text-accent" to="/about">
                    About
                </Link>
                <Link className="hover:text-accent" to="/destinations">
                    Destinations
                </Link>
                <Link className="hover:text-accent" to="/contact">
                    Contact
                </Link>
            </nav>
        </div>
    );
};

export default Navbar;
