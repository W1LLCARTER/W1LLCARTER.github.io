import { Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';

interface ThemeToggleProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export function ThemeToggle({ darkMode, setDarkMode }: ThemeToggleProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      onClick={() => setDarkMode(!darkMode)}
      className={`fixed top-6 right-6 z-50 p-3 rounded-full backdrop-blur-sm transition-all duration-300 ${
        darkMode 
          ? 'bg-slate-800/80 hover:bg-slate-700/80 text-yellow-400' 
          : 'bg-white/80 hover:bg-slate-100/80 text-slate-900 shadow-lg'
      }`}
      style={{ zIndex: 1000 }}
    >
      {darkMode ? <Sun size={24} /> : <Moon size={24} />}
    </motion.button>
  );
}
