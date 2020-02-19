import React from 'react';
import Movies from './Movies';
import getGallery from './gallery-get';

export default function Gallery() {
  return (
    <div>
      <div className='container'>
        {
          getGallery().map(stack => (
             <Movies 
             key={stack.id}
             id={stack.id} 
             name={stack.name} 
             cover={stack.cover} 
             videoId={stack.videoId} />
          ))
        }
      </div>
    </div>
  );
}

