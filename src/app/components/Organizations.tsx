import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Users2, Calendar, Sparkles } from 'lucide-react';

const organizations = [
  {
    name: 'Perspektif UTY',
    role: 'Head of Graphic Design & Videography',
    period: 'May 2024 - Dec 2024',
    location: 'Yogyakarta',
    description: 'A platform designed to connect stories, perspectives, and unique inspirations from #ManusiaUTY.',
    achievement: 'Best Division Award (2024)',
    responsibilities: [
      'Leading the team to ensure tasks are executed as assigned',
      'Designing all visual elements and ensuring brand alignment',
      'Collaborating with teams to produce high-quality visuals',
    ],
    color: 'purple',
  },
  {
    name: 'UTY Growpath Expo 2',
    role: 'Graphic Designer',
    period: 'Sep 2024 - Feb 2025',
    location: 'Yogyakarta',
    description: 'A student gathering aimed at equipping participants with knowledge, skills, and an entrepreneurial mindset.',
    responsibilities: [
      'Creating visual concepts to communicate ideas effectively',
      'Designing marketing materials, including social media content',
      'Ensuring designs align with brand identity and target audience',
    ],
    color: 'pink',
  },
  {
    name: 'Ikatan Pelajar Muhammadiyah',
    role: 'Head of Cadre Development Division',
    period: 'Jun 2019 - Jun 2020',
    location: 'Tegal',
    description: 'Organization focused on education, leadership, and character development for students.',
    responsibilities: [
      'Designing and managing cadre development programs',
      'Organizing training and mentorship for members',
      'Coordinating with other departments and leadership',
    ],
    color: 'blue',
  },
];

const colorVariants: Record<string, { bg: string; border: string; text: string; icon: string; badge: string }> = {
  purple: { bg: 'from-purple-900/30 to-purple-800/30', border: 'border-purple-500/30', text: 'text-purple-400', icon: 'bg-purple-500/20', badge: 'bg-purple-500/20 text-purple-300' },
  pink: { bg: 'from-pink-900/30 to-pink-800/30', border: 'border-pink-500/30', text: 'text-pink-400', icon: 'bg-pink-500/20', badge: 'bg-pink-500/20 text-pink-300' },
  blue: { bg: 'from-blue-900/30 to-blue-800/30', border: 'border-blue-500/30', text: 'text-blue-400', icon: 'bg-blue-500/20', badge: 'bg-blue-500/20 text-blue-300' },
};

export function Organizations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 sm:py-32 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
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
              // Leadership & community involvement
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2"
            >
              Organizational <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
            </motion.h2>
          </div>

          {/* Organizations grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organizations.map((org, index) => {
              const colors = colorVariants[org.color];

              return (
                <motion.div
                  key={org.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ scale: 1.03, y: -10 }}
                  className={`p-6 bg-gradient-to-br ${colors.bg} backdrop-blur-sm border ${colors.border} rounded-2xl h-full flex flex-col`}
                >
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`p-3 ${colors.icon} rounded-xl`}>
                        <Users2 className={`w-6 h-6 ${colors.text}`} />
                      </div>
                      {org.achievement && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : { scale: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                          className={`flex items-center gap-1 px-3 py-1 ${colors.badge} rounded-full text-xs font-medium`}
                        >
                          <Sparkles className="w-3 h-3" />
                          Award
                        </motion.div>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{org.name}</h3>
                    <p className={`font-medium ${colors.text} mb-3`}>{org.role}</p>

                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {org.period}
                      </span>
                      {org.location && (
                        <>
                          <span>•</span>
                          <span>{org.location}</span>
                        </>
                      )}
                    </div>

                    <p className="text-gray-300 text-sm italic">{org.description}</p>
                  </div>

                  {/* Responsibilities */}
                  <div className="flex-1">
                    <ul className="space-y-2">
                      {org.responsibilities.map((resp, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ duration: 0.4, delay: index * 0.15 + i * 0.1 }}
                          className="flex items-start gap-2 text-gray-300 text-sm"
                        >
                          <span className={`${colors.text} flex-shrink-0 mt-1`}>▹</span>
                          <span>{resp}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}