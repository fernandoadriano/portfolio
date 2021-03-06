/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

import Box from '../../components/layout/Box';
import Card from '../../components/Card';
import Text from '../../foundations/typography/Text';

const projetos = [];
const projeto = {
  id: 1,
  nome: 'Instalura',
  descricao: 'Projeto desenvolvido durante Bootcamp de JAMSTACK na Alura.',
  url: 'https://instalura-base-opal.vercel.app/',
  screenshot: 'images/instalura.png',
};

let i;
for (i = 1; i <= 7; i += 1) {
  const p = { ...projeto };

  p.id = i;
  projetos.push(p);
}

const ProjectCard = ({ project }) => (
  <Card size={{ sm: 12, md: 2 }}>
    <Card.Image>
      <a href={project.url}>
        <img src={projeto.screenshot} alt={projeto.url} />
      </a>
    </Card.Image>
    <Card.Title><Text variant="CardTitle">{project.nome}</Text></Card.Title>
    <Card.Description><Text variant="CardDescription">{project.descricao}</Text></Card.Description>
  </Card>
);

const ProjectList = ({ projects }) => (
  <Box
    flex="1"
    display="flex"
    flexWrap="wrap"
    flexDirection="row"
    justifyContent="flex-start"
    padding="5px"
    maxWidth="100%"
    flexBasis={0}
    flexGrow={1}
  >
    {
      projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))
    }
  </Box>
);

const ProjectsWrapper = styled.div``;

const Project = () => (
  <ProjectsWrapper>
    <Text variant="SectionTitle">Portifólio de Projetos</Text>
    <ProjectList projects={projetos} />
  </ProjectsWrapper>
);

export default Project;
