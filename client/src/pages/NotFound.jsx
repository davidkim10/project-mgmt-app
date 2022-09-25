import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div>
      <h1>404 Page Not Found</h1>
      <Link to="/">Return Home</Link>
    </div>
  );
};
