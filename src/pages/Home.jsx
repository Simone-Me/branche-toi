import { Link } from 'react-router-dom';
import Slider from 'react-slick';

function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section className="hero-banner bg-primary rounded-2xl text-white p-8 md:p-12 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Préparez votre avenir avec confiance</h1>
        <p className="text-xl mb-8 opacity-90">Révision, orientation, et accompagnement personnalisé pour réussir votre bac</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/quiz" className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors text-center">
            Commencer un quiz
          </Link>
          <Link to="/fiches-metiers" className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors text-center">
            Explorer les métiers
          </Link>
        </div>
      </section>

      <section className="features-preview mb-12">
        <h2 className="text-center mb-8">Nos fonctionnalités</h2>
        <div className="card-grid">
          <Link to="/revision-bac" className="feature-card">
            <h3>Fiches de révision</h3>
            <p>Des résumés clairs pour chaque matière</p>
          </Link>
          <Link to="/orientation" className="feature-card">
            <h3>Orientation personnalisée</h3>
            <p>Découvrez les parcours qui vous correspondent</p>
          </Link>
          <Link to="/quiz" className="feature-card">
            <h3>Quiz interactifs</h3>
            <p>Testez vos connaissances</p>
          </Link>
        </div>
      </section>

      <section className="testimonials-preview">
        <h2>Témoignages récents</h2>
        <Slider {...sliderSettings}>
          {/* Témoignages à remplir */}
        </Slider>
      </section>
    </div>
  );
}

export default Home;