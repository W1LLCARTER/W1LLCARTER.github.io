import { motion } from 'motion/react';
import { Mail, Linkedin, Github, FileText, Send } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

export function Contact({ darkMode }: ContactProps) {
  return (
    <section className="relative py-32 px-6" id="contact">
      <div className="max-w-4xl mx-auto">
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
              {'<contact>'}
            </span>
            <div className={`h-px w-12 ${darkMode ? 'bg-red-500' : 'bg-red-600'}`} />
          </div>
          <h2 className="text-5xl md:text-6xl mb-4">
            <span className={`bg-gradient-to-r ${
              darkMode 
                ? 'from-white to-slate-400' 
                : 'from-slate-900 to-slate-600'
            } bg-clip-text text-transparent`}>
              Let's Connect
            </span>
          </h2>
          <p className={`text-xl ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
            Interested in working together? Let's make something great!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`p-8 md:p-12 rounded-2xl backdrop-blur-sm border ${
            darkMode
              ? 'bg-slate-900/50 border-slate-800'
              : 'bg-white border-slate-200 shadow-xl'
          }`}
        >
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:your.email@ncsu.edu"
              className={`flex items-center gap-4 p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? 'bg-slate-800 hover:bg-slate-700 border border-slate-700'
                  : 'bg-slate-50 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                darkMode ? 'bg-red-500/20' : 'bg-red-100'
              }`}>
                <Mail className="text-red-500" size={24} />
              </div>
              <div>
                <p className={`text-sm mb-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Email
                </p>
                <p className="truncate">your.email@ncsu.edu</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? 'bg-slate-800 hover:bg-slate-700 border border-slate-700'
                  : 'bg-slate-50 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                darkMode ? 'bg-red-500/20' : 'bg-red-100'
              }`}>
                <Linkedin className="text-red-500" size={24} />
              </div>
              <div>
                <p className={`text-sm mb-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  LinkedIn
                </p>
                <p className="truncate">/in/yourprofile</p>
              </div>
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? 'bg-slate-800 hover:bg-slate-700 border border-slate-700'
                  : 'bg-slate-50 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                darkMode ? 'bg-red-500/20' : 'bg-red-100'
              }`}>
                <Github className="text-red-500" size={24} />
              </div>
              <div>
                <p className={`text-sm mb-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  GitHub
                </p>
                <p className="truncate">@yourusername</p>
              </div>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? 'bg-slate-800 hover:bg-slate-700 border border-slate-700'
                  : 'bg-slate-50 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                darkMode ? 'bg-red-500/20' : 'bg-red-100'
              }`}>
                <FileText className="text-red-500" size={24} />
              </div>
              <div>
                <p className={`text-sm mb-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Resume
                </p>
                <p className="truncate">Download PDF</p>
              </div>
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`p-8 rounded-xl text-center ${
              darkMode
                ? 'bg-gradient-to-r from-red-500/10 to-purple-500/10 border border-red-500/30'
                : 'bg-gradient-to-r from-red-50 to-purple-50 border border-red-300'
            }`}
          >
            <Send className="text-red-500 mx-auto mb-4" size={48} />
            <h3 className="text-2xl mb-3">Open to Opportunities</h3>
            <p className={`mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              I'm currently seeking internship and full-time opportunities for Summer 2025 
              and beyond. Let's build something amazing together!
            </p>
            <a
              href="mailto:your.email@ncsu.edu?subject=Let's Connect!"
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-lg transition-all duration-300 ${
                darkMode
                  ? 'bg-red-500 hover:bg-red-600 text-white shadow-[0_0_30px_rgba(239,68,68,0.3)]'
                  : 'bg-red-600 hover:bg-red-700 text-white shadow-lg'
              }`}
            >
              <Mail size={20} />
              Send Me a Message
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className={`font-mono ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
            {'</contact>'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
