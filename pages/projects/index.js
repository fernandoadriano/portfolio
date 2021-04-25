import React from 'react';
import PropTypes from 'prop-types';
import ProjectAPI from 'src/data';

import Projects from 'src/regions/Projects';
import MainScreen from 'src/screens/templates/MainScreen';

export default function ProjectsPage({ projects }) {
  return (
    <MainScreen
      headTitle="Portifólio de Projetos"
      description="Lista de projetos desenvolvidos por mim"
    >
      <Projects projects={projects} />
    </MainScreen>
  );
}

ProjectsPage.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export async function getStaticProps() {
  const projects = {
    projects: await ProjectAPI.projectList(),
  };

  return {
    props: {
      projects: projects.projects,
    },
  };
}
