import { motion } from 'motion/react';
import { Github, ExternalLink, Folder } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

export function Projects({ darkMode }: ProjectsProps) {
  const projects = [
    {
      title: 'WolfTracker',
      description: 'A full-stack web application for NC State students to track assignments, deadlines, and grades across all courses. Features real-time updates and smart notifications.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Express'],
      github: '#',
      demo: '#',
      featured: true,
    },
    {
      title: 'CodeCollab',
      description: 'Real-time collaborative code editor with syntax highlighting, live cursors, and integrated chat. Perfect for pair programming sessions.',
      tech: ['TypeScript', 'WebSockets', 'Monaco Editor', 'Redis'],
      github: '#',
      demo: '#',
      featured: true,
    },
    {
      title: 'ML Stock Predictor',
      description: 'Machine learning model that analyzes historical stock data and sentiment analysis from news articles to predict short-term price movements.',
      tech: ['Python', 'TensorFlow', 'Pandas', 'Flask'],
      github: '#',
      demo: '#',
      featured: true,
    },
    {
      title: 'CampusEats',
      description: 'Mobile-first food ordering platform for campus dining halls with QR code ordering and real-time order tracking.',
      tech: ['React Native', 'Firebase', 'Stripe API'],
      github: '#',
      demo: '#',
      featured: false,
    },
    {
      title: 'AlgoVisualizer',
      description: 'Interactive visualization tool for common sorting and pathfinding algorithms. Educational tool with step-by-step explanations.',
      tech: ['JavaScript', 'Canvas API', 'Tailwind'],
      github: '#',
      demo: '#',
      featured: false,
    },
    {
      title: 'DevMatch',
      description: 'Platform connecting CS students for hackathons and projects based on skills, interests, and availability. Built during HackNC 2023.',
      tech: ['Next.js', 'MongoDB', 'OAuth', 'Vercel'],
      github: '#',
      demo: '#',
      featured: false,
    },
  ];

  return (
    <section className={`relative py-32 px-6 ${
      darkMode ? 'bg-slate-900/30' : 'bg-slate-100/50'
    }`} id="projects">
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
              {'<projects>'}
            </span>
            <div className={`h-px w-12 ${darkMode ? 'bg-red-500' : 'bg-red-600'}`} />
          </div>
          <h2 className="text-5xl md:text-6xl mb-4">
            <span className={`bg-gradient-to-r ${
              darkMode 
                ? 'from-white to-slate-400' 
                : 'from-slate-900 to-slate-600'
            } bg-clip-text text-transparent`}>
              Featured Projects
            </span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-[1.02] ${
                darkMode
                  ? 'bg-slate-900/50 border-slate-800 hover:border-red-500/50 hover:shadow-[0_0_40px_rgba(239,68,68,0.2)]'
                  : 'bg-white border-slate-200 hover:border-red-300 shadow-lg hover:shadow-2xl'
              }`}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 ${
                  darkMode ? 'bg-red-500/20' : 'bg-red-100'
                }`}>
                  <Folder className="text-red-500" size={32} />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl mb-2 flex items-center gap-3">
                        {project.title}
                        {project.featured && (
                          <span className={`px-3 py-1 rounded-lg text-sm ${
                            darkMode 
                              ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                              : 'bg-red-100 text-red-700 border border-red-300'
                          }`}>
                            Featured
                          </span>
                        )}
                      </h3>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        className={`p-2 rounded-lg transition-all duration-300 ${
                          darkMode
                            ? 'hover:bg-slate-800 text-slate-400 hover:text-white'
                            : 'hover:bg-slate-100 text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        <Github size={24} />
                      </a>
                      <a
                        href={project.demo}
                        className={`p-2 rounded-lg transition-all duration-300 ${
                          darkMode
                            ? 'hover:bg-slate-800 text-slate-400 hover:text-white'
                            : 'hover:bg-slate-100 text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        <ExternalLink size={24} />
                      </a>
                    </div>
                  </div>
                  
                  <p className={`mb-4 text-lg ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-lg font-mono text-sm ${
                          darkMode
                            ? 'bg-slate-800 text-slate-300'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/yourusername"
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-lg transition-all duration-300 ${
              darkMode
                ? 'bg-slate-800 hover:bg-slate-700 border border-slate-700'
                : 'bg-white hover:bg-slate-50 border border-slate-300 shadow-lg'
            }`}
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
