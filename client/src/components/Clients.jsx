import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_CLIENTS = gql`
  query getClients {
    clients {
      id
      name
      email
      phone
    }
  }
`;
export const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);
  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Clients</h1>
    </div>
  );
};
