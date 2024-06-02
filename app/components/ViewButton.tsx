'use client'
import React, { useState } from 'react';
interface ViewButtonIn{
    id:number,
}
const ViewButton: React.FC<ViewButtonIn> = ({ id }) => {
    const [showId, setShowId] = useState(false);

    const handleClick = () => {
        setShowId(prevShowId => !prevShowId);
    };

    return (
        <>
            <button 
                className="border-yellow-500 py-1 text-white px-2 rounded-xl border-2" 
                onClick={handleClick}
            >
                click
            </button>
            {showId && <h1>{`user idnya: ${id}`}</h1>}
        </>
    )
}

export default ViewButton
