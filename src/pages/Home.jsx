import React from 'react';
import Searchbar from '../components/Searchbar';

const Home = () => {
    return (
        <div className="container mx-auto m-4">
            <h1 className="text-center text-primary font-semibold text-4xl m-8">
                Discover Europes most beautiful Locations
            </h1>
            <Searchbar />
        </div>
    );
};

export default Home;
