import './Experience.css'

function Experience() {
    const experiences = [
        {
            role: 'Assistente de TI',
            company: 'COLÉGIO TORRICELLI',
            period: 'Nov/2024 — Nov/2025',
            description:
                'Atuação em ambiente educacional com foco em redes e infraestrutura, garantindo disponibilidade, padronização de ambientes e resolução ágil de incidentes.',
            featured: true,
        },
        {
            role: 'Assistente de TI',
            company: 'FACULDADE FAVENI',
            period: 'Mar/2025 — Nov/2025',
            description:
                'Suporte técnico e apoio a sistemas acadêmicos, organização de fluxos internos e suporte a transmissões presenciais e ao vivo, assegurando continuidade operacional.',
        },
        {
            role: 'Analista de Suporte Técnico Jr.',
            company: 'DELL',
            period: 'Set/2024 — Nov/2024',
            description:
                'Diagnóstico técnico e troubleshooting de sistemas e aplicações, com acompanhamento estruturado de chamados em ambiente corporativo.',
        },
    ]

    return (
        <section id="experience" className="section section--panel">
            <div className="container">
                <div className="panel experience">
                    <div className="section-head experience__head">
                        <h2>Experiência profissional</h2>
                        <p>
                            Experiência prática em tecnologia, com foco em diagnóstico, resolução de problemas
                            e consistência operacional — base aplicada ao desenvolvimento.
                        </p>
                    </div>

                    <div className="experience__timeline">
                        {experiences.map((item) => (
                            <article
                                key={`${item.role}-${item.company}`}
                                className={`experience__item ${item.featured ? 'experience__item--featured' : ''
                                    }`}
                            >
                                <div className="experience__rail">
                                    <span className="experience__dot" />
                                </div>

                                <div className="experience__card">
                                    <div className="experience__top">
                                        <div>
                                            <h3>{item.role}</h3>
                                            <p className="experience__company">{item.company}</p>
                                        </div>

                                        <span className="experience__period">{item.period}</span>
                                    </div>

                                    <p className="experience__description">{item.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience