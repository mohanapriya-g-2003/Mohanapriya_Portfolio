import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [navbarDark, setNavbarDark] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollPosition = window.pageYOffset;

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (scrollPosition >= sectionTop - sectionHeight / 3 && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(section.id);
                }
            });

            // Toggle navbarDark class based on scroll position
            if (scrollPosition >= 100) {
                setNavbarDark(true);
            } else {
                setNavbarDark(false);
            }
        };

        const navLinks = document.querySelectorAll('.nav-item');
        const menuToggle = document.getElementById('navbarSupportedContent');

        const handleNavLinkClick = () => {
            new window.bootstrap.Collapse(menuToggle).toggle();
        };

        navLinks.forEach((link) => {
            link.addEventListener('click', handleNavLinkClick);
        });

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            navLinks.forEach((link) => {
                link.removeEventListener('click', handleNavLinkClick);
            });
        };
    }, []);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 70, // Adjust offset if needed
                behavior: 'smooth',
            });
        }
    };

    return (
        <nav className={`navbar navbar-expand-lg fixed-top navbar-dark navbarScroll py-2 ${navbarDark ? 'navbarDark' : ''}`}>
            <div className="container">
                <a className="navbar-brand" href="#">Mohanapriya G</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                                aria-current={activeSection === 'home' ? 'page' : undefined}
                                
                                onClick={() => scrollToSection('home')}
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                                aria-current={activeSection === 'about' ? 'page' : undefined}
                                
                                onClick={() => scrollToSection('about')}
                            >
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeSection === 'certification' ? 'active' : ''}`}
                                aria-current={activeSection === 'certification' ? 'page' : undefined}
                                
                                onClick={() => scrollToSection('certification')}
                            >
                                Certification
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeSection === 'project' ? 'active' : ''}`}
                                aria-current={activeSection === 'project' ? 'page' : undefined}
                                
                                onClick={() => scrollToSection('project')}
                            >
                                Project
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                                aria-current={activeSection === 'contact' ? 'page' : undefined}
                                
                                onClick={() => scrollToSection('contact')}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
