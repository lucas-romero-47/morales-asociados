import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import './ContactPage.css';

export default function ContactPage() {
  return (
    <main id="contact-page">
      <div className="page-header">
        <div className="container">
          <div className="section-title">
            <h2>Contacto</h2>
          </div>
          <p className="page-header-subtitle">
            Estamos para ayudarte. Escribinos o solicitá una asesoría online sin costo.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container contact-page-grid">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>
    </main>
  );
}
