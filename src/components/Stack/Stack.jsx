import './Stack.css'
import { FaHtml5, FaJs, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa'
import { HiOutlineCodeBracket } from 'react-icons/hi2'

function Stack() {
    const technologies = [
        {
            title: 'HTML & CSS',
            description: 'Estrutura e responsividade.',
            icon: <FaHtml5 aria-hidden="true" />,
        },
        {
            title: 'JavaScript',
            description: 'Lógica e interatividade.',
            icon: <FaJs aria-hidden="true" />,
        },
        {
            title: 'React',
            description: 'Interfaces dinâmicas.',
            icon: <FaReact aria-hidden="true" />,
        },
        {
            title: 'Node.js',
            description: 'APIs e servidor.',
            icon: <FaNodeJs aria-hidden="true" />,
        },
        {
            title: 'APIs REST',
            description: 'Integração entre camadas.',
            icon: <HiOutlineCodeBracket aria-hidden="true" />,
        },
        {
            title: 'Git & GitHub',
            description: 'Versionamento de projetos.',
            icon: <FaGithub aria-hidden="true" />,
        },
    ]

    return (
        <section id="stack" className="section">
            <div className="container">
                <div className="section-head stack__head">
                    <h2>Stack principal</h2>
                    <p>
                        Tecnologias que utilizo no dia a dia para construir interfaces
                        e integrar aplicações.
                    </p>
                </div>

                <div className="stack__grid">
                    {technologies.map((tech) => (
                        <article
                            key={tech.title}
                            className="card stack__card"
                        >
                            <div className="stack__icon">{tech.icon}</div>

                            <div className="stack__content">
                                <h3>{tech.title}</h3>
                                <p className="text-muted">{tech.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Stack