import React from 'react'; // Importing React library
import './VideoPlayer.css'; // Importing styles for the VideoPlayer component
import Overlay from './Overlay'; // Importing the Overlay component

// VideoPlayer functional component
const VideoPlayer = ({ rtspUrl, overlays, onClose, setOverlays }) => {
    return (
        <div className="video-player" style={{ position: 'relative', width: '640px', height: '360px' }}>
            {/* Video element for playing the video stream */}
            <video 
                src={rtspUrl} // Source URL for the video
                autoPlay // Video will play automatically
                controls // Display video controls (play, pause, volume, etc.)
                style={{ width: '100%', height: '100%' }} // Make video fill the container
            />
            
            {/* Map through the overlays array and render an Overlay component for each overlay */}
            {overlays.map((overlay, index) => (
                <Overlay
                    key={overlay.id} // Unique key for each overlay, using overlay's id
                    overlay={overlay} // Passing the overlay data to the Overlay component
                    onClose={onClose} // Passing the onClose function to handle overlay removal
                    index={index} // Passing the index of the overlay for reference
                    setOverlays={setOverlays} // Passing the function to update overlays state
                />
            ))}
        </div>
    );
};

export default VideoPlayer; // Exporting the VideoPlayer component for use in other parts of the application