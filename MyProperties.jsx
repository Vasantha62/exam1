import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MyProperties = ({ userId }) => {
  const [savedProperties, setSavedProperties] = useState([]);
  const [contactHistory, setContactHistory] = useState([]);

  useEffect(() => {
    // Fetch saved properties and contact history from server
    fetch(`/api/users/${userId}/saved-properties`)
      .then((response) => response.json())
      .then((data) => setSavedProperties(data));

    fetch(`/api/users/${userId}/contact-history`)
      .then((response) => response.json())
      .then((data) => setContactHistory(data));
  }, [userId]);

  return (
    <div>
      <h2>Saved Properties</h2>
      {savedProperties.length === 0 ? (
        <p>No saved properties</p>
      ) : (
        <ul>
          {savedProperties.map((property) => (
            <li key={property.id}>
              <Link to={`/property/${property.id}`}>{property.location}</Link>
              <p>{property.type}</p>
              <p>{property.price}</p>
            </li>
          ))}
        </ul>
      )}
      <h2>Contact History</h2>
      {contactHistory.length === 0 ? (
        <p>No contact history</p>
      ) : (
        <ul>
          {contactHistory.map((contact) => (
            <li key={contact.id}>
              <p>{contact.propertyLocation}</p>
              <p>{contact.timestamp}</p>
              <p>{contact.message}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyProperties;
