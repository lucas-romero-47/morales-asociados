import { VIDEOS } from '../../data/resources';
import './VideoLibrary.css';

export default function VideoLibrary() {
  return (
    <section className="video-library" id="video-library">
      <div className="section-title">
        <h2>Videoteca</h2>
      </div>
      <p className="video-library-intro">
        Videos producidos por nuestro estudio con tutoriales, explicaciones de servicios y actualizaciones impositivas.
      </p>

      <div className="video-library-grid">
        {VIDEOS.map((video) => (
          <div className="video-card" key={video.id}>
            <div className="video-card-embed">
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="video-card-info">
              <h3 className="video-card-title">{video.title}</h3>
              <p className="video-card-description">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
