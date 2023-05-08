import React from 'react'
import { useOutletContext } from 'react-router-dom';

export default function() {
  const { currentVan } = useOutletContext();
    console.log(currentVan);

  return (
    <div>
        <img src={currentVan.imageUrl} alt="" width={150} />
    </div>
  )
}
