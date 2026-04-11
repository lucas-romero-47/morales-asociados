import { Link } from 'react-router-dom';
import { Video, ArrowRight } from 'lucide-react';
import './VideoCallCTA.css';

export default function VideoCallCTA() {
  return (
    <section className="videocall-cta" id="videocall-cta">
      <div className="videocall-cta-bg" />
      <div className="container videocall-cta-content">
        <div className="videocall-cta-icon-wrapper">
          <Video size={40} />
        </div>
        <h2 className="videocall-cta-title">Asesoramiento por Videollamada</h2>
        <p className="videocall-cta-text">
          Solicitá una asesoría online por Zoom sin costo. Resolvé tus consultas impositivas, 
          laborales o societarias desde la comodidad de tu oficina o tu casa.
        </p>
        <Link to="/contacto" className="btn btn-accent videocall-cta-btn">
          Solicitar Asesoría Online
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
