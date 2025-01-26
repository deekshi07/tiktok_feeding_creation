import React, { useState } from 'react';
import axios from 'axios';

const ScriptGenerator = ({ contentIdea, onScriptGenerated }) => {
    const [script, setScript] = useState('');

    const generateScript = async () => {
        const response = await axios.post('http://127.0.0.1:8000/generate-script', { content_idea: contentIdea });
        setScript(response.data.script);
        onScriptGenerated(response.data.script);
    };

    return (
        <div>
            <h1>Generate Script</h1>
            <button onClick={generateScript}>Generate</button>
            {script && <p>{script}</p>}
        </div>
    );
};

export default ScriptGenerator;