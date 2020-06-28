import React from 'react'
import useFetchGifts from '../hooks/useFetchGifts';
import GifGridItem from './GifGridItem';

function GifGrid({category}) {

  const {data:images ,loading} = useFetchGifts(category);

  return (
      <>
        <h3 className="animate__animated animate__fadeIn">{category}</h3>
        {loading && <p className="animate__animated animate__flash">Cargando...</p>}
        <div className="card-grid">
          {images.map((image)=>{
            return <GifGridItem key={image.id} {...image} />
          })}
        </div>
      </>
  )
};

export default GifGrid;
