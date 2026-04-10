import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import estudioImg from '../../assets/images/estudio.webp';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <img src={estudioImg} alt="" className="hero-bg-image" aria-hidden="true" />
        <div className="hero-overlay" />
      </div>

      <div className="container hero-content">
        <h1 className="hero-title animate-fade-in-up">
          Estudio Contable<br />
          <span className="hero-title-accent">Morales & Asociados</span>
        </h1>
        <p className="hero-subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Nos apasiona brindar soluciones estratégicas y personalizadas a cada uno de nuestros clientes. 
          Con más de 30 años de experiencia, trabajamos para ofrecer un servicio de calidad basado 
          en la confianza y la excelencia.
        </p>
        <p className="hero-tagline animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          ¡Estamos acá para ayudarte!
        </p>
        <div className="hero-actions animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Link to="/contacto" className="btn btn-primary hero-cta">
            Contactate con nosotros
            <ArrowRight size={18} />
          </Link>
          <Link to="/servicios" className="btn btn-outline-light">
            Ver servicios
          </Link>
        </div>
      </div>

      <div className="hero-scroll-indicator" aria-hidden="true">
        <div className="hero-scroll-dot" />
      </div>
    </section>
  );
}
