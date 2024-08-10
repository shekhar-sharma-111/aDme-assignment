// import React from 'react'

import { useState } from "react";
import ImageContainer from "../components/ImageContainer/ImageContainer";
import useGetImage from "../hooks/useGetImage";

function ImagePages() {
  const { images} = useGetImage();
  const [loadCount, setLoadCount] = useState(5);
  const [loading, setLoading] = useState(false);


  const [containers, setContainers] = useState([
    <ImageContainer next={loadMoreImages(loadCount)} />,
  ]);

// handleclick function   
  const loadNextContainer = async () => {
    setLoadCount(loadCount + 5);

    setContainers(() => {
      return [
        ...containers,
        <ImageContainer next={loadMoreImages(loadCount)} />,
      ];
    });
  };
// next 5 images 
  function loadMoreImages(start) {
    
    if (images.length === 0) {
      return <div>No images found</div>;
    }
    return images.slice(start, start + 5).map((image) => image.download_url);
  }


  return (
    <>
      <div className="image_page">{containers}</div>
      {loadCount < 100 && (
        <div className="d-flex justify-content-center m-2">
            {
                loading?<p>loadi</p>: <button onClick={loadNextContainer} disabled={loading} className="btn btn-primary" >
                load more
               </button>
            }
         
        </div>
      )}
    </>
  );
}

export default ImagePages;
