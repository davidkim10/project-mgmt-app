import React from 'react';
import { Projects } from '../components/Projects';
import { Clients } from '../components/Clients';
import { AddClientModal } from '../components/AddClientModal';

export const Home = () => {
  return (
    <>
      <Projects />
      <Clients></Clients>
      <AddClientModal />
    </>
  );
};
