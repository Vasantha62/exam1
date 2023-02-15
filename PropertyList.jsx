import React from 'react';

const PropertyList = ({ properties }) => {
  return (
    <div>
      {properties.map((property) => (
        <div key={property.id}>
          <img src={property.image} alt={property.address} />
          <h2>{property.address}</h2>
          <p>{property.type}</p>
          <p>{property.price}</p>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
