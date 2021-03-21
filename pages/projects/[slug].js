import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import PropTypes from 'prop-types';

import Box from 'src/components/layout/Box';
import MainScreen from 'src/screens/templates/MainScreen';
import Text from 'src/foundations/typography/Text';
import ProjectAPI from 'src/data';

const ProjectDetail = (props) => {
  const [project, setProject] = useState({
    id: '',
    nome: '',
    descricao: '',
    url: '',
    slug: '',
    screenshot: 'images/instalura.png',
  });
  const router = useRouter();
  let slug;

  // eslint-disable-next-line react/destructuring-assignment
  if (props.slug) {
    slug = props.slug;
  } else {
    slug = router.query.slug;
  }

  useEffect(async () => {
    setProject(await ProjectAPI.projectDetail(slug));
  }, []);

  return (
    <MainScreen>
      <Box
        display="flex"
        flexDirection="row"
        flex="1"
        flexWrap="wrap"
      >
        <Image src={project ? project.screenshot : '/images/default.jpeg'} width="450px" height="300px" />
        <Box
          paddingLeft="16px"
        >
          <Text color="primary.dark" variant="SectionTitle">
            {project && project.nome}
          </Text>
          <Text color="primary.dark" variant="pargraph1">
            {project && project.descricao}
          </Text>
        </Box>
      </Box>
    </MainScreen>
  );
};

ProjectDetail.defaultProps = {
  slug: undefined,
};

ProjectDetail.propTypes = {
  slug: PropTypes.string,
};

export async function getStaticProps({ params }) {
  const project = await ProjectAPI.projectDetail(params.slug);

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
