import React from 'react';
import ContactForm from './ContactForm';

const PropertyDetails = ({ property, agentEmail }) => {
  return (
    <div>
      <h2>{property.location}</h2>
      <img src={property.image} alt={property.location} />
      <p>{property.description}</p>
      <p>Price: {property.price}</p>
      <p>Type: {property.type}</p>
      <p>Location: {property.location}</p>
      <ContactForm agentEmail={agentEmail} />
    </div>
  );
};

export default PropertyDetails
