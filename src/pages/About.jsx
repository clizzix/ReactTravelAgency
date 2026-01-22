import React from 'react';
import Rating from '../components/Rating';

const About = () => {
    return (
        <div>
            <div className="container flex flex-col justify-center items-center gap-4 max-w-3xl mx-auto mt-8">
                <h2 className="text-3xl text-primary font-semibold">
                    About Us
                </h2>
                <p className="text-center">
                    Born from a Love of Discovery We aren’t just a booking
                    platform; we’re a team of explorers, foodies, and history
                    buffs who call Europe home. We started{' '}
                    <span className="font-bold text-accent">
                        Travel Europe{' '}
                    </span>
                    because we grew tired of generic "tourist-trap" travel. We
                    believe that the best way to see the continent is through
                    local eyes. From the sun-baked plazas of Spain to the hidden
                    fjords of Norway, we hand-pick every hotel and experience to
                    ensure your holiday is as unique as you are.
                </p>
            </div>

            <div className="flex flex-col justify-center items-center mt-8 gap-4">
                <img
                    src="https://images.pexels.com/photos/20101853/pexels-photo-20101853.jpeg"
                    alt="Picture by Masood Aslami"
                    className="h-70 w-auto rounded-md"
                />
                <div className="flex gap-4 mt-4">
                    <div className="card bg-gray-700 w-96 shadow-sm">
                        <div className="card-body">
                            <Rating />
                            <h2 className="card-title">
                                The smoothest Roman holiday I've ever booked!
                            </h2>
                            <h3>@NomadNate82</h3>
                            <p>
                                I’ve always wanted to see Rome, but the planning
                                felt overwhelming until I found this site. The
                                'Local Insider' tips were a total
                                game-changer—we found a tiny, family-run
                                trattoria in the Monti district that we never
                                would have discovered on our own. The booking
                                process was seamless, and the hotel was
                                perfectly located within walking distance of the
                                Pantheon.
                            </p>
                            <a className="text-end text-primary hover:underline cursor-pointer">
                                View more Ratings
                            </a>
                        </div>
                    </div>
                    <div className="card bg-gray-700 w-96 shadow-sm">
                        <div className="card-body">
                            <Rating />
                            <h2 className="card-title">
                                A fairytale stay without the stress!
                            </h2>
                            <h3>@ClaraExplores</h3>
                            <p>
                                Prague has been on my bucket list forever, and
                                this site made it so easy to pull the trigger
                                and book. We stayed in a charming boutique hotel
                                in Malá Strana that felt like it was straight
                                out of a storybook. What I loved most was the
                                'Hidden Prague' guide provided after we
                                booked—it led us to a quiet garden overlooking
                                the Vltava River away from the crowds at the
                                Charles Bridge. Everything from the airport
                                transfer to the castle tour was perfectly
                                organized.
                            </p>
                            <a className="text-end text-primary hover:underline cursor-pointer">
                                View more Rating
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
