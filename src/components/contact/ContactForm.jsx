import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import './ContactForm.css';

const ORGANIZATION_TYPES = [
  'Monotributista',
  'Responsable Inscripto',
  'Sociedad (SA / SRL)',
  'Asociación Civil',
  'Otro',
];

const INITIAL_FORM = {
  nombre: '',
  email: '',
  telefono: '',
  organizacion: '',
  tema: '',
  mensaje: '',
};

function validateForm(form) {
  const errors = {};

  if (!form.nombre.trim()) {
    errors.nombre = 'El nombre es obligatorio';
  }

  if (!form.email.trim() && !form.telefono.trim()) {
    errors.email = 'Ingresá un email o teléfono';
    errors.telefono = 'Ingresá un email o teléfono';
  }

  if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'El formato del email no es válido';
  }

  if (!form.tema.trim()) {
    errors.tema = 'Indicá el tema a tratar';
  }

  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const subject = encodeURIComponent(`Consulta Web: ${form.tema}`);
    const body = encodeURIComponent(
      `Nombre: ${form.nombre}\n` +
      `Email: ${form.email}\n` +
      `Teléfono: ${form.telefono}\n` +
      `Tipo de Organización: ${form.organizacion}\n` +
      `Tema: ${form.tema}\n\n` +
      `Mensaje:\n${form.mensaje}`
    );

    window.location.href = `mailto:info@moralesyasociados.com.ar?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="contact-form-success" id="contact-success">
        <CheckCircle size={48} />
        <h3>¡Consulta enviada!</h3>
        <p>
          Se abrió tu cliente de correo con los datos de la consulta. 
          Nos pondremos en contacto para coordinar día y horario de atención.
        </p>
        <button className="btn btn-primary" onClick={() => { setIsSubmitted(false); setForm(INITIAL_FORM); }}>
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} id="contact-form" noValidate autoComplete="on">
      <h3 className="contact-form-title">Solicitar Consulta / Asesoría Online</h3>
      <p className="contact-form-subtitle">
        Completá el formulario y nos pondremos en contacto para coordinar una reunión presencial o por Zoom.
      </p>

      <div className="form-group">
        <label htmlFor="nombre" className="form-label">Nombre completo *</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          className={`form-input ${errors.nombre ? 'form-input-error' : ''}`}
          placeholder="Tu nombre completo"
          autoComplete="name"
        />
        {errors.nombre && <span className="form-error"><AlertCircle size={14} /> {errors.nombre}</span>}
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={`form-input ${errors.email ? 'form-input-error' : ''}`}
            placeholder="tu@email.com"
            autoComplete="email"
          />
          {errors.email && <span className="form-error"><AlertCircle size={14} /> {errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="telefono" className="form-label">Teléfono / WhatsApp</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            className={`form-input ${errors.telefono ? 'form-input-error' : ''}`}
            placeholder="11-XXXX-XXXX"
            autoComplete="tel"
          />
          {errors.telefono && <span className="form-error"><AlertCircle size={14} /> {errors.telefono}</span>}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="organizacion" className="form-label">Tipo de organización</label>
        <select
          id="organizacion"
          name="organizacion"
          value={form.organizacion}
          onChange={handleChange}
          className="form-input form-select"
        >
          <option value="">Seleccioná una opción</option>
          {ORGANIZATION_TYPES.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="tema" className="form-label">Tema a tratar *</label>
        <input
          type="text"
          id="tema"
          name="tema"
          value={form.tema}
          onChange={handleChange}
          className={`form-input ${errors.tema ? 'form-input-error' : ''}`}
          placeholder="Ej: Liquidación de IVA, consulta societaria..."
        />
        {errors.tema && <span className="form-error"><AlertCircle size={14} /> {errors.tema}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="mensaje" className="form-label">Mensaje (opcional)</label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={form.mensaje}
          onChange={handleChange}
          className="form-input form-textarea"
          placeholder="Contanos más sobre tu consulta..."
          rows="4"
        />
      </div>

      <button type="submit" className="btn btn-accent contact-form-submit">
        <Send size={18} />
        Enviar Consulta
      </button>
    </form>
  );
}
