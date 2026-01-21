import React from 'react';
import { Link } from 'react-router';

const LocationCard = ({ props }) => {
    return (
        <div className="card bg-gray-700 w-96 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <Link
                    to={`/destinations/${props.slug}`}
                    className="font-bold hover:text-primary"
                >
                    {props.slug}, {props.country}
                </Link>
            </div>
            <figure>
                <img src={props.src} alt={props.alt} />
            </figure>
        </div>
    );
};

export default LocationCard;
