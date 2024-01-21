import { Header } from './components/Header';
import { IntroBanner } from './components/IntroBanner';
import { CalcSection } from './components/CalcSection';

export default function Home() {
  return (
    <main>
      <Header />
      <IntroBanner />
      <CalcSection />
    </main>
  );
}
