import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Footer.css';

const FOOTER_LINKS = [
  { path: '/', label: 'Inicio' },
  { path: '/servicios', label: 'Servicios' },
  { path: '/trayectoria', label: 'Trayectoria' },
  { path: '/recursos', label: 'Recursos' },
  { path: '/temas-de-interes', label: 'Temas de Interés' },
  { path: '/contacto', label: 'Contacto' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer-main">
        <div className="container footer-grid">
          <div className="footer-brand">
            <h3 className="footer-title">Morales & Asociados</h3>
            <p className="footer-tagline">Estudio Contable desde 1993</p>
            <p className="footer-description">
              Más de 30 años asesorando PyMEs en el Gran Buenos Aires con profesionalismo, cercanía y compromiso.
            </p>
          </div>

          <div className="footer-nav">
            <h4 className="footer-heading">Navegación</h4>
            <ul className="footer-link-list">
              {FOOTER_LINKS.map(({ path, label }) => (
                <li key={path}>
                  <Link to={path} className="footer-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Contacto</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <MapPin size={16} />
                <span>Av. de Mayo 1201, 1P, Ramos Mejía, Bs.As.</span>
              </li>
              <li className="footer-contact-item">
                <Phone size={16} />
                <a href="https://wa.me/5491144922027">11-4492-2027</a>
              </li>
              <li className="footer-contact-item">
                <Mail size={16} />
                <a href="mailto:info@moralesyasociados.com.ar">info@moralesyasociados.com.ar</a>
              </li>
              <li className="footer-contact-item">
                <Clock size={16} />
                <span>Lunes a Viernes 9 a 16 hs</span>
              </li>
            </ul>
          </div>

          <div className="footer-map">
            <h4 className="footer-heading">Ubicación</h4>
            <div className="footer-map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.810574133481!2d-58.566373!3d-34.6342813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7e7b68ab4bf%3A0xcdaabc92de398696!2sAv.%20de%20Mayo%201201%2C%20B1704BMO%20Ramos%20Mej%C3%ADa%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1712701443427!5m2!1ses!2sar"
                width="100%"
                height="180"
                style={{ border: 0, borderRadius: 'var(--radius-md)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Morales & Asociados en Ramos Mejía"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>© {currentYear} Estudio Contable Morales & Asociados. Todos los derechos reservados.</p>
          <p className="footer-legal">Av. de Mayo 1201, 1P, Ramos Mejía, Buenos Aires, Argentina</p>
        </div>
      </div>
    </footer>
  );
}
