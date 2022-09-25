import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CLIENTS } from '../queries/clientQueries';
import { ClientRow } from './ClientRow';
import { Loading } from './Loading';

export const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);
  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <table className="table table-striped table-hover mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.clients.map((client) => (
            <ClientRow key={client.id} client={client} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
