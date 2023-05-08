import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [vans, setVans] = React.useState([]);
  // console.log(searchParams.toString());

  const typeFilter = searchParams.get("type");
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);
  console.log(typeFilter);
  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vanElements = displayedVans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link
        to={van.id}
        state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
      >
        <img src={van.imageUrl} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price} <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  return (
    <div className="van-list-container">
      <h1>Exsplore our Van options</h1>
      <div className="van-list-filter-buttons">
        <button
          className={`van-type simple ${
            typeFilter === "simple" ? "selected" : ""
          }`}
          onClick={() => setSearchParams({ type: "simple" })}
        >
          Simple{" "}
        </button>
        <button
          className={`van-type rugged ${
            typeFilter === "rugged" ? "selected" : ""
          }`}
          onClick={() => setSearchParams({ type: "rugged" })}
        >
          Rugged
        </button>
        <button
          className={`van-type luxury ${
            typeFilter === "luxury" ? "selected" : ""
          }`}
          onClick={() => setSearchParams({ type: "luxury" })}
        >
          Luxury
        </button>

        {typeFilter ? (
          <button
            className="van-type clear-filters"
            onClick={() => setSearchParams({})}
          >
            Clear Search
          </button>
        ) : null}
      </div>

      <div className="van-list">{vanElements}</div>
    </div>
  );
}

export default Vans;
//   <Link to="?type=simple" className="van-type simple">
//     Simple
//   </Link>
//   <Link to="?type=rugged" className="van-type rugged">
//     Rugged
//   </Link>
//   <Link to="?type=luxury" className="van-type luxury">
//     Luxury
//   </Link>
//   <Link to="" className="van-type clear-filters">
//     Clear Search
//   </Link>
