import React from 'react';
import { useNavigate } from 'react-router';

const Searchbar = () => {
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate('/destinations');
    };

    return (
        <div className="flex flex-nowrap">
            <input type="text" placeholder="Origin" className="input" />
            <input type="text" placeholder="Destination" className="input" />
            <input type="date" placeholder="Origin" className="input" />
            <input type="date" placeholder="Origin" className="input" />
            <button
                className="btn btn-outline btn-primary"
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
    );
};

export default Searchbar;
