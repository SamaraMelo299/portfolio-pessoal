import './Contact.css'
import {
    FiGithub,
    FiLinkedin,
    FiMail,
    FiMessageCircle,
    FiArrowUpRight,
} from 'react-icons/fi'

function Contact() {
    const contacts = [
        {
            title: 'GitHub',
            label: 'Acessar repositórios',
            href: 'https://github.com/SamaraMelo299',
            icon: <FiGithub />,
            external: true,
        },
        {
            title: 'LinkedIn',
            label: 'Ver perfil profissional',
            href: 'https://www.linkedin.com/in/samara-melo2999/',
            icon: <FiLinkedin />,
            external: true,
        },
        {
            title: 'E-mail',
            label: 'Enviar mensagem por e-mail',
            href: 'mailto:samara.melo2999@gmail.com',
            icon: <FiMail />,
            external: false,
        },
        {
            title: 'WhatsApp',
            label: 'Conversar no WhatsApp',
            href: 'https://wa.me/5511977514777',
            icon: <FiMessageCircle />,
            external: true,
        },
    ]

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <div className="section-head contact__head">
                    <h2>Contato</h2>
                    <p>Você pode falar comigo pelos canais abaixo.</p>
                </div>

                <div className="contact__list">
                    {contacts.map((item) => (
                        <a
                            key={item.title}
                            href={item.href}
                            className="contact__item"
                            aria-label={`${item.label} - ${item.title}`}
                            target={item.external ? '_blank' : undefined}
                            rel={item.external ? 'noreferrer noopener' : undefined}
                        >
                            <div className="contact__item-left">
                                <span className="contact__icon" aria-hidden="true">
                                    {item.icon}
                                </span>

                                <div className="contact__content">
                                    <h3>{item.title}</h3>
                                    <span>{item.label}</span>
                                </div>
                            </div>

                            <span className="contact__arrow" aria-hidden="true">
                                <FiArrowUpRight />
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Contact