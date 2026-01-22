import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-base-300 text-neutral-content p-10">
            <nav>
                <h6 className="footer-title">Services</h6>
                <Link to="/destinations" className="link link-hover">
                    Destinations
                </Link>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <Link to="/about" className="link link-hover">
                    About
                </Link>
                <Link to="/contact" className="link link-hover">
                    Contact
                </Link>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <Link to="" className="link link-hover">
                    Terms of use
                </Link>
                <Link to="" className="link link-hover">
                    Privacy policy
                </Link>
                <Link to="" className="link link-hover">
                    Cookie policy
                </Link>
            </nav>
        </footer>
    );
};

export default Footer;
