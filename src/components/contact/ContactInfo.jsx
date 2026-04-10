import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './ContactInfo.css';

const CONTACT_DETAILS = [
  { icon: MapPin, label: 'Dirección', value: 'Av. de Mayo 1201, 1P, Ramos Mejía, Bs.As.', href: null },
  { icon: Phone, label: 'Teléfono / WhatsApp', value: '11-4492-2027', href: 'https://wa.me/5491144922027' },
  { icon: Mail, label: 'Email', value: 'info@moralesyasociados.com.ar', href: 'mailto:info@moralesyasociados.com.ar' },
  { icon: Clock, label: 'Horario de Atención', value: 'Lunes a Viernes 9 a 16 hs', href: null },
];

export default function ContactInfo() {
  return (
    <div className="contact-info" id="contact-info">
      <h3 className="contact-info-title">Información de Contacto</h3>
      <p className="contact-info-subtitle">
        Estamos para ayudarte. Contactanos por cualquiera de estos medios o visitanos en nuestra oficina.
      </p>

      <div className="contact-info-list">
        {CONTACT_DETAILS.map(({ icon: Icon, label, value, href }) => (
          <div className="contact-info-item" key={label}>
            <div className="contact-info-icon">
              <Icon size={20} />
            </div>
            <div>
              <p className="contact-info-label">{label}</p>
              {href ? (
                <a href={href} className="contact-info-value contact-info-link" target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                  {value}
                </a>
              ) : (
                <p className="contact-info-value">{value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="contact-info-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.810574133481!2d-58.566373!3d-34.6342813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7e7b68ab4bf%3A0xcdaabc92de398696!2sAv.%20de%20Mayo%201201%2C%20B1704BMO%20Ramos%20Mej%C3%ADa%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1712701443427!5m2!1ses!2sar"
          width="100%"
          height="250"
          style={{ border: 0, borderRadius: 'var(--radius-md)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación del Estudio Contable Morales & Asociados"
        />
      </div>
    </div>
  );
}
