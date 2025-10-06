import { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { StarField } from './components/StarField';
import { StorySection } from './components/StorySection';
import { Footer } from './components/Footer';
import { CelestialObjects } from './components/CelestialObjects';
import { PreFooterSection } from './components/PreFooterSection';

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // bg-gradient-to-b from-black via-sky-500 to-indigo-700
    // bg-linear-to-b from-black via-sky-500 to-indigo-700 
    <div className="min-h-screen w-screen bg-black text-white overflow-x-hidden">
      <StarField scrollY={scrollY} />
      <CelestialObjects scrollY={scrollY} />

      <div className="relative z-10">
        <Hero />

        <StorySection title="The Awakening">
          <p className="text-lg leading-relaxed">
	  My journey into artificial intelligence started at <span className="text-blue-300">Delhi Technological University</span>, where I studied Engineering Physics with a minor in Mathematics and Computing. There I gained the rigorous mathematical foundation behind machine learning and AI.
	</p>

	<p className="text-lg leading-relaxed">But coursework was only the starting point. The real progress came from hands-on building.</p>

        </StorySection>

        <StorySection title="Current Orbit">
          <div className="bg-gradient-to-br from-indigo-950/40 to-blue-950/40 backdrop-blur-sm p-8 rounded-2xl border border-indigo-500/20">
            <h3 className="text-2xl text-blue-100 mb-4">C Simplify IT • Software Engineer</h3>
            <p className="text-sm text-gray-400 mb-6">May 2025 - Present • Remote</p>
            
            <p className="text-lg leading-relaxed mb-6">
              Today, I'm navigating the cutting edge of AI at C Simplify IT, where every day is about pushing boundaries. 
              I work with the <span className="text-purple-300">Hugging Face ecosystem</span>, building AI applications that feel 
              like magic but are grounded in rigorous engineering.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Fine-tuning large language models like <span className="text-purple-300">Qwen3 using LoRA</span> has taught me 
              that AI isn't just about raw computation—it's about personality, nuance, and behavior. I've created chatbots 
              that don't just respond, but converse with distinct intonations and character.
            </p>
            
            <p className="text-lg leading-relaxed">
              Working with <span className="text-purple-300">FastAPI and MongoDB</span>, I handle the invisible but crucial work: 
              data pipelines, infrastructure, and the engineering that makes AI products actually work in the real world. 
              I even forked the Web Thinker open-source project, adapting it to breathe life into new applications.
            </p>
          </div>
        </StorySection>

        <StorySection title="Stellar Creations">
          <p className="text-lg leading-relaxed mb-8 text-center">
            Each project is a star in my constellation—distinct, purposeful, and part of a larger pattern.
          </p>

          <div className="space-y-6">
            <ProjectCard
              title="CTIX Analyzer"
              date="July 2025"
              story="What if an AI could understand the stock market like a seasoned analyst? I built an agent that researches NSE stocks using ICICI Breeze and Zerodha Kite APIs. It doesn't just crunch numbers—it listens. Using Whisper for speech recognition, you can literally talk to it. Built with Smolagents and OpenAI's agentic frameworks, it features a Brave Search tool for real-time market intelligence. Gradio provides the interface where human intuition meets machine precision."
              technologies="Smolagents • OpenAI Agents • Gradio • Whisper • ICICI Breeze API • Zerodha Kite API • Brave API • BeautifulSoup"
              githubUrl="https://github.com/silverstone-git"
            />

            <ProjectCard
              title="PEM Bot"
              date="February 2025"
              story="Information trapped in blog posts is information lost. I created a RAG pipeline for the 'Please Explain Me' blog that makes knowledge searchable and conversational. Using Gemini's text embedding API with MongoDB Vector Search, I turned static articles into a queryable knowledge base. The bot scrapes Gartner's business trends with Selenium, chunks the data intelligently, and responds using gemini-2.0-flash. It's like giving a blog a brain."
              technologies="RAG Pipeline • Gemini API • MongoDB Vector Search • Selenium • gemini-2.0-flash"
              githubUrl="https://github.com/silverstone-git"
            />

            <ProjectCard
              title="Outstagram"
              date="December 2024"
              story="Before diving deep into AI, I needed to master the fundamentals of building robust Full Stack applications. Outstagram is a complete full stack application—not a toy project, but production-ready infrastructure. Built with FastAPI and Vite/React/TS, it handles everything: user authentication with argon2-cffi, session management, media uploads, likes, comments, friendships, and follow requests. Powered by SQLAlchemy ORM and PostgreSQL, containerized with Docker (cyt0/outstagram on Docker Hub), it features pagination and feed algorithms. This taught me that AI without solid engineering is just a demo."
              technologies="FastAPI • SQLAlchemy • PostgreSQL • Docker • argon2-cffi • Session Management"
              githubUrl="https://github.com/silverstone-git/outstagram"
              liveUrl="https://outstagram.aryan.cfd"
            />
          </div>
        </StorySection>

        <StorySection title="Sharing Knowledge">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-950/40 to-pink-950/40 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20">
              <h3 className="text-2xl text-purple-100 mb-4">Google Developer Student Club DTU</h3>
              <p className="text-sm text-gray-400 mb-4">Web Dev Lead • 2023-2024</p>
              <p className="text-lg leading-relaxed">
                The best way to learn is to teach. As Web Dev Lead, I shared knowledge with over 100 students through 
                offline events and YouTube videos, covering web development, networks, Django, and best practices. 
                Every question they asked made me dig deeper into my own understanding.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-950/40 to-pink-950/40 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20">
              <h3 className="text-2xl text-purple-100 mb-4">NSSS Foundation NGO</h3>
              <p className="text-sm text-gray-400 mb-4">Volunteer • June 2024</p>
              <p className="text-lg leading-relaxed">
                Technology is powerful, but purpose gives it meaning. I volunteered with NSSS Foundation NGO, 
                building their web presence and coordinating their Yoga Day 2024 event. It reminded me that 
                behind every line of code should be an intention to make the world a little better.
              </p>
            </div>
          </div>
        </StorySection>

        <StorySection title="The Toolkit">
          <p className="text-lg leading-relaxed mb-8 text-center">
            Like an astronaut needs their equipment, I've mastered the tools that let me explore the AI frontier.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-cyan-950/40 to-blue-950/40 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20">
              <h4 className="text-xl text-cyan-200 mb-4">Languages</h4>
              <p className="text-gray-300 leading-relaxed">
                Python • TypeScript • Go • C++ • Bash • MATLAB • SPSS • x86 Assembly
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-950/40 to-blue-950/40 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20">
              <h4 className="text-xl text-cyan-200 mb-4">Technologies</h4>
              <p className="text-gray-300 leading-relaxed">
                FastAPI • Django • SciPy • NumPy • SQL • MongoDB • Nginx • Machine Learning • Computer Vision
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-950/40 to-blue-950/40 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20">
              <h4 className="text-xl text-cyan-200 mb-4">Tools</h4>
              <p className="text-gray-300 leading-relaxed">
                Vim • Docker • Git • Cron • AWS S3 • Linux
              </p>
            </div>
          </div>
        </StorySection>

        <PreFooterSection />
        <Footer />
      </div>
    </div>
  );
}
