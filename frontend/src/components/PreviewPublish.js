import React from 'react';

const PreviewPublish = ({ videoUrl, onPublish, onEdit }) => {
    return (
        <div>
            <h1>Preview Your Video</h1>
            <video src={videoUrl} controls />
            <button onClick={onPublish}>Publish</button>
            <button onClick={onEdit}>Go Back to Edit</button>
        </div>
    );
};

export default PreviewPublish;