import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

import Box from 'src/components/layout/Box';
import MainScreen from 'src/screens/templates/MainScreen';
import Text from 'src/foundations/typography/Text';
import ProjectAPI from 'src/data';

const ProjectDetail = ({ project }) => (
  <MainScreen
    headTitle={project.nome}
    description={project.descricao}
  >
    <Box
      display="flex"
      flexDirection="row"
      flex="1"
      flexWrap="wrap"
    >
      <Image src={project && project.screenshot.length !== 0 ? project.screenshot : '/images/default.jpeg'} alt={project ? project.screenshot : '/images/default.jpeg'} width="450px" height="300px" />
      <Box
        paddingLeft="16px"
      >
        <Text color="primary.dark" variant="SectionTitle">
          {project && project.nome}
        </Text>
        <Box
          color="primary.dark"
          variant="pargraph1"
          dangerouslySetInnerHTML={{ __html: project && project.descricao }}
        />
      </Box>
    </Box>
  </MainScreen>
);

ProjectDetail.defaultProps = {
  project: {
    id: '',
    nome: '',
    descricao: '',
    url: '',
    repositorio: '',
    slug: '',
    screenshot: '',
  },
};

ProjectDetail.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  project: PropTypes.object,
};

export async function getStaticProps({ params }) {
  const project = await ProjectAPI.projectDetail(params.slug);

  if (project) project.screenshot = project.screenshot.url;

  return {
    props: {
      project,
    },
  };
}

export async function getStaticPaths() {
  const projects = await ProjectAPI.projectList();
  const paths = projects.map((project) => ({ params: { slug: project.slug } }));

  return { paths, fallback: false };
}

export default ProjectDetail;
