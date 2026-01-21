import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Destinations from './pages/Destinations';
import Contact from './pages/Contact';
import MainLayout from './layouts/MainLayout';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/destinations" element={<Outlet />}>
                        <Route index element={<Destinations />} />
                    </Route>
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
