import { useEffect, useState } from 'react'
import './Hero.css'
import profileImg from '../../assets/images/profile.png'

function Hero() {
    const phrases = [
        'Desenvolvedora Full Stack Jr.',
        'React, Node.js e APIs REST',
    ]

    const [text, setText] = useState('')
    const [phraseIndex, setPhraseIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [typingSpeed, setTypingSpeed] = useState(90)

    useEffect(() => {
        const currentPhrase = phrases[phraseIndex]

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                const updatedText = currentPhrase.substring(0, text.length + 1)
                setText(updatedText)
                setTypingSpeed(90)

                if (updatedText === currentPhrase) {
                    setTypingSpeed(1600)
                    setIsDeleting(true)
                }
            } else {
                const updatedText = currentPhrase.substring(0, text.length - 1)
                setText(updatedText)
                setTypingSpeed(45)

                if (updatedText === '') {
                    setIsDeleting(false)
                    setPhraseIndex((prev) => (prev + 1) % phrases.length)
                    setTypingSpeed(300)
                }
            }
        }, typingSpeed)

        return () => clearTimeout(timeout)
    }, [text, isDeleting, phraseIndex, typingSpeed])

    return (
        <section id="home" className="section hero">
            <div className="container">
                <div className="hero__content">
                    <div className="hero__text">

                        <h1 className="hero__title">
                            <span className="hero__title-top">Olá, eu sou a</span>
                            <span className="hero__title-name">
                                Samara Melo <span className="hero__title-icon">ツ</span>
                            </span>
                        </h1>

                        <div className="hero__typing-wrap" aria-label="Especialidades">
                            <span className="hero__typing-single">
                                {text}
                                <span className="hero__cursor">|</span>
                            </span>
                        </div>

                        <p className="hero__description">
                            Desenvolvedora Full Stack Jr. com foco em JavaScript, React, Node.js e APIs REST, construindo interfaces 
                            responsivas e aplicações web bem estruturadas, com atenção à usabilidade, performance e qualidade de código.
                        </p>

                        <div className="hero__actions">
                            <a href="#projects" className="button button--primary">
                                Ver projetos
                            </a>
                            <a href="#contact" className="button button--ghost">
                                Entrar em contato
                            </a>
                        </div>
                    </div>

                    <div className="hero__visual">
                        <div className="hero__card">
                            <img
                                src={profileImg}
                                alt="Foto de perfil de Samara Melo"
                                className="hero__image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero