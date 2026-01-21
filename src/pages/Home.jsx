import React from 'react';
import Searchbar from '../components/Searchbar';
import LocationCard from '../components/LocationCard';
import { locations } from '../components/Locations';

const Home = () => {
    return (
        <div className="container mx-auto m-4">
            <h1 className="text-center text-primary font-semibold text-4xl m-8">
                Discover Europes most beautiful Locations
            </h1>
            <Searchbar />
            <h2 className="text-center m-8 text-accent font-semibold text-3xl">
                Popular Destinations
            </h2>
            <div className="flex gap-8 m-4">
                {locations.slice(0, 3).map((location) => (
                    <LocationCard key={location.id} props={location} />
                ))}
            </div>
        </div>
    );
};

export default Home;
