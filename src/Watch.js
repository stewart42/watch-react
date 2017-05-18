import React from 'react';
import './Watch.css';

const Watch = ({watch}) => {
    return (
        <div
            className="list-item"
        >
            <div className="cell">{watch.id}</div>
            <div className="cell">{watch.name}</div>
            <div className="cell">{watch.price}</div>
            <div className="cell">{watch.warranty}</div>
        </div>
    );
};

export default Watch;