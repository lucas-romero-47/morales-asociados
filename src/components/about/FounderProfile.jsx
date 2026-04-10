import { Mail, Phone } from 'lucide-react';
import { TEAM } from '../../data/team';
import './FounderProfile.css';
import estudioImg from '../../assets/images/estudio.webp';

export default function FounderProfile() {
  const founder = TEAM.find(member => member.id === 'alexandro');
  if (!founder) return null;

  return (
    <section className="founder section" id="founder">
      <div className="container founder-content">
        <div className="founder-image-wrapper">
          <img
            src={estudioImg}
            alt="Mariano Morales, fundador del Estudio Contable Morales & Asociados"
            className="founder-image"
            loading="lazy"
          />
          <div className="founder-image-overlay">
            <h3 className="founder-overlay-name">{founder.name}</h3>
            <p className="founder-overlay-role">{founder.role}</p>
          </div>
        </div>

        <div className="founder-info">
          <div className="section-title">
            <h2>Fundador</h2>
          </div>
          <p className="founder-bio">{founder.bio}</p>
          <div className="founder-specialties">
            {founder.specialties.map(specialty => (
              <span key={specialty} className="founder-specialty-tag">{specialty}</span>
            ))}
          </div>
          <div className="founder-actions">
            <a href="mailto:info@moralesyasociados.com.ar" className="btn btn-outline founder-btn">
              <Mail size={18} />
              Email
            </a>
            <a href="https://wa.me/5491144922027" className="btn btn-outline founder-btn" target="_blank" rel="noopener noreferrer">
              <Phone size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
