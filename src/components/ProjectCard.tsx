import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  date: string;
  story: string;
  technologies: string;
  githubUrl?: string;
  liveUrl?: string;
}

export function ProjectCard({ title, date, story, technologies, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <div className="bg-gradient-to-br from-blue-950/40 to-purple-950/40 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
      <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
        <div>
          <h3 className="text-2xl text-blue-100 mb-1">{title}</h3>
          <p className="text-sm text-gray-400">{date}</p>
        </div>
        <div className="flex gap-3">
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition-colors"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
      <p className="text-gray-300 mb-4 leading-relaxed">{story}</p>
      <p className="text-sm text-purple-300">{technologies}</p>
    </div>
  );
}
