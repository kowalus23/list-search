import React from 'react';

const ImageList = ({images}) => {
  const img = images.map((image) => {
    return <img key={image.id} src={image.urls.regular} alt="car"/>
  });

  return (
    <div>
      {img}
    </div>
  )
};

export default ImageList;