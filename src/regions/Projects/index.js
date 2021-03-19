/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Box from 'src/components/layout/Box';
import Card from 'src/components/Card';
import Text from 'src/foundations/typography/Text';

const ProjectCard = ({ project }) => (
  <Card size={{ sm: 12, md: 2 }}>
    <Card.Image>
      <a href={project.slug}>
        <img src={project.screenshot} alt={project.url} />
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
const listaProjetos = async () => {
  const resposta = await fetch('https://api.github.com/users/fernandoadriano/repos');
  const gitProjects = await resposta.json();
  const projetos = gitProjects.map((projeto) => ({
    id: projeto.id,
    nome: projeto.name.replace(/[_-]/gm, ' '),
    descricao: projeto.description,
    url: projeto.html_url,
    slug: `projectdetail/${projeto.name}`,
    screenshot: 'images/instalura.png',
  }));

  return projetos;
};

const Project = () => {
  const [projetos, setProjetos] = useState([]);

  useEffect(async () => {
    setProjetos(await listaProjetos());
  }, []);

  return (

    <ProjectsWrapper>
      <Text variant="SectionTitle">Portifólio de Projetos</Text>
      <ProjectList projects={projetos} />
    </ProjectsWrapper>
  );
};

export default Project;
