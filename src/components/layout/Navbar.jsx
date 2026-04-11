import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';
import logoImg from '../../assets/images/mya-logo.png';

const NAV_LINKS = [
  { path: '/', label: 'Inicio' },
  { path: '/servicios', label: 'Servicios' },
  { path: '/trayectoria', label: 'Trayectoria' },
  { path: '/recursos', label: 'Recursos' },
  { path: '/temas-de-interes', label: 'Temas de Interés' },
  { path: '/contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`} id="navbar" role="navigation" aria-label="Navegación principal">
      <div className="container navbar-content">
        <Link to="/" className="navbar-brand" aria-label="Ir al inicio">
          <img src={logoImg} alt="Morales & Asociados" className="navbar-logo" width="64" height="64" />
          <div className="navbar-brand-text">
            <span className="navbar-brand-name">Morales & Asociados</span>
            <span className="navbar-brand-subtitle">Estudio Contable</span>
          </div>
        </Link>

        <ul className={`navbar-links ${isMobileMenuOpen ? 'navbar-links-open' : ''}`} role="menubar">
          <li className="navbar-close-wrapper" role="none">
            <button
              className="navbar-close-btn"
              onClick={closeMobileMenu}
              aria-label="Cerrar menú"
            >
              <X size={24} />
            </button>
          </li>
          {NAV_LINKS.map(({ path, label }) => (
            <li key={path} role="none">
              <Link
                to={path}
                className={`navbar-link ${location.pathname === path ? 'navbar-link-active' : ''}`}
                role="menuitem"
                onClick={closeMobileMenu}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="navbar-toggle"
          onClick={toggleMobileMenu}
          aria-label="Abrir menú"
          aria-expanded={isMobileMenuOpen}
        >
          <Menu size={24} />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="navbar-overlay" onClick={closeMobileMenu} aria-hidden="true" />
      )}
    </nav>
  );
}
