import React from 'react'
import { useOutletContext } from 'react-router-dom';

export default function HostVanPricing() {
  const  {currentVan} = useOutletContext()
    console.log(currentVan);


  return (
    <div>
      <h2>{currentVan.price} / Day</h2>
    </div>
  );
}
