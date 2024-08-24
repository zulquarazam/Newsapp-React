import React from 'react';
import { useParams } from 'react-router-dom';

const DishDetails = () => {
  const { id } = useParams();

  
  return (
    <div>
      <h1>Dish Details Page</h1>
      <p>Details for dish with ID: {id}</p>
    </div>
  );
};

export default DishDetails;
