import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { NewsSection } from './components/NewsSection';
import { Championship } from './components/Championship';
import { TournamentBracket } from './components/TournamentBracket';
import { Schedule } from './components/Schedule';
import { PlayerStats } from './components/PlayerStats';
import { Highlights } from './components/Highlights';
import { Timeline } from './components/Timeline';
import { TeamRoster } from './components/TeamRoster';
import { WBCHistory } from './components/WBCHistory';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <NewsSection />
      <Championship />
      <TournamentBracket />
      <Schedule />
      <PlayerStats />
      <Highlights />
      <Timeline />
      <TeamRoster />
      <WBCHistory />
      <Gallery />
      <Footer />
    </div>
  );
}
