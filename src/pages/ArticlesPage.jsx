import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Tag, ArrowLeft } from 'lucide-react';
import { ARTICLES } from '../data/articles';
import './ArticlesPage.css';

function ArticleCard({ article, onSelect }) {
  return (
    <article className="article-card" onClick={() => onSelect(article.id)}>
      <div className="article-card-image">
        <img src={article.image} alt={article.title} loading="lazy" />
      </div>
      <div className="article-card-content">
        <div className="article-card-meta">
          <span className="article-card-date">
            <Calendar size={14} />
            {new Date(article.date).toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
          <div className="article-card-tags">
            {article.tags.map(tag => (
              <span key={tag} className="article-tag">
                <Tag size={12} />
                {tag}
              </span>
            ))}
          </div>
        </div>
        <h3 className="article-card-title">{article.title}</h3>
        <p className="article-card-excerpt">{article.excerpt}</p>
        <span className="article-card-link">
          Seguir leyendo
          <ArrowRight size={16} />
        </span>
      </div>
    </article>
  );
}

function ArticleDetail({ article, onBack }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <article className="article-detail" id="article-detail">
      <button className="article-back-btn" onClick={onBack}>
        <ArrowLeft size={18} />
        Volver a temas de interés
      </button>

      <div className="article-detail-header">
        <img src={article.image} alt={article.title} className="article-detail-image" />
        <div className="article-detail-meta">
          <span className="article-card-date">
            <Calendar size={14} />
            {new Date(article.date).toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
          <div className="article-card-tags">
            {article.tags.map(tag => (
              <span key={tag} className="article-tag">
                <Tag size={12} />
                {tag}
              </span>
            ))}
          </div>
        </div>
        <h1 className="article-detail-title">{article.title}</h1>
      </div>

      <div className="article-detail-body" dangerouslySetInnerHTML={{ __html: article.content }} />

      <div className="article-detail-cta">
        <p>¿Tenés consultas sobre este tema?</p>
        <Link to="/contacto" className="btn btn-accent">
          Contactanos
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}

export default function ArticlesPage() {
  const [selectedArticleId, setSelectedArticleId] = useState(null);

  const selectedArticle = ARTICLES.find(a => a.id === selectedArticleId);

  return (
    <main id="articles-page">
      <div className="page-header">
        <div className="container">
          <div className="section-title">
            <h2>Temas de Interés</h2>
          </div>
          <p className="page-header-subtitle">
            Mantenete informado sobre las últimas novedades impositivas, laborales y societarias 
            que impactan en tu actividad.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {selectedArticle ? (
            <ArticleDetail
              article={selectedArticle}
              onBack={() => setSelectedArticleId(null)}
            />
          ) : (
            <div className="articles-grid">
              {ARTICLES.length > 0 ? (
                ARTICLES.map(article => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    onSelect={setSelectedArticleId}
                  />
                ))
              ) : (
                <div className="articles-empty">
                  <p>Próximamente publicaremos artículos y novedades de interés.</p>
                  <p>¡Visitanos periódicamente!</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
