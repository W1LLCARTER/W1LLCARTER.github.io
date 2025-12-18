import { motion } from 'motion/react';
import { GraduationCap, Book, Award } from 'lucide-react';

interface EducationProps {
  darkMode: boolean;
}

export function Education({ darkMode }: EducationProps) {
  const courses = [
    { code: 'CSC 116', name: 'Intro to Computing - Java', category: 'Core' },
    { code: 'CSC 216', name: 'Software Development Fundamentals', category: 'Core' },
    { code: 'CSC 226', name: 'Discrete Mathematics', category: 'Theory' },
    { code: 'CSC 316', name: 'Data Structures & Algorithms', category: 'Core' },
    { code: 'CSC 326', name: 'Software Engineering', category: 'Development' },
    { code: 'CSC 333', name: 'Automata & Computation', category: 'Theory' },
    { code: 'CSC 379', name: 'Ethics in Computing', category: 'Elective' },
    { code: 'CSC 417', name: 'Theory of Programming Languages', category: 'Theory' },
    { code: 'CSC 446', name: 'Database Management', category: 'Development' },
    { code: 'CSC 495', name: 'Machine Learning', category: 'AI/ML' },
    { code: 'CSC 520', name: 'Artificial Intelligence', category: 'AI/ML' },
    { code: 'CSC 540', name: 'Database Systems', category: 'Development' },
  ];

  const categoryColors: Record<string, { dark: string; light: string }> = {
    Core: { dark: 'bg-red-500/20 text-red-400 border-red-500/30', light: 'bg-red-100 text-red-700 border-red-300' },
    Theory: { dark: 'bg-blue-500/20 text-blue-400 border-blue-500/30', light: 'bg-blue-100 text-blue-700 border-blue-300' },
    Development: { dark: 'bg-green-500/20 text-green-400 border-green-500/30', light: 'bg-green-100 text-green-700 border-green-300' },
    'AI/ML': { dark: 'bg-purple-500/20 text-purple-400 border-purple-500/30', light: 'bg-purple-100 text-purple-700 border-purple-300' },
    Elective: { dark: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30', light: 'bg-yellow-100 text-yellow-700 border-yellow-300' },
  };

  return (
    <section className={`relative py-32 px-6 ${
      darkMode ? 'bg-slate-900/30' : 'bg-slate-100/50'
    }`} id="education">
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
              {'<education>'}
            </span>
            <div className={`h-px w-12 ${darkMode ? 'bg-red-500' : 'bg-red-600'}`} />
          </div>
          <h2 className="text-5xl md:text-6xl mb-4">
            <span className={`bg-gradient-to-r ${
              darkMode 
                ? 'from-white to-slate-400' 
                : 'from-slate-900 to-slate-600'
            } bg-clip-text text-transparent`}>
              Education
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`p-8 md:p-12 rounded-2xl backdrop-blur-sm border mb-12 ${
            darkMode
              ? 'bg-slate-900/50 border-slate-800'
              : 'bg-white border-slate-200 shadow-xl'
          }`}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 ${
              darkMode ? 'bg-red-500/20' : 'bg-red-100'
            }`}>
              <GraduationCap className="text-red-500" size={40} />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl mb-2">North Carolina State University</h3>
              <p className={`text-xl mb-2 ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
                Bachelor of Science in Computer Science
              </p>
              <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                Expected Graduation: May 2026 | GPA: 3.8/4.0
              </p>
            </div>
            <div className={`px-6 py-3 rounded-xl ${
              darkMode ? 'bg-red-500/20 border border-red-500/30' : 'bg-red-100 border border-red-300'
            }`}>
              <Award className="text-red-500 mx-auto mb-2" size={32} />
              <p className={`text-sm ${darkMode ? 'text-red-400' : 'text-red-700'}`}>Dean's List</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Book className="text-red-500" size={28} />
            <h3 className="text-3xl">Relevant Coursework</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course, index) => (
              <motion.div
                key={course.code}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`p-6 rounded-xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                  darkMode
                    ? 'bg-slate-900/50 border-slate-800 hover:border-red-500/50'
                    : 'bg-white border-slate-200 hover:border-red-300 shadow-md hover:shadow-lg'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className={`font-mono ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
                    {course.code}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs border ${
                    darkMode 
                      ? categoryColors[course.category].dark 
                      : categoryColors[course.category].light
                  }`}>
                    {course.category}
                  </span>
                </div>
                <p className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                  {course.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
