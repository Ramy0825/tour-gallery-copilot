import React from 'react';

function TourCard({ tour, removeTour }) {
  const { id, name, info, image, price } = tour;

  return (
    <div className="tour-card">
      <img src={image} alt={name} />
      <div className="tour-details">
        <h2>{name}</h2>
        <h4>${price}</h4>
        <p>{info}</p>
        <button onClick={() => removeTour(id)}>Not Interested</button>
      </div>
    </div>
  );
}

export default TourCard;
// This component is responsible for displaying individual tour details.