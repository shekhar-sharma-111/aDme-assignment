// // import React from 'react';
// import { useState } from "react";
// import useGetImage from "../../hooks/useGetImage";
// import "./ImageContainer.css";

// function ImageContainer (props) {
//     console.log(props.next)
//    const imgArray=[
//     "https://picsum.photos/id/102/4320/3240",
//     "https://picsum.photos/id/103/2592/1936",
//     "https://picsum.photos/id/104/3840/2160",
//     "https://picsum.photos/id/106/2592/1728",
//     "https://picsum.photos/id/103/2592/1936",
//   ]
//     const [Images,setImages]=useState(imgArray)

//     if(props.next.length)setImages(props.next);
    

//   return (<>
//     <div className="grid-container">
    
//        {Images&&Images.map((image, index) => (
//         <div key={index} className={`grid-item grid-item-${index + 1}`}>
//           <img src={image} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
//         </div>
//       ))}
//     </div>
//   </>
//   );
// };

// export default ImageContainer;
// import React from 'react';
import { useState} from "react";
import "./ImageContainer.css";

function ImageContainer(props) {
  const imgArray = [
    "https://picsum.photos/id/102/4320/3240",
    "https://picsum.photos/id/103/2592/1936",
    "https://picsum.photos/id/104/3840/2160",
    "https://picsum.photos/id/106/2592/1728",
    "https://picsum.photos/id/103/2592/1936",
  ];

  const [images, setImages] = useState(imgArray);
console.log(props.next);

  return (
    <div className="grid-container">
        {
            !props.next.length>0?(images.map((image, index) => (
                <div key={index} className={`grid-item grid-item-${index + 1}`}>
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))):(props.next.map((image, index) => (
                <div key={index} className={`grid-item grid-item-${index + 1}`}>
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              )))
        }
    
    </div>
  );
}

export default ImageContainer;
