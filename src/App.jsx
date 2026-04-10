// src/App.jsx
import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/layout/WhatsAppButton';
import './pages/PageHeader.css';

// Lazy loading de páginas para optimizar el bundle inicial
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));
const ArticlesPage = lazy(() => import('./pages/ArticlesPage'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
};

const AppContent = () => (
  <>
    <ScrollToTop />
    <TopBar />
    <Navbar />
    <Suspense fallback={<div className="suspense-loader" />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trayectoria" element={<AboutPage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/recursos" element={<ResourcesPage />} />
        <Route path="/temas-de-interes" element={<ArticlesPage />} />
      </Routes>
    </Suspense>
    <Footer />
    <WhatsAppButton />
  </>
);

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
