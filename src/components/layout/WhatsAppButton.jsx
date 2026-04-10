import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

const WHATSAPP_URL = `https://wa.me/5491144922027?text=${encodeURIComponent('Hola, me comunico desde el sitio web de Morales & Asociados. Quisiera hacer una consulta.')}`;

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      id="whatsapp-btn"
    >
      <MessageCircle size={28} />
      <span className="whatsapp-tooltip">¡Chateá con nosotros!</span>
    </a>
  );
}
