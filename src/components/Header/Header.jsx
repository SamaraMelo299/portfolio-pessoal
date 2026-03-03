import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import './Header.css'

const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'stack', label: 'Stack' },
    { id: 'projects', label: 'Projetos' },
    { id: 'experience', label: 'Experiência' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contato' },
]

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    function toggleMenu() {
        setIsOpen((prev) => !prev)
    }

    function closeMenu() {
        setIsOpen(false)
    }

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''

        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    useEffect(() => {
        const sections = navItems
            .map((item) => document.getElementById(item.id))
            .filter(Boolean)

        function handleScroll() {
            const scrollPosition = window.scrollY + 140
            let currentSection = 'home'

            for (const section of sections) {
                const sectionTop = section.offsetTop
                const sectionHeight = section.offsetHeight
                const sectionId = section.getAttribute('id')

                if (
                    scrollPosition >= sectionTop &&
                    scrollPosition < sectionTop + sectionHeight
                ) {
                    currentSection = sectionId
                }
            }

            setActiveSection(currentSection)
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className="header">
            <div className="container header__inner">
                <a href="#home" className="header__brand" onClick={closeMenu}>
                    Portfólio | SM
                </a>

                <button
                    type="button"
                    className="header__toggle"
                    aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
                    aria-expanded={isOpen}
                    onClick={toggleMenu}
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>

                <nav
                    className={`header__nav ${isOpen ? 'is-open' : ''}`}
                    aria-label="Navegação principal"
                >
                    <ul className="header__list">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    onClick={closeMenu}
                                    className={activeSection === item.id ? 'is-active' : ''}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <div
                className={`header__overlay ${isOpen ? 'is-open' : ''}`}
                onClick={closeMenu}
                aria-hidden="true"
            />
        </header>
    )
}

export default Header