import './Projects.css'

import projeto1Img from '../../assets/images/dev_newsletter.png'
import projeto2Img from '../../assets/images/user_registration.png'
import projeto3Img from '../../assets/images/nike_store.png'

function Projects() {
    const projects = [
        {
            title: 'Dev Newsletter',
            description:
                'Landing page com fluxo de inscrição e integração com API em Node.js + Express.',
            tags: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
            github: 'https://github.com/SamaraMelo299/dev_newslatter',
            demo: 'https://samaramelo299.github.io/dev_newslatter/',
            image: projeto1Img,
            alt: 'Preview do projeto Dev Newsletter',
        },
        {
            title: 'User Registration',
            description:
                'Aplicação full stack para cadastro e gerenciamento de usuários com React, Node.js e MongoDB.',
            tags: ['React', 'Node.js', 'Prisma', 'MongoDB'],
            github: 'https://github.com/SamaraMelo299/user-registration',
            demo: '',
            image: projeto2Img,
            alt: 'Preview do projeto User Registration',
        },
        {
            title: 'Nike Store',
            description:
                'Landing page inspirada em e-commerce esportivo, com foco em responsividade e interatividade.',
            tags: ['HTML', 'CSS', 'JavaScript'],
            github: 'https://github.com/SamaraMelo299/nike-store',
            demo: 'https://samaramelo299.github.io/nike-store/',
            image: projeto3Img,
            alt: 'Preview do projeto Nike Store',
        },
    ]

    return (
        <section id="projects" className="section section--panel">
            <div className="container">
                <div className="panel projects">
                    <div className="section-head projects__head">
                        <h2>Projetos</h2>
                        <p>
                            Projetos desenvolvidos para aplicar tecnologias web em soluções
                            práticas, interfaces responsivas e integrações entre camadas.
                        </p>
                    </div>

                    <div className="projects__list">
                        {projects.map((project, index) => (
                            <article
                                key={project.title}
                                className={`projects__item ${index % 2 !== 0 ? 'projects__item--reverse' : ''
                                    }`}
                            >
                                <div className="projects__media">
                                    <img src={project.image} alt={project.alt} />
                                </div>

                                <div className="projects__content">
                                    <h3>{project.title}</h3>
                                    <p className="projects__description">{project.description}</p>

                                    <div className="projects__tags">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="projects__tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="projects__links">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="projects__link"
                                        >
                                            Código
                                        </a>

                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="projects__link projects__link--primary"
                                            >
                                                Ver projeto
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects