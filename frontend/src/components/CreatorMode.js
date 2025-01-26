import React from 'react';

const CreatorMode = ({ onModeSelect }) => {
    return (
        <div>
            <h1>Select Creator Mode</h1>
            <button onClick={() => onModeSelect('storytelling')}>Storytelling</button>
            <button onClick={() => onModeSelect('educational')}>Educational</button>
            <button onClick={() => onModeSelect('entertainment')}>Entertainment</button>
        </div>
    );
};

export default CreatorMode;