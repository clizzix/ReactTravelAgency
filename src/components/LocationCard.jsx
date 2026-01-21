import React from 'react';

const LocationCard = ({ props }) => {
    return (
        <div className="card bg-gray-700 w-96 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p className="font-bold">
                    {props.slug}, {props.country}
                </p>
            </div>
            <figure>
                <img src={props.src} alt={props.alt} />
            </figure>
        </div>
    );
};

export default LocationCard;
