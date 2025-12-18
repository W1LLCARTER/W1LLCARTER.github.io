import { motion } from 'motion/react';
import { User, Heart, Target } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

export function About({ darkMode }: AboutProps) {
  return (
    <section className="relative py-32 px-6" id="about">
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
              {'<about>'}
            </span>
            <div className={`h-px w-12 ${darkMode ? 'bg-red-500' : 'bg-red-600'}`} />
          </div>
          <h2 className="text-5xl md:text-6xl mb-4">
            <span className={`bg-gradient-to-r ${
              darkMode 
                ? 'from-white to-slate-400' 
                : 'from-slate-900 to-slate-600'
            } bg-clip-text text-transparent`}>
              About Me
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
              darkMode
                ? 'bg-slate-900/50 border-slate-800 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]'
                : 'bg-white border-slate-200 hover:border-red-300 shadow-lg hover:shadow-xl'
            }`}
          >
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
              darkMode ? 'bg-red-500/20' : 'bg-red-100'
            }`}>
              <User className="text-red-500" size={28} />
            </div>
            <h3 className="text-2xl mb-4">Who I Am</h3>
            <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
              A passionate computer science student at NC State University, driven by curiosity 
              and a love for solving complex problems through elegant code.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
              darkMode
                ? 'bg-slate-900/50 border-slate-800 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]'
                : 'bg-white border-slate-200 hover:border-red-300 shadow-lg hover:shadow-xl'
            }`}
          >
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
              darkMode ? 'bg-red-500/20' : 'bg-red-100'
            }`}>
              <Heart className="text-red-500" size={28} />
            </div>
            <h3 className="text-2xl mb-4">What I Love</h3>
            <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
              Beyond coding, I'm deeply passionate about music, exploring new technologies, 
              and finding inspiration in the intersection of art and technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
              darkMode
                ? 'bg-slate-900/50 border-slate-800 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]'
                : 'bg-white border-slate-200 hover:border-red-300 shadow-lg hover:shadow-xl'
            }`}
          >
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
              darkMode ? 'bg-red-500/20' : 'bg-red-100'
            }`}>
              <Target className="text-red-500" size={28} />
            </div>
            <h3 className="text-2xl mb-4">My Goal</h3>
            <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
              To create impactful software solutions that make a difference, while continuously 
              learning and growing as a developer and team player.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`mt-12 p-8 md:p-12 rounded-2xl backdrop-blur-sm border ${
            darkMode
              ? 'bg-gradient-to-br from-slate-900/80 to-slate-900/40 border-slate-800'
              : 'bg-gradient-to-br from-white to-slate-50 border-slate-200 shadow-xl'
          }`}
        >
          <div className={`inline-block px-4 py-2 rounded-lg mb-6 font-mono ${
            darkMode ? 'bg-slate-800 text-green-400' : 'bg-slate-100 text-green-600'
          }`}>
            console.log("My Story");
          </div>
          <p className={`text-lg leading-relaxed mb-4 ${
            darkMode ? 'text-slate-300' : 'text-slate-700'
          }`}>
            I'm currently pursuing my degree in Computer Science at NC State University, 
            where I'm constantly challenged to think critically and creatively. My journey 
            in tech started with a simple "Hello World" program, and it's evolved into a 
            passion for building full-stack applications, exploring machine learning, and 
            contributing to open-source projects.
          </p>
          <p className={`text-lg leading-relaxed ${
            darkMode ? 'text-slate-300' : 'text-slate-700'
          }`}>
            When I'm not coding, you'll find me exploring new music, drawing inspiration 
            from tech leaders, or collaborating with fellow students on innovative projects. 
            I believe that the best solutions come from combining technical expertise with 
            creativity and empathy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
