import { motion } from 'motion/react';
import { Code, Database, Wrench, Cpu } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

export function Skills({ darkMode }: SkillsProps) {
  const skillCategories = [
    {
      icon: Code,
      title: 'Languages',
      skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C++', 'SQL', 'HTML/CSS'],
    },
    {
      icon: Wrench,
      title: 'Frameworks & Libraries',
      skills: ['React', 'Node.js', 'Express', 'Django', 'Flask', 'Tailwind CSS', 'Next.js'],
    },
    {
      icon: Database,
      title: 'Databases & Tools',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Git', 'Docker', 'AWS', 'Firebase'],
    },
    {
      icon: Cpu,
      title: 'Concepts & Skills',
      skills: ['Data Structures', 'Algorithms', 'OOP', 'REST APIs', 'Agile', 'CI/CD', 'Testing'],
    },
  ];

  return (
    <section className="relative py-32 px-6" id="skills">
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
              {'<skills>'}
            </span>
            <div className={`h-px w-12 ${darkMode ? 'bg-red-500' : 'bg-red-600'}`} />
          </div>
          <h2 className="text-5xl md:text-6xl mb-4">
            <span className={`bg-gradient-to-r ${
              darkMode 
                ? 'from-white to-slate-400' 
                : 'from-slate-900 to-slate-600'
            } bg-clip-text text-transparent`}>
              Technical Skills
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className={`p-8 rounded-2xl backdrop-blur-sm border ${
                darkMode
                  ? 'bg-slate-900/50 border-slate-800'
                  : 'bg-white border-slate-200 shadow-xl'
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                  darkMode ? 'bg-red-500/20' : 'bg-red-100'
                }`}>
                  <category.icon className="text-red-500" size={28} />
                </div>
                <h3 className="text-2xl">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 cursor-default ${
                      darkMode
                        ? 'bg-slate-800 hover:bg-red-500/20 hover:border-red-500/50 border border-slate-700'
                        : 'bg-slate-50 hover:bg-red-50 hover:border-red-300 border border-slate-200'
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`mt-12 p-8 rounded-2xl backdrop-blur-sm border text-center ${
            darkMode
              ? 'bg-gradient-to-r from-red-500/10 to-purple-500/10 border-red-500/30'
              : 'bg-gradient-to-r from-red-50 to-purple-50 border-red-300 shadow-lg'
          }`}
        >
          <p className="text-xl mb-2">
            <span className={darkMode ? 'text-red-400' : 'text-red-600'}>
              Always learning, always growing.
            </span>
          </p>
          <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
            Continuously expanding my skill set and staying up-to-date with the latest technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
