import React from 'react';

const Hero = () => {
    return (
        <div className="hero bg-base-100 mt-8">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl text-accent font-bold">
                        Why Book with us?
                    </h1>
                    <h3 className="mt-8 font-bold text-xl">
                        The "Luxury & Ease"
                    </h3>
                    <p className="py-6">
                        Experience the world’s most iconic destinations with
                        premium accommodations and seamless itineraries. We
                        handle the details; you handle the memories.
                    </p>
                    <button className="btn btn-outline btn-primary">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
