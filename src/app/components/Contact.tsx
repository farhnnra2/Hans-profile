import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ikhwanfarhan20@gmail.com',
      href: 'mailto:ikhwanfarhan20@gmail.com',
      color: 'purple',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '085879447850',
      href: 'tel:+62085879447850',
      color: 'pink',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Sleman, DI Yogyakarta',
      color: 'blue',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'i-farhan-ramadhan',
      href: 'https://linkedin.com/in/i-farhan-ramadhan/',
      color: 'cyan',
    },
  ];

  const colorVariants: Record<string, { bg: string; text: string; icon: string; glow: string }> = {
    purple: { bg: 'from-purple-600 to-purple-800', text: 'text-purple-400', icon: 'bg-purple-500/20', glow: 'hover:shadow-purple-500/50' },
    pink: { bg: 'from-pink-600 to-pink-800', text: 'text-pink-400', icon: 'bg-pink-500/20', glow: 'hover:shadow-pink-500/50' },
    blue: { bg: 'from-blue-600 to-blue-800', text: 'text-blue-400', icon: 'bg-blue-500/20', glow: 'hover:shadow-blue-500/50' },
    cyan: { bg: 'from-cyan-600 to-cyan-800', text: 'text-cyan-400', icon: 'bg-cyan-500/20', glow: 'hover:shadow-cyan-500/50' },
  };

  return (
    <section ref={ref} className="py-20 sm:py-32 bg-slate-950 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section title */}
          <div className="text-center mb-12 sm:mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className="text-purple-400 font-mono text-sm sm:text-base"
            >
              // Let's work together
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2"
            >
              Get in <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto"
            >
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </motion.p>
          </div>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((info, index) => {
              const colors = colorVariants[info.color];
              const Icon = info.icon;

              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  {info.href ? (
                    <motion.a
                      href={info.href}
                      target={info.label === 'LinkedIn' ? '_blank' : undefined}
                      rel={info.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className={`block p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl ${colors.glow} hover:shadow-xl transition-all group`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-4 ${colors.icon} rounded-xl group-hover:scale-110 transition-transform`}>
                          <Icon className={`w-6 h-6 ${colors.text}`} />
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-400 text-sm mb-1">{info.label}</p>
                          <p className="text-white font-medium break-all">{info.value}</p>
                        </div>
                        <Send className={`w-5 h-5 ${colors.text} opacity-0 group-hover:opacity-100 transition-opacity`} />
                      </div>
                    </motion.a>
                  ) : (
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className={`p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl ${colors.glow} hover:shadow-xl transition-all group`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-4 ${colors.icon} rounded-xl group-hover:scale-110 transition-transform`}>
                          <Icon className={`w-6 h-6 ${colors.text}`} />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm mb-1">{info.label}</p>
                          <p className="text-white font-medium">{info.value}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <motion.a
              href="mailto:ikhwanfarhan20@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full text-white font-medium text-lg transition-all hover:shadow-2xl hover:shadow-purple-500/50"
            >
              <Mail className="w-6 h-6" />
              Send me an Email
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}