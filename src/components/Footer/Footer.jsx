import './Footer.css'
import { FiChevronUp } from 'react-icons/fi'
import { useEffect, useState } from 'react'

function Footer() {
    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        function handleScroll() {
            setShowButton(window.scrollY > 300)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <footer className="footer">
                <div className="container footer__inner">
                    <p>© 2026 Samara Melo</p>
                </div>

                <a href="#home" className="back-to-top" aria-label="Voltar ao topo">
                    <FiChevronUp />
                </a>
            </footer>
        </>
    )
}

export default Footer