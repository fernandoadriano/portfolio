/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import fs from 'fs';
import PropTypes from 'prop-types';
import ProjectAPI from 'src/data';

import Projects from 'src/regions/Projects';
import MainScreen from 'src/screens/templates/MainScreen';

export default function ProjectsPage({ projects }) {
  return (
    <MainScreen>
      <Projects projects={projects} />
    </MainScreen>
  );
}

ProjectsPage.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export async function getStaticProps() {
  const dbFile = './src/data/db.json';
  let projects;
  //
  // Persistência em disco para não tomar erro de excesso de requisição ao GIT
  //
  if (fs.existsSync(dbFile)) {
    projects = JSON.parse(fs.readFileSync(dbFile));
  } else {
    projects = {
      projects: await ProjectAPI.projectList(),
    };
    fs.writeFileSync(dbFile, JSON.stringify(projects, null, 4));
  }

  return {
    props: {
      projects: projects.projects,
    },
  };
}
