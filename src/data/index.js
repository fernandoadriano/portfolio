import { CMSGraphQLClient, gql } from 'src/infra/cms/DATOClient';

export default {
  projectList: async () => {
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
    const client = CMSGraphQLClient();
    const query = gql`query 
    {
      allProjetos(filter: { slug: { eq: "${slug}"}}) {
         id
        nome
        slug
        descricao(markdown: true)
        url
        repositorio
        screenshot {
          url
        }
      }
    }
    `;
    const resposta = await client.query({ query });
    const projeto = resposta.data.allProjetos;

    if (!projeto || projeto.length === 0) {
      return [{
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
