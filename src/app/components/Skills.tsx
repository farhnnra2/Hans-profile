import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Palette, TestTube2, Users, TrendingUp, Zap } from 'lucide-react';
import { MatrixRain } from './MatrixRain';

const skillCategories = [
  {
    title: 'QA & Testing',
    icon: TestTube2,
    color: 'purple',
    skills: ['Jmeter', 'Cypress', 'QaTools', 'Regression Testing', 'Test Scenarios', 'Bug Tracking'],
  },
  {
    title: 'Design',
    icon: Palette,
    color: 'pink',
    skills: ['Figma', 'Canva', 'Corel Draw', 'UI/UX Design', 'Prototyping', 'Wireframing'],
  },
  {
    title: 'Development',
    icon: Code2,
    color: 'blue',
    skills: ['Node.js', 'React', 'Fullstack Development', 'Version Control', 'Web Development', 'Design Thinking'],
  },
  {
    title: 'Leadership',
    icon: Users,
    color: 'cyan',
    skills: ['Team Management', 'Project Management', 'Teamwork', 'Communication', 'Collaboration', 'Mentorship'],
  },
  {
    title: 'Management',
    icon: TrendingUp,
    color: 'rose',
    skills: ['Social Media Management', 'Content Management', 'SOP Development', 'Performance Reporting', 'Quality Assurance', 'Process Improvement'],
  },
  {
    title: 'Soft Skills',
    icon: Zap,
    color: 'indigo',
    skills: ['Creative', 'Hardworking', 'Problem Solving', 'Adaptability', 'Critical Thinking', 'Time Management'],
  },
];

const colorVariants: Record<string, { bg: string; border: string; text: string; icon: string; glow: string }> = {
  purple: { bg: 'from-purple-900/40 to-purple-800/40', border: 'border-purple-500/40', text: 'text-purple-400', icon: 'bg-purple-500/20', glow: 'shadow-purple-500/20' },
  pink: { bg: 'from-pink-900/40 to-pink-800/40', border: 'border-pink-500/40', text: 'text-pink-400', icon: 'bg-pink-500/20', glow: 'shadow-pink-500/20' },
  blue: { bg: 'from-blue-900/40 to-blue-800/40', border: 'border-blue-500/40', text: 'text-blue-400', icon: 'bg-blue-500/20', glow: 'shadow-blue-500/20' },
  cyan: { bg: 'from-cyan-900/40 to-cyan-800/40', border: 'border-cyan-500/40', text: 'text-cyan-400', icon: 'bg-cyan-500/20', glow: 'shadow-cyan-500/20' },
  rose: { bg: 'from-rose-900/40 to-rose-800/40', border: 'border-rose-500/40', text: 'text-rose-400', icon: 'bg-rose-500/20', glow: 'shadow-rose-500/20' },
  indigo: { bg: 'from-indigo-900/40 to-indigo-800/40', border: 'border-indigo-500/40', text: 'text-indigo-400', icon: 'bg-indigo-500/20', glow: 'shadow-indigo-500/20' },
};

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 sm:py-32 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <MatrixRain />
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section title */}
          <div className="text-center mb-12 sm:mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className="text-purple-400 font-mono text-sm sm:text-base"
            >
              // What I bring to the table
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2"
            >
              Skills & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Expertise</span>
            </motion.h2>
          </div>

          {/* Skills grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const colors = colorVariants[category.color];
              const Icon = category.icon;

              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className={`p-6 bg-gradient-to-br ${colors.bg} backdrop-blur-sm border ${colors.border} rounded-2xl h-full shadow-lg ${colors.glow} hover:shadow-2xl`}
                  >
                    {/* Icon and title */}
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`p-3 ${colors.icon} rounded-xl`}
                      >
                        <Icon className={`w-6 h-6 ${colors.text}`} />
                      </motion.div>
                      <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    </div>

                    {/* Skills tags */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                          className={`px-3 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300 hover:${colors.text} hover:border-current transition-colors cursor-default`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <div className="inline-block p-6 bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl">
              <h4 className="text-lg font-bold text-white mb-3">Certified Professional</h4>
              <p className="text-gray-300">
                🎓 Data Engineering Professional - <span className="text-purple-400">RapidMiner</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}