'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WelcomeIntro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const balloons = Array.from({ length: 25 });

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          {/* 🎈 Flying Dots */}
          <div className="absolute inset-0">
            {balloons.map((_, i) => (
              <span
                key={i}
                className="absolute w-2 h-2 rounded-full bg-white opacity-70 animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${3 + Math.random() * 3}s`,
                  bottom: `-${Math.random() * 20}px`,
                }}
              />
            ))}
          </div>

          {/* 💬 Welcome Text */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                duration: 1.2,
                ease: [0.76, 0, 0.24, 1],
              },
            }}
            className="text-white text-center text-4xl sm:text-6xl md:text-7xl font-bold tracking-widest relative z-10"
          >
            <motion.span
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { delay: 0.8, duration: 1 } }}
              className="block"
            >
              Welcome to
            </motion.span>
            <motion.span
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { delay: 1.4, duration: 1 } }}
              className="block text-white/80"
            >
              My Portfolio
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
