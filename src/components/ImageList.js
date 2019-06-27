import React from 'react';

const ImageList = ({images}) => {
  const img = images.map(({id, urls, description}) => {
    return <img key={id} src={urls.regular} alt={description}/>
  });

  return (
    <div>
      {img}
    </div>
  )
};

export default ImageList;