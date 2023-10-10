import React, { useState, useEffect } from 'react';
import "./photoTransition.css"

function PhotoTransition({ photos }) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) =>
        prevIndex === photos.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    console.log("working it", currentPhotoIndex);

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, [currentPhotoIndex]);

  return (
    <div className="photo-tr">
      {photos && <img className="photo-tr-img"
        src={photos[currentPhotoIndex].url_original}
        alt={`Photo ${currentPhotoIndex + 1}`}
      />}
    </div>
  );
}

export default PhotoTransition;
