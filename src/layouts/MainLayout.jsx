import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto mt-4 mb-8">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default MainLayout;
