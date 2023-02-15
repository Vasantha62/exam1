import React from 'react';

const UserDashboard = ({ savedProperties, contactHistory }) => {
  return (
    <div>
      <h2>Saved Properties</h2>
      <ul>
        {savedProperties.map((property) => (
          <li key={property.id}>
            <h3>{property.location}</h3>
            <img src={property.image} alt={property.location} />
            <p>{property.description}</p>
            <p>Price: {property.price}</p>
            <p>Type: {property.type}</p>
            <p>Location: {property.location}</p>
          </li>
        ))}
      </ul>
      <h2>Contact History</h2>
      <ul>
        {contactHistory.map((contact) => (
          <li key={contact.id}>
            <h3>{contact.agentName}</h3>
            <p>Email: {contact.agentEmail}</p>
            <p>Message: {contact.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDashboard;
