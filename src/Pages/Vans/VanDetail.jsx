import React, { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";

function VanDetail() {
  const params = useParams();
  const [van, setVan] = useState(null);
  const location = useLocation();
  // const search = location.state?.search || "";
  const search = (location.state && location.state.search) || "";
  const type = location.state?.type || "all";
  
  // console.log(search);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);
  console.log(params.id)

  return (
    <div className="van-detail-container">
      {van ? (
        <div className="van-detail">
          <Link to={`..${search}`} relative="path" className="back-button">
            &larr; <span>Back to {type} vans</span>
          </Link>

          <img src={van.imageUrl} alt={van.name} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name} </h2>
          <p className="van-price">
            <span>${van.price}</span> /day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this Van</button>
        </div>
      ) : (
        <h2>....Loading</h2>
      )}
    </div>
  );
}

export default VanDetail;
