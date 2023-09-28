import React, { useState } from "react";

const ClickableGif = ({ gifSrc, thumbnailSrc }) => {
    const [isPlaying, setIsPlaying] = useState(false)

    return (
        <div onClick={() => setIsPlaying(!isPlaying)}
        style={{ 
            position: 'relative', 
            cursor: 'pointer', 
            }}
          >
            {!isPlaying && 
        <div 
          style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)',
            fontSize: '10em', 
            color: 'black',
          }}
        >
          &#9654; {/* Unicode character for the play symbol */}
        </div>
      }
      <img src={isPlaying ? gifSrc : thumbnailSrc} alt="project" />
    </div>
  );
};

export default ClickableGif;