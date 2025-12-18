import { motion } from 'motion/react';
import { Lightbulb, Quote, Sparkles } from 'lucide-react';

interface InspirationsProps {
  darkMode: boolean;
}

export function Inspirations({ darkMode }: InspirationsProps) {
  const inspirations = [
    {
      name: 'Linus Torvalds',
      role: 'Creator of Linux',
      quote: 'Talk is cheap. Show me the code.',
      impact: 'Taught me the value of open source and practical problem-solving',
    },
    {
      name: 'Grace Hopper',
      role: 'Computer Science Pioneer',
      quote: "The most dangerous phrase is: 'We've always done it this way.'",
      impact: 'Inspired me to challenge conventions and embrace innovation',
    },
    {
      name: 'Guido van Rossum',
      role: 'Creator of Python',
      quote: 'Code is read much more often than it is written.',
      impact: 'Emphasized the importance of clean, readable code',
    },
    {
      name: 'Ada Lovelace',
      role: 'First Computer Programmer',
      quote: 'The science of operations is a science of the future.',
      impact: 'Showed me that creativity and logic can coexist beautifully',
    },
  ];

  const philosophies = [
    {
      title: 'Continuous Learning',
      description: 'The tech world evolves rapidly. Stay curious, stay relevant.',
      icon: '📚',
    },
    {
      title: 'Fail Fast, Learn Faster',
      description: 'Every bug is a lesson. Every error is an opportunity to grow.',
      icon: '🚀',
    },
    {
      title: 'Build to Help',
      description: 'The best code solves real problems for real people.',
      icon: '💡',
    },
    {
      title: 'Collaborate & Share',
      description: 'Great things are built by teams, not individuals.',
      icon: '🤝',
    },
  ];

  return (
    <section className={`relative py-32 px-6 ${
      darkMode ? 'bg-slate-900/30' : 'bg-slate-100/50'
    }`} id="inspirations">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className={`h-px w-12 ${darkMode ? 'bg-red-500' : 'bg-red-600'}`} />
            <span className={`font-mono ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
              {'<inspirations>'}
            </span>
            <div className={`h-px w-12 ${darkMode ? 'bg-red-500' : 'bg-red-600'}`} />
          </div>
          <h2 className="text-5xl md:text-6xl mb-4">
            <span className={`bg-gradient-to-r ${
              darkMode 
                ? 'from-white to-slate-400' 
                : 'from-slate-900 to-slate-600'
            } bg-clip-text text-transparent`}>
              What Inspires Me
            </span>
          </h2>
        </motion.div>

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <Lightbulb className="text-red-500" size={32} />
            <h3 className="text-3xl">Tech Legends & Mentors</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {inspirations.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-[1.02] ${
                  darkMode
                    ? 'bg-slate-900/50 border-slate-800 hover:border-red-500/50'
                    : 'bg-white border-slate-200 hover:border-red-300 shadow-lg hover:shadow-xl'
                }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                    darkMode ? 'bg-red-500/20' : 'bg-red-100'
                  }`}>
                    <Quote className="text-red-500" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl mb-1">{person.name}</h4>
                    <p className={`text-sm ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
                      {person.role}
                    </p>
                  </div>
                </div>
                
                <blockquote className={`mb-4 pl-4 border-l-2 italic ${
                  darkMode 
                    ? 'border-red-500/50 text-slate-300' 
                    : 'border-red-300 text-slate-700'
                }`}>
                  "{person.quote}"
                </blockquote>
                
                <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {person.impact}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="text-red-500" size={32} />
            <h3 className="text-3xl">My Philosophy</h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {philosophies.map((philosophy, index) => (
              <motion.div
                key={philosophy.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
                  darkMode
                    ? 'bg-slate-900/50 border-slate-800 hover:border-red-500/50'
                    : 'bg-white border-slate-200 hover:border-red-300 shadow-lg hover:shadow-xl'
                }`}
              >
                <div className="text-5xl mb-4">{philosophy.icon}</div>
                <h4 className="text-xl mb-2">{philosophy.title}</h4>
                <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                  {philosophy.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={`p-8 md:p-12 rounded-2xl backdrop-blur-sm border text-center ${
            darkMode
              ? 'bg-gradient-to-r from-red-500/10 to-purple-500/10 border-red-500/30'
              : 'bg-gradient-to-r from-red-50 to-purple-50 border-red-300 shadow-lg'
          }`}
        >
          <p className="text-2xl mb-4">
            <span className={darkMode ? 'text-red-400' : 'text-red-600'}>
              "The best way to predict the future is to invent it."
            </span>
          </p>
          <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
            — Alan Kay, Computer Scientist
          </p>
        </motion.div>
      </div>
    </section>
  );
}
