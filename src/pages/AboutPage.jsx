import FounderProfile from '../components/about/FounderProfile';
import HistoryTimeline from '../components/about/HistoryTimeline';
import ValuesSection from '../components/about/ValuesSection';
import TeamSection from '../components/about/TeamSection';

export default function AboutPage() {
  return (
    <main id="about-page">
      <div className="page-header">
        <div className="container">
          <div className="section-title">
            <h2>Trayectoria</h2>
          </div>
          <p className="page-header-subtitle">
            Conocé nuestra historia, nuestro equipo y los valores que nos guían desde 1993.
          </p>
        </div>
      </div>
      <HistoryTimeline />
      <FounderProfile />
      <ValuesSection />
      <TeamSection />
    </main>
  );
}
