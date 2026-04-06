import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 bg-slate-950 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <span>Crafted with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
            </motion.div>
            <span>by</span>
            <span className="text-purple-400 font-medium">Ikhwan Farhan Ramadhan</span>
          </div>
          <p className="text-gray-500 text-xs mt-2">© 2026 All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
