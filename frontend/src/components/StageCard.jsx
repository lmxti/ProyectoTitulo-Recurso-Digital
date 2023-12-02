import React from 'react';

const StageCard = ({ stage }) => {
    const { name, image, progress } = stage;

    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '200px' }}>
            <img src={image} alt={name} style={{ maxWidth: '100%' }} />
            <h3>{name}</h3>
            <p>Progress: {progress}%</p>
        </div>
    );
};

export default StageCard;