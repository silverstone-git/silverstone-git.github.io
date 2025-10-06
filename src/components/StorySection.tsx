import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

interface StorySectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function StorySection({ title, children, className = '' }: StorySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`min-h-screen flex items-center justify-center px-6 py-20 relative ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl mb-12 text-center bg-gradient-to-r from-blue-200 to-purple-300 bg-clip-text text-transparent">
          {title}
        </h2>
        <div className="text-gray-200 space-y-8">
          {children}
        </div>
      </motion.div>
    </section>
  );
}
