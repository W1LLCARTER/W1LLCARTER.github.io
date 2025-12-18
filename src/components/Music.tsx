import { motion } from 'motion/react';
import { Music as MusicIcon, Headphones, Radio } from 'lucide-react';

interface MusicProps {
  darkMode: boolean;
}

export function Music({ darkMode }: MusicProps) {
  const favorites = [
    { artist: 'Daft Punk', genre: 'Electronic', reason: 'Perfect coding music' },
    { artist: 'Tame Impala', genre: 'Psychedelic Rock', reason: 'Creative inspiration' },
    { artist: 'Kendrick Lamar', genre: 'Hip Hop', reason: 'Lyrical genius' },
    { artist: 'Mac Miller', genre: 'Hip Hop', reason: 'Honest storytelling' },
    { artist: 'Pink Floyd', genre: 'Progressive Rock', reason: 'Timeless classics' },
    { artist: 'The Weeknd', genre: 'R&B', reason: 'Late night vibes' },
  ];

  return (
    <section className="relative py-32 px-6" id="music">
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
              {'<music>'}
            </span>
            <div className={`h-px w-12 ${darkMode ? 'bg-red-500' : 'bg-red-600'}`} />
          </div>
          <h2 className="text-5xl md:text-6xl mb-4">
            <span className={`bg-gradient-to-r ${
              darkMode 
                ? 'from-white to-slate-400' 
                : 'from-slate-900 to-slate-600'
            } bg-clip-text text-transparent`}>
              Music & Inspiration
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
              ? 'bg-gradient-to-br from-red-500/10 via-purple-500/10 to-blue-500/10 border-slate-800'
              : 'bg-gradient-to-br from-red-50 via-purple-50 to-blue-50 border-slate-200 shadow-xl'
          }`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
              darkMode ? 'bg-red-500/20' : 'bg-red-100'
            }`}>
              <MusicIcon className="text-red-500" size={36} />
            </div>
            <div>
              <h3 className="text-3xl mb-2">The Soundtrack to My Code</h3>
              <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                Music fuels my creativity and keeps me in the flow state
              </p>
            </div>
          </div>
          
          <p className={`text-lg leading-relaxed ${
            darkMode ? 'text-slate-300' : 'text-slate-700'
          }`}>
            Whether I'm debugging a tricky problem or building a new feature, music is always 
            part of my process. From electronic beats to introspective hip-hop, my playlists 
            are as diverse as my tech stack. I believe that the right music can transform a 
            coding session into a creative experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {favorites.map((item, index) => (
            <motion.div
              key={item.artist}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
                darkMode
                  ? 'bg-slate-900/50 border-slate-800 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.1)]'
                  : 'bg-white border-slate-200 hover:border-red-300 shadow-lg hover:shadow-xl'
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                  darkMode ? 'bg-red-500/20' : 'bg-red-100'
                }`}>
                  <Headphones className="text-red-500" size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xl mb-1 truncate">{item.artist}</h4>
                  <p className={`text-sm ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
                    {item.genre}
                  </p>
                </div>
              </div>
              <p className={`text-sm italic ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                "{item.reason}"
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={`p-8 rounded-2xl backdrop-blur-sm border text-center ${
            darkMode
              ? 'bg-slate-900/50 border-slate-800'
              : 'bg-white border-slate-200 shadow-xl'
          }`}
        >
          <Radio className="text-red-500 mx-auto mb-4" size={48} />
          <p className="text-xl mb-2">
            Currently vibing to my 
            <span className={darkMode ? ' text-red-400' : ' text-red-600'}> Deep Focus</span> playlist
          </p>
          <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            A mix of ambient, lo-fi, and electronic tracks perfect for deep work sessions
          </p>
        </motion.div>
      </div>
    </section>
  );
}
