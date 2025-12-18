import { motion } from 'motion/react';
import { Terminal, Code2, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

interface HeroProps {
  darkMode: boolean;
}

export function Hero({ darkMode }: HeroProps) {
  const [text, setText] = useState('');
  const fullText = '> Hello, World!';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Animated grid background */}
        <div className={`absolute inset-0 ${
          darkMode 
            ? 'bg-[linear-gradient(rgba(239,68,68,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.1)_1px,transparent_1px)]' 
            : 'bg-[linear-gradient(rgba(220,38,38,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.1)_1px,transparent_1px)]'
        } bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]`} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`inline-block mb-8 px-6 py-3 rounded-full backdrop-blur-sm ${
            darkMode ? 'bg-red-500/20 border border-red-500/50' : 'bg-red-100 border border-red-300'
          }`}
        >
          <div className="flex items-center gap-2">
            <Terminal className="text-red-500" size={20} />
            <span className="font-mono">Computer Science Student</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-6"
        >
          <h1 className="mb-4">
            <span className={`block text-6xl md:text-8xl mb-2 bg-gradient-to-r ${
              darkMode 
                ? 'from-red-500 via-red-400 to-white' 
                : 'from-red-600 via-red-500 to-slate-900'
            } bg-clip-text text-transparent`}>
              Your Name
            </span>
          </h1>
          <div className={`font-mono text-2xl md:text-4xl ${
            darkMode ? 'text-green-400' : 'text-green-600'
          }`}>
            {text}
            <span className="animate-pulse">|</span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className={`text-xl md:text-2xl mb-12 ${
            darkMode ? 'text-slate-300' : 'text-slate-700'
          }`}
        >
          Building the future, one line of code at a time
          <br />
          <span className="text-red-500">@ NC State University</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex gap-4 justify-center items-center"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className={`px-8 py-4 rounded-lg flex items-center gap-2 transition-all duration-300 ${
              darkMode
                ? 'bg-red-500 hover:bg-red-600 text-white shadow-[0_0_30px_rgba(239,68,68,0.3)]'
                : 'bg-red-600 hover:bg-red-700 text-white shadow-lg'
            }`}
          >
            <Code2 size={20} />
            View My Work
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className={`px-8 py-4 rounded-lg transition-all duration-300 ${
              darkMode
                ? 'bg-slate-800 hover:bg-slate-700 border border-slate-700'
                : 'bg-white hover:bg-slate-50 border border-slate-300 shadow-lg'
            }`}
          >
            Get In Touch
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="animate-bounce text-red-500" size={32} />
      </motion.div>
    </section>
  );
}
