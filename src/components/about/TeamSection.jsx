import { TEAM, SPECIALTIES } from '../../data/team';
import './TeamSection.css';
import estudioImg from '../../assets/images/estudio.webp';

export default function TeamSection() {
  return (
    <section className="team section" id="team">
      <div className="container">
        <div className="section-title">
          <h2>Equipo Profesional</h2>
        </div>

        <div className="team-intro">
          <p>
            Contamos con un equipo multidisciplinario de profesionales especializados que trabajan 
            de manera conjunta para brindar un servicio integral a cada uno de nuestros clientes.
          </p>
        </div>

        <div className="team-grid">
          {TEAM.map((member) => (
            <div className="team-card" key={member.id}>
              <div className="team-member-image">
                <img src={estudioImg} alt={member.name} loading="lazy" />
                <div className="team-member-social">
                </div>
              </div>
              <div className="team-card-info">
                <h3 className="team-card-name">{member.name}</h3>
                <p className="team-card-role">{member.role}</p>
                <div className="team-card-specialties">
                  {member.specialties.map(spec => (
                    <span key={spec} className="team-specialty-badge">{spec}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="team-specialties-section">
          <h3 className="team-specialties-title">Áreas de Especialidad del Equipo</h3>
          <div className="team-specialties-list">
            {SPECIALTIES.map((specialty) => (
              <div className="team-specialty-item" key={specialty}>
                <div className="team-specialty-dot" />
                <span>{specialty}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
