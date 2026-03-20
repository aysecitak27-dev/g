import React, { useState } from 'react';

const YouTubeShortsPanel = () => {
    const [url, setUrl] = useState('');
    const [viewerCount, setViewerCount] = useState(0);
    const [watchDuration, setWatchDuration] = useState(0);
    const [isBotRunning, setIsBotRunning] = useState(false);

    const handleStartStop = () => {
        setIsBotRunning(!isBotRunning);
        // Add logic to start/stop the bot here
    };

    return (
        <div>
            <h1>YouTube Shorts Bot Control Panel</h1>
            <div>
                <label>Video URL:</label>
                <input 
                    type='text' 
                    value={url} 
                    onChange={(e) => setUrl(e.target.value)} 
                />
            </div>
            <div>
                <label>Viewer Count:</label>
                <input 
                    type='range' 
                    min='0' 
                    max='10000' 
                    value={viewerCount} 
                    onChange={(e) => setViewerCount(e.target.value)} 
                />
                <span>{viewerCount}</span>
            </div>
            <div>
                <label>Watch Duration (seconds):</label>
                <input 
                    type='range' 
                    min='0' 
                    max='600' 
                    value={watchDuration} 
                    onChange={(e) => setWatchDuration(e.target.value)} 
                />
                <span>{watchDuration}</span>
            </div>
            <div>
                <button onClick={handleStartStop}>{isBotRunning ? 'Stop' : 'Start'} Bot</button>
            </div>
            <div>
                <h3>Statistics</h3>
                <p>URL: {url}</p>
                <p>Viewer Count: {viewerCount}</p>
                <p>Watch Duration: {watchDuration} seconds</p>
                <p>Status: {isBotRunning ? 'Running' : 'Stopped'}</p>
            </div>
        </div>
    );
};

export default YouTubeShortsPanel;