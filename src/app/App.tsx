import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Organizations } from './components/Organizations';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <div className="size-full bg-slate-950">
      <ScrollToTop />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Organizations />
      <Contact />
      <Footer />
    </div>
  );
}