import { motion } from 'motion/react';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl mb-6 bg-gradient-to-b from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
            Aryan Sidhwani
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-8">
            AI Engineer • Physics Fanatic • Linux Lunatic
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            I like to build things and break things and build again, but even better this time.
            I draw my happiness from the moments when I make things work
          </p>
          
          <div className="flex gap-6 justify-center items-center flex-wrap">
            <a 
              href="mailto:iam@aryan.cfd"
              className="flex items-center gap-2 text-blue-300 hover:text-white transition-colors"
            >
              <Mail size={20} />
              iam@aryan.cfd
            </a>
            <a 
              href="https://github.com/silverstone-git"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-300 hover:text-white transition-colors"
            >
              <Github size={20} />
              GitHub
            </a>
            <a 
              href="https://huggingface.co/cytoe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-300 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm-2.5-9.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zm5 0c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zM12 17c-2.2 0-4-1.3-4-3h8c0 1.7-1.8 3-4 3z"/>
              </svg>
              HuggingFace
            </a>
            <a 
              href="https://blog.aryan.cfd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-300 hover:text-white transition-colors"
            >
              <ExternalLink size={20} />
              blog.aryan.cfd
            </a>
            <a 
              href="https://linkedin.com/in/aryan-sidhwani"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-300 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
