import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { MapPin, GraduationCap, Award } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 sm:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
      
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
              // Get to know me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2"
            >
              About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left side - Info cards */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Education Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/20 rounded-xl">
                    <GraduationCap className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Education</h3>
                    <p className="text-gray-300 mb-1">Bachelor of Informatics</p>
                    <p className="text-purple-400 font-medium">Universitas Teknologi Yogyakarta</p>
                    <p className="text-gray-400 text-sm mt-2">GPA: 3.40/4.00</p>
                    <p className="text-gray-500 text-sm">Sep 2021 - Aug 2025</p>
                  </div>
                </div>
              </motion.div>

              {/* Location Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm border border-blue-500/30 rounded-2xl"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-xl">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                    <p className="text-gray-300">Sleman, DI Yogyakarta</p>
                    <p className="text-gray-400 text-sm mt-2">Indonesia</p>
                  </div>
                </div>
              </motion.div>

              {/* Achievements Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-gradient-to-br from-pink-900/30 to-rose-900/30 backdrop-blur-sm border border-pink-500/30 rounded-2xl"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-pink-500/20 rounded-xl">
                    <Award className="w-6 h-6 text-pink-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Achievements</h3>
                    <ul className="space-y-2">
                      <li className="text-gray-300 text-sm">
                        🏆 Data Engineering Professional Certification - RapidMiner (2023)
                      </li>
                      <li className="text-gray-300 text-sm">
                        🏆 Best Division in Perspektif UTY (2024)
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right side - Description and stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="p-6 sm:p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">Professional Summary</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I'm a result-oriented Informatics Engineering graduate and IT professional 
                  specializing in Quality Assurance (QA) and Quality Control. With experience 
                  in ensuring system stability through comprehensive test scenarios and regression 
                  testing, I've successfully achieved 100% test coverage to minimize technical bottlenecks.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  While prioritizing technical excellence, I integrate UI/UX principles to ensure 
                  digital solutions are not only bug-free but also deliver a seamless and optimal 
                  user experience. My diverse skill set spans across QA testing, UI/UX design, 
                  and full-stack development.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-gradient-to-br from-purple-600/20 to-purple-800/20 backdrop-blur-sm border border-purple-500/30 rounded-xl text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-2">5+</div>
                  <div className="text-gray-300 text-sm">Projects Completed</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-gradient-to-br from-pink-600/20 to-pink-800/20 backdrop-blur-sm border border-pink-500/30 rounded-xl text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-2">100%</div>
                  <div className="text-gray-300 text-sm">Test Coverage</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-sm border border-blue-500/30 rounded-xl text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-2">3+</div>
                  <div className="text-gray-300 text-sm">Years Experience</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-gradient-to-br from-cyan-600/20 to-cyan-800/20 backdrop-blur-sm border border-cyan-500/30 rounded-xl text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-2">3</div>
                  <div className="text-gray-300 text-sm">Organizations</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}