import Hero from '../components/home/Hero';
import AlertBanner from '../components/home/AlertBanner';
import ServicesPreview from '../components/home/ServicesPreview';
import VideoCallCTA from '../components/home/VideoCallCTA';
import FounderProfile from '../components/about/FounderProfile';

export default function HomePage() {
  return (
    <main id="home-page">
      <AlertBanner />
      <Hero />
      <ServicesPreview />
      <VideoCallCTA />
      <FounderProfile />
    </main>
  );
}
