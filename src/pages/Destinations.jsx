import React from 'react';
import { locations } from '../components/Locations';
import LocationCard from '../components/LocationCard';

const Destinations = () => {
    return (
        <div>
            <h2 className="text-center text-primary text-4xl font-semibold m-8">
                Destinations
            </h2>
            <ul className="flex gap-8">
                {locations.map((location) => (
                    <LocationCard key={location.id} props={location} />
                ))}
            </ul>
        </div>
    );
};

export default Destinations;
