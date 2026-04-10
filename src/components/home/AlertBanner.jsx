import { useState } from 'react';
import { X, AlertTriangle } from 'lucide-react';
import './AlertBanner.css';

const ALERT_CONFIG = {
  active: true,
  message: '📢 Nuevas medidas impositivas para PyMEs — Consultanos sobre los beneficios vigentes y cómo aplicarlos a tu empresa.',
  type: 'info',
};

export default function AlertBanner() {
  const [isVisible, setIsVisible] = useState(ALERT_CONFIG.active);

  if (!isVisible) return null;

  return (
    <div className="alert-banner" id="alert-banner" role="alert">
      <div className="container alert-banner-content">
        <AlertTriangle size={18} className="alert-banner-icon" />
        <p className="alert-banner-message">{ALERT_CONFIG.message}</p>
        <button
          className="alert-banner-close"
          onClick={() => setIsVisible(false)}
          aria-label="Cerrar alerta"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
