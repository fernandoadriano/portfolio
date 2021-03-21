import { projects } from './db.json';

export default {
  projectList: async () => {
    const resposta = await fetch('https://api.github.com/users/fernandoadriano/repos');

    if (resposta.status !== 200) {
      throw new Error(`Erro ao acessar github: ${resposta.status} - ${resposta.statusText}`);
    }

    const gitProjects = await resposta.json();
    const projetos = gitProjects.map((projeto) => ({
      id: projeto.id,
      nome: projeto.name.replace(/[_-]/gm, ' '),
      descricao: projeto.description,
      url: projeto.html_url,
      slug: projeto.name,
      screenshot: `/images/${projeto.name}.png`,
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
