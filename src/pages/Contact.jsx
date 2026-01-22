import React from 'react';

const Contact = () => {
    return (
        <div>
            <h2 className="font-bold text-center text-3xl text-accent mt-8">
                Contact Us
            </h2>
            <p className="text-center mt-4 max-w-xl mx-auto">
                Have questions, ideas, or want to join a trip? Send us a message
                and we’ll get back to you soon!
            </p>
            <form className="bg-gray-700 p-8 max-w-2xl mx-auto mt-8 rounded-lg flex flex-col gap-4">
                <div className="form-control w-full">
                    <label className="label" htmlFor="name">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your full name"
                        id="name"
                        name="name"
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div className="form-control w-full">
                    <label className="label" htmlFor="email">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="you@example.com"
                        id="email"
                        name="email"
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div className="form-control w-full">
                    <label className="label" htmlFor="message">
                        <span className="label-text">Message</span>
                    </label>
                    <textarea
                        placeholder="Type your message here..."
                        id="message"
                        name="message"
                        className="textarea textarea-bordered w-full"
                        rows="5"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
