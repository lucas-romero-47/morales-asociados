import { Mail, Phone } from 'lucide-react';
import './TopBar.css';

export default function TopBar() {
  return (
    <div className="topbar" id="topbar">
      <div className="container topbar-content">
        <a href="mailto:info@moralesyasociados.com.ar" className="topbar-item" aria-label="Enviar email">
          <Mail size={14} />
          <span>info@moralesyasociados.com.ar</span>
        </a>
        <a href="https://wa.me/5491144922027" className="topbar-item" target="_blank" rel="noopener noreferrer" aria-label="Llamar o enviar WhatsApp">
          <Phone size={14} />
          <span>+54 9 11 4492-2027</span>
        </a>
      </div>
    </div>
  );
}
