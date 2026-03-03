import './About.css'

function About() {
    return (
        <section id="about" className="section section--panel">
            <div className="container">
                <div className="panel about">
                    <div className="section-head">
                        <h2>Sobre mim</h2>
                        <p>
                            Construo minha trajetória em tecnologia com foco em desenvolvimento, prática constante 
                            e evolução técnica por meio de estudos e projetos aplicados.
                        </p>
                    </div>

                    <div className="about__grid">
                        <article className="card about__card">
                            <h3>Quem sou</h3>
                            <p className="text-muted">
                                Estudante de Análise e Desenvolvimento de Sistemas, com experiência na área de tecnologia 
                                e foco em desenvolvimento web. Busco criar soluções claras, funcionais e bem estruturadas.
                            </p>
                        </article>

                        <article className="card about__card">
                            <h3>Meu foco</h3>
                            <p className="text-muted">
                                Meu foco está no desenvolvimento full stack, com interesse em construir aplicações web 
                                completas, integrando interface, regras de negócio e APIs com organização e eficiência.
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About