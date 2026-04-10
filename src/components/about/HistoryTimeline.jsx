import { HISTORY_MILESTONES } from '../../data/team';
import './HistoryTimeline.css';

export default function HistoryTimeline() {
  return (
    <section className="history section" id="history">
      <div className="container">
        <div className="section-title" style={{ justifyContent: 'center' }}>
          <h2>Nuestra Trayectoria</h2>
        </div>
        <p className="history-intro">
          Desde 1993, acompañando el crecimiento de PyMEs en el Gran Buenos Aires con 
          compromiso, profesionalismo y visión estratégica.
        </p>

        <div className="timeline">
          {HISTORY_MILESTONES.map((milestone, index) => (
            <div
              className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}
              key={milestone.year}
            >
              <div className="timeline-content">
                <span className="timeline-year">{milestone.year}</span>
                <h3 className="timeline-title">{milestone.title}</h3>
                <p className="timeline-description">{milestone.description}</p>
              </div>
              <div className="timeline-dot" />
            </div>
          ))}
          <div className="timeline-line" />
        </div>
      </div>
    </section>
  );
}
