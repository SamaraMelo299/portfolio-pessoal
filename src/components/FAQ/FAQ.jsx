import { useState } from 'react'
import './FAQ.css'

function FAQ() {
    const faqItems = [
        {
            question: 'Você está disponível para oportunidades?',
            answer:
                'Sim. Estou aberta a oportunidades como Desenvolvedora Full Stack Jr. e também a projetos freelance alinhados ao meu perfil.',
        },
        {
            question: 'Você tem experiência com backend?',
            answer:
                'Sim. Desenvolvo projetos com Node.js e Express, criando rotas, integrações com APIs e aplicações com estrutura full stack, sempre com foco em evolução prática.',
        },
        {
            question: 'Qual é o seu foco atualmente na área de desenvolvimento?',
            answer:
                'Meu foco está na construção de interfaces responsivas, bem estruturadas e conectadas a soluções reais, com evolução contínua para atuação full stack.',
        },
    ]

    const [activeIndex, setActiveIndex] = useState(-1)

    function handleToggle(index) {
        setActiveIndex((prev) => (prev === index ? -1 : index))
    }

    return (
        <section id="faq" className="faq section section--panel">
            <div className="container">
                <div className="panel">
                    <div className="section-head">
                        <h2>FAQ</h2>
                        <p>Perguntas frequentes sobre meu perfil e atuação em tecnologia.</p>
                    </div>

                    <div className="faq__list">
                        {faqItems.map((item, index) => {
                            const isOpen = activeIndex === index

                            return (
                                <article
                                    key={item.question}
                                    className={`faq__item ${isOpen ? 'is-open' : ''}`}
                                >
                                    <button
                                        type="button"
                                        className="faq__question"
                                        onClick={() => handleToggle(index)}
                                        aria-expanded={isOpen}
                                        aria-controls={`faq-answer-${index}`}
                                    >
                                        <span>{item.question}</span>
                                        <span className="faq__icon">{isOpen ? '−' : '+'}</span>
                                    </button>

                                    <div
                                        id={`faq-answer-${index}`}
                                        className="faq__answer-wrap"
                                    >
                                        <p className="faq__answer">{item.answer}</p>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ