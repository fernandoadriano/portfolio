/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

import Box from 'src/components/layout/Box';
import Card from 'src/components/Card';
import Link from 'src/foundations/Link';
import Text from 'src/foundations/typography/Text';

const ProjectCard = ({ project }) => (
  <Card size={{ sm: 12, md: 2 }}>
    <Card.Image>
      <Link href={`projects/${project.slug}`} passHref>
        <img src={project.screenshot} alt={project.url} />
      </Link>
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

const Projects = ({ projects }) => (
  <ProjectsWrapper>
    <Text variant="SectionTitle">Portifólio de Projetos</Text>
    <ProjectList projects={projects} />
  </ProjectsWrapper>
);

export default Projects;
