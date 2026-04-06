import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    id: 1,
    company: 'PT. Javan Cipta Solusi',
    role: 'Quality Control Intern',
    location: 'Sleman',
    period: 'Oct 2025 - Present',
    description: 'IT consulting firm focused on digital transformation and custom software development.',
    highlights: [
      'Designed and executed 100+ comprehensive test scenarios achieving 100% test coverage',
      'Conducted regular regression testing cycles to maintain system stability',
      'Generated detailed testing reports to enhance transparency and support continuous improvement',
    ],
    color: 'purple',
  },
  {
    id: 2,
    company: 'PT. Maraisae Indonesia Persada',
    role: 'Contract Developer',
    location: 'Tegal',
    period: 'Nov 2025 - Jan 2026',
    description: 'Household Health Supplies (PKRT) company committed to providing high-quality cleaning products.',
    highlights: [
      'Developed end-to-end web applications using Node.js frameworks',
      'Implemented User-Centered Design (UCD) principles in Figma',
      'Collaborated with cross-functional teams ensuring efficient development workflows',
    ],
    color: 'pink',
  },
  {
    id: 3,
    company: 'Pustaka Nusantara AR',
    role: 'UI/UX Designer',
    location: 'Yogyakarta (remote)',
    period: 'Jan 2025 - Mar 2025',
    description: 'Developed an Augmented Reality mobile application to introduce Nusantara culture to children.',
    highlights: [
      'Analyzing trends in child-friendly app design',
      'Creating the majority of assets for the application',
      'Designing and prototyping the entire project',
    ],
    color: 'blue',
  },
  {
    id: 4,
    company: 'Rupiahku',
    role: 'UI/UX Designer',
    location: 'Yogyakarta',
    period: 'Oct 2024 - Jan 2025',
    description: 'Digital wallet website designed to simplify users\' daily digital transactions.',
    highlights: [
      'Creating application wireframes and researching financial app design trends',
      'Selecting color combinations and assets for the application',
      'Designing visually appealing yet user-friendly interfaces',
    ],
    color: 'cyan',
  },
  {
    id: 5,
    company: 'IDN Media',
    role: 'Kampus Streamer',
    location: 'Yogyakarta',
    period: 'Aug 2023 - Oct 2023',
    description: 'Supporting daily operations and content management for IDN Media\'s live-streaming platform.',
    highlights: [
      'Monitored and evaluated daily live-streaming content performance',
      'Collaborated with creative teams to maintain visual quality',
      'Compiled performance and engagement reports regularly',
    ],
    color: 'rose',
  },
  {
    id: 6,
    company: 'Repomee',
    role: 'Fullstack Developer',
    location: 'Yogyakarta',
    period: 'Project',
    description: 'Journal repository platform for university final projects using Design Thinking methodology.',
    highlights: [
      'Analyzing user needs using a user-centered approach',
      'Developing the application\'s user interface',
      'Prototyping and website development',
    ],
    color: 'indigo',
  },
];

const colorVariants: Record<string, { bg: string; border: string; text: string; icon: string }> = {
  purple: { bg: 'from-purple-900/30 to-purple-800/30', border: 'border-purple-500/30', text: 'text-purple-400', icon: 'bg-purple-500/20' },
  pink: { bg: 'from-pink-900/30 to-pink-800/30', border: 'border-pink-500/30', text: 'text-pink-400', icon: 'bg-pink-500/20' },
  blue: { bg: 'from-blue-900/30 to-blue-800/30', border: 'border-blue-500/30', text: 'text-blue-400', icon: 'bg-blue-500/20' },
  cyan: { bg: 'from-cyan-900/30 to-cyan-800/30', border: 'border-cyan-500/30', text: 'text-cyan-400', icon: 'bg-cyan-500/20' },
  rose: { bg: 'from-rose-900/30 to-rose-800/30', border: 'border-rose-500/30', text: 'text-rose-400', icon: 'bg-rose-500/20' },
  indigo: { bg: 'from-indigo-900/30 to-indigo-800/30', border: 'border-indigo-500/30', text: 'text-indigo-400', icon: 'bg-indigo-500/20' },
};

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section ref={ref} className="py-20 sm:py-32 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section title */}
          <div className="text-center mb-12 sm:mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className="text-purple-400 font-mono text-sm sm:text-base"
            >
              // My journey
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2"
            >
              Work <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
            </motion.h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-blue-500/50 transform -translate-x-1/2" />

            {/* Experience cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const colors = colorVariants[exp.color];
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative md:grid md:grid-cols-2 gap-8 ${isEven ? '' : 'md:grid-flow-dense'}`}
                  >
                    {/* Timeline dot */}
                    <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full transform -translate-x-1/2 z-10 shadow-lg shadow-purple-500/50" />

                    {/* Content */}
                    <div className={isEven ? 'md:col-start-1' : 'md:col-start-2'}>
                      <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className={`p-6 bg-gradient-to-br ${colors.bg} backdrop-blur-sm border ${colors.border} rounded-2xl h-full`}
                      >
                        {/* Company and role */}
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`p-3 ${colors.icon} rounded-xl flex-shrink-0`}>
                            <Briefcase className={`w-6 h-6 ${colors.text}`} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-1">{exp.company}</h3>
                            <p className={`font-medium ${colors.text} mb-2`}>{exp.role}</p>
                            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {exp.period}
                              </span>
                              <span>• {exp.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 text-sm mb-4 italic">{exp.description}</p>

                        {/* Highlights */}
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                              transition={{ duration: 0.4, delay: index * 0.1 + i * 0.1 }}
                              className="flex items-start gap-2 text-gray-300 text-sm"
                            >
                              <span className={`${colors.text} flex-shrink-0 mt-1`}>▹</span>
                              <span>{highlight}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>

                    {/* Empty space for alternating layout */}
                    <div className={isEven ? 'md:col-start-2' : 'md:col-start-1'} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}