import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';

// Paw print SVG component
const PawPrint = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM7 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM5 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm14 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
  </svg>
);

export function Hero() {
  // Floating paw configurations
  const floatingPaws = [
    { x: '10%', y: '15%', delay: 0, duration: 4, color: 'text-purple-400/30' },
    { x: '85%', y: '20%', delay: 1, duration: 5, color: 'text-pink-400/30' },
    { x: '15%', y: '70%', delay: 2, duration: 4.5, color: 'text-blue-400/30' },
    { x: '80%', y: '65%', delay: 1.5, duration: 5.5, color: 'text-purple-400/30' },
    { x: '30%', y: '30%', delay: 3, duration: 6, color: 'text-pink-400/30' },
    { x: '70%', y: '40%', delay: 2.5, duration: 5, color: 'text-blue-400/30' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating paw prints */}
        {floatingPaws.map((paw, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{ left: paw.x, top: paw.y }}
            initial={{ opacity: 0, scale: 0, rotate: -20 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0],
              rotate: [0, 10, -10, 0],
              y: [0, -30, -60, -90],
            }}
            transition={{
              duration: paw.duration,
              delay: paw.delay,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut"
            }}
          >
            <PawPrint className={`w-8 h-8 sm:w-12 sm:h-12 ${paw.color}`} />
          </motion.div>
        ))}

        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="text-purple-400 font-mono text-sm sm:text-base">Hi there! I'm Hans</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Ikhwan Farhan
            </span>
            <br />
            <span className="text-white">Ramadhan</span>
          </motion.h1>

          {/* Roles with animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-6 sm:mb-8"
          >
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {['QA Engineer', 'UI/UX Designer', 'Fullstack Developer'].map((role, index) => (
                <motion.span
                  key={role}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="px-4 sm:px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm sm:text-base"
                >
                  {role}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Result-oriented IT professional specializing in Quality Assurance and Quality Control. 
            I integrate UI/UX principles to ensure digital solutions are not only bug-free but also 
            deliver a seamless and optimal user experience.
          </motion.p>

          {/* Contact buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12 sm:mb-16"
          >
            <motion.a
              href="mailto:ikhwanfarhan20@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium transition-all hover:shadow-lg hover:shadow-purple-500/50"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">Get in Touch</span>
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/i-farhan-ramadhan/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium transition-all hover:bg-white/20"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">LinkedIn</span>
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col items-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-6 h-6 text-purple-400" />
            </motion.div>
            <span className="text-purple-400 text-sm mt-2 font-mono">Scroll to explore</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}