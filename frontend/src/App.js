import React, { useState } from 'react';
import CreatorMode from './components/CreatorMode';
import ScriptGenerator from './components/ScriptGenerator';
import CustomizationHub from './components/CustomizationHub';
import PreviewPublish from './components/PreviewPublish';

const App = () => {
    const [mode, setMode] = useState(null);
    const [script, setScript] = useState('');
    const [videoUrl, setVideoUrl] = useState('');

    return (
        <div>
            {!mode && <CreatorMode onModeSelect={setMode} />}
            {mode && !script && <ScriptGenerator contentIdea={mode} onScriptGenerated={setScript} />}
            {script && !videoUrl && <CustomizationHub onCustomize={(type) => console.log(`Customizing: ${type}`)} />}
            {videoUrl && <PreviewPublish videoUrl={videoUrl} onPublish={() => console.log('Published!')} onEdit={() => setVideoUrl('')} />}
        </div>
    );
};

export default App;