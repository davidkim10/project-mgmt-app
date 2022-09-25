import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PROJECTS } from '../queries/projectQueries';
import { Loading } from './Loading';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;
  if (!data?.projects?.length) return 'No projects';

  return (
    <div className="row mt-4">
      {data.projects.map((project) => {
        return <ProjectCard key={project.id} project={project} />;
      })}
    </div>
  );
};
