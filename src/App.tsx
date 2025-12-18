import { useState, useEffect } from 'react';
import { Hero } from './components/Hero.js';
import { About } from './components/About.js';
import { Education } from './components/Education.js';
import { Projects } from './components/Projects.js';
import { Skills } from './components/Skills.js';
import { Music } from './components/Music.js';
import { Inspirations } from './components/Inspirations.js';
import { Contact } from './components/Contact.js';
import { ThemeToggle } from './components/ThemeToggle.js';
import { CodeRain } from './components/CodeRain.js';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      darkMode 
        ? 'bg-slate-950 text-slate-100' 
        : 'bg-slate-50 text-slate-900'
    }`}>
      <CodeRain darkMode={darkMode} />
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Education darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Music darkMode={darkMode} />
      <Inspirations darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      
      <footer className={`py-8 text-center border-t ${
        darkMode ? 'border-slate-800' : 'border-slate-200'
      }`}>
        <p className="text-sm opacity-70">
          © 2024 CS Student @ NC State University
        </p>
      </footer>
    </div>
  );
}
