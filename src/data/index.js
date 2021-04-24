import { CMSGraphQLClient, gql } from 'src/infra/cms/DATOClient';
// import import { projects } from './db.json';

export default {
  projectList: async () => {
    // const resposta = await fetch('https://api.github.com/users/fernandoadriano/repos');
    const client = CMSGraphQLClient();
    const query = gql`query 
    {
      allProjetos {
         id
        nome
        slug
        descricao(markdown: false)
        url
        repositorio
        screenshot {
          url
        }
      }
    }
    `;
    const resposta = await client.query({ query });
    console.log(JSON.stringify(resposta, null, 4));

    const projetos = resposta.data.allProjetos.map((projeto) => ({
      id: projeto.id,
      nome: projeto.nome,
      descricao: projeto.descricao,
      url: projeto.url,
      repositorio: projeto.repositorio,
      slug: projeto.slug,
      screenshot: projeto.screenshot.url,
    }));

    return projetos;
  },
  projectDetail: async (slug = '') => {
    let projeto = projects.filter((project) => project.slug.toLowerCase() === slug.toLowerCase());

    if (!projeto) {
      projeto = [{
        id: '',
        nome: '',
        descricao: '',
        url: '',
        slug: '',
        screenshot: '',
      }];
    }
    return projeto[0];
  },
};
