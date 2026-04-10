import { Heart, Users, Shield, BookOpen, Lightbulb } from 'lucide-react';
import { VALUES } from '../../data/team';
import './ValuesSection.css';

const ICON_MAP = { Heart, Users, Shield, BookOpen, Lightbulb };

export default function ValuesSection() {
  return (
    <section className="values section" id="values">
      <div className="container">
        <div className="section-title" style={{ justifyContent: 'center' }}>
          <h2>Nuestros Valores</h2>
        </div>

        <div className="values-grid">
          {VALUES.map((value) => {
            const IconComponent = ICON_MAP[value.icon];
            return (
              <div className="value-card" key={value.id}>
                <div className="value-icon">
                  {IconComponent && <IconComponent size={28} />}
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
