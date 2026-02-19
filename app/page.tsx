import Hero from './../components/sections/Hero/index';
import About from './../components/sections/About/index';
import Projects from './../components/sections/Projects/index';
import Skills from './../components/sections/Skills/index';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Skills />
      <Projects />

    </div>
  );
}
