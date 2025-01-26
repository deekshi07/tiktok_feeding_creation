import React from 'react';

const CustomizationHub = ({ onCustomize }) => {
    return (
        <div>
            <h1>Customize Your Video</h1>
            <button onClick={() => onCustomize('visuals')}>Edit Visuals</button>
            <button onClick={() => onCustomize('audio')}>Edit Audio</button>
            <button onClick={() => onCustomize('text')}>Edit Text</button>
        </div>
    );
};

export default CustomizationHub;
