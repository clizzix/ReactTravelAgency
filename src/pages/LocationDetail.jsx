import React from 'react';
import { useParams, useNavigate } from 'react-router';
import { locations } from '../components/Locations';

const LocationDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const location = locations.find((l) => l.slug === slug);

    return (
        <div>
            {location ? (
                <div className="card lg:card-side bg-gray-700 shadow-sm">
                    <figure>
                        <img src={location.src} alt={location.alt} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl">
                            {location.slug}, {location.country}
                        </h2>
                        <h3 className="font-bold">{location.title}</h3>
                        <p>{location.description}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Booking</button>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    {' '}
                    <h2 className="text-xl font-semibold mb-2">
                        Location not found
                    </h2>
                    <p>
                        No location matched the slug: <strong>{slug}</strong>
                    </p>
                </>
            )}
            <button
                onClick={() => navigate(-1)}
                className="mt-6 text-sm text-primary hover:underline cursor-pointer"
            >
                ← Go Back
            </button>
        </div>
    );
};

export default LocationDetail;
