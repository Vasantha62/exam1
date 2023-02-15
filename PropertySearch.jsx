import React, { useState } from 'react';

const PropertySearch = ({ properties, setFilteredProperties }) => {
  const [searchParams, setSearchParams] = useState({
    location: '',
    price: '',
    type: '',
  });

  const handleSearchChange = (event) => {
    const { name, value } = event.target;
    setSearchParams({ ...searchParams, [name]: value });
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const filteredProperties = properties.filter((property) => {
      const locationMatch = property.location
        .toLowerCase()
        .includes(searchParams.location.toLowerCase());
      const priceMatch = property.price
        .toLowerCase()
        .includes(searchParams.price.toLowerCase());
      const typeMatch = property.type
        .toLowerCase()
        .includes(searchParams.type.toLowerCase());
      return locationMatch && priceMatch && typeMatch;
    });
    setFilteredProperties(filteredProperties);
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <label>
        Location:
        <input
          type="text"
          name="location"
          value={searchParams.location}
          onChange={handleSearchChange}
        />
      </label>
      <label>
        Price:
        <input
          type="text"
          name="price"
          value={searchParams.price}
          onChange={handleSearchChange}
        />
      </label>
      <label>
        Type:
        <input
          type="text"
          name="type"
          value={searchParams.type}
          onChange={handleSearchChange}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default PropertySearch;
